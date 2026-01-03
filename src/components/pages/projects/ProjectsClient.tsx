"use client";
import Image from "next/image";
import { FiLink } from "react-icons/fi";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import scss from "./Projects.module.scss";


interface TechProps {
  name: string;
  img: string;
}

interface ProjectsProps {
  id: number;
  title: string;
  link: string;
  imageUrl: string;
  slug: string;
  technologies: TechProps[];
}

const projects: ProjectsProps[] = [
  {
    id: 1,
    title: "FilmHub",
    link: "https://filmhub-byarzu.vercel.app/",
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

const ProjectsClient = () => {

  return (
    <>
      {projects.map((el) => (
        <div className={scss.block} key={el.id}>
          <div className={scss.image_container}>
            <Image
              src={el.imageUrl}
              alt={el.title}
              width={520}
              height={270}
              style={{ borderRadius: "20px" }}
            />
          </div>

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
                    {/* <Image
                      src={tech.img}
                      alt={tech.name}
                      width={30}
                      height={30}
                      quality={30}
                    /> */}
                  </div>
                  <p>{tech.name}</p>
                </div>
              ))}
            </div>

            <div className={scss.actionButtons}>
              <Link href={el.link} target="_blank" className={scss.projectLink} prefetch={true}>
                <FiLink /> {el.slug}.com
              </Link>
              <Link href={`/project/${el.slug}`} className={scss.button}>
                Подробнее <FaAngleRight />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectsClient;
