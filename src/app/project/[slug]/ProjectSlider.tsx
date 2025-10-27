"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import scss from "./ProjectPage.module.scss";

interface Project {
  title: string;
  images: string[];
}

export default function ProjectSlider({ project }: { project: Project }) {
  return (
    <Swiper
      modules={[Navigation, Pagination]}
      navigation
      pagination={false}
      spaceBetween={30}
      slidesPerView={1}
      loop
      className={scss.swiper}
    >
      {project.images.map((img, i) => (
        <SwiperSlide key={i} className={scss.swiper_slide}>
          <Image
            src={img}
            alt={`${project.title} image ${i + 1}`}
            width={700}
            height={390}
            priority={false}
            quality={75}
            loading="lazy"
          />
         
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
