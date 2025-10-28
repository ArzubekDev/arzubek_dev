// import ProjectsClient from "./ProjectsClient";
import React from "react";
import scss from "./Projects.module.scss";
import Image from "next/image";
import { FiLink } from "react-icons/fi";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

export default async function ProjectsServer() {
  const projects = [
    {
      id: 1,
      title: "FilmHub",
      link: "https://filmhub-8vcu.vercel.app/",
      imageUrl: "/filmhubimg.png",
      slug: "filmhub",
      technologies: [
        { name: "React + Vite", img: "/icons/react.png" },
        { name: "SASS", img: "/icons/sass.jpg" },
        { name: "Movie API", img: "/icons/api.png" },
        { name: "Framer Motion", img: "/icons/motion.png" },
      ],
    },
    {
      id: 2,
      title: "Моё первое портфолио",
      link: "https://portfolio-flame-nu-18.vercel.app/",
      imageUrl: "/portfolio.png",
      slug: "portfolio",
      technologies: [
        { name: "NextJS", img: "/icons/next.png" },
        { name: "SASS", img: "/icons/sass.jpg" },
        { name: "Framer Motion", img: "/icons/motion.png" },
      ],
    },
  ];

  return (
    <section className={scss.projects}>
      <div className={scss.content}>
        <h1>02</h1>
        <h3 className={scss.subtitle}>Проекты, над которыми я работал</h3>

        {projects.map((el) => (
          <div className={scss.block} key={el.id}>
            {/* Сүрөт */}
            <div className={scss.image_container}>
              <Image
                src={el.imageUrl}
                alt={el.title}
                width={520}
                height={270}
                priority
                style={{ borderRadius: "20px" }}
              />
            </div>

            {/* Инфо */}
            <div className={scss.info}>
              <h2>{el.title}</h2>
              <h3>Работал над:</h3>
              <h5>
                <span>Website</span>
              </h5>

              <h3>Технологии, которые я использовал:</h3>
              <div className={scss.tech}>
                {el.technologies.map((tech, index) => (
                  <div key={index} className={scss.techItem}>
                    <div className={scss.classImage}>
                      <Image
                        src={tech.img}
                        alt={tech.name}
                        width={30}
                        height={30}
                        priority
                        quality={30}
                      />
                    </div>
                    <p>{tech.name}</p>
                  </div>
                ))}
              </div>
              <div className={scss.actionButtons}>
                <Link href={el.link} target="_blank" className={scss.projectLink}>
                  <FiLink/> {el.slug}.com
                </Link>
                <Link href={`/project/${el.slug}`} className={scss.button}>
                  Подробнее <FaAngleRight />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
