"use client";
import Image from "next/image";
import { FiLink } from "react-icons/fi";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";
import scss from "./Projects.module.scss";


interface TechProps {
  name: string;
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
      { name: "React + Vite",  },
      { name: "SASS/SCSS",  },
      { name: "Movie API",},
      { name: "Framer Motion", },
    ],
  },

   {
    id: 2,
    title: "Nexus — полноценный онлайн чат",
    link: "https://nexus-alpha-navy.vercel.app/",
    imageUrl: "/Nexus-1.png",
    slug: "nexus",
    technologies: [
      { name: "NextJS",  },
      { name: "TailwindCSS",  },
      { name: "Zustand",},
      { name: "Framer Motion", },
      { name: "NestJS", },
      { name: "Prisma", },
      { name: "Websocket", },
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

            <h3>Технологии, которые я использовал:</h3>
            <div className={scss.tech}>
              {el.technologies.map((tech, index) => (
                <div key={index} className={scss.techItem}>
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
