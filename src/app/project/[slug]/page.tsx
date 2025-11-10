import { notFound } from "next/navigation";
import scss from "./ProjectPage.module.scss";
import Link from "next/link";
import { IoIosArrowBack } from "react-icons/io";
import Copy from "./Copy";
import ProjectSlider from "./ProjectSlider";

const projects = {
  filmhub: {
    link: "https://filmhub-8vcu.vercel.app/",
    title: "FilmHub",
    description:
      "FilmHub — платформа для поиска фильмов и получения информации о них, созданная с использованием TMDB API. Пользователи могут искать фильмы, смотреть трейлеры, изучать рейтинги. Проект был создан во время изучения Reactjs (redux/toolkit) и помог мне лучше разобраться в том, как устроены и взаимодействуют компоненты в React.",
    build: (
      <>
        Разработка выполнена с использованием{" "}
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          React.js
        </a>{" "}
        (v19.0). Для управления состоянием используется{" "}
        <code>Redux Toolkit</code> с <code>createAsyncThunk</code> и{" "}
        <code>async/await</code>. Анимации реализованы с помощью библиотеки{" "}
        <a
          href="https://www.framer.com/motion/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Framer Motion
        </a>
        , включая эффект <q>fade-shadow</q> при скролле фильмов и плавную смену
        категорий <q>week-today</q>. Для стилей применяются{" "}
        <code>SCSS-модули</code>,а верстка адаптирована под различные
        устройства. Палитра цветов подобрана на{" "}
        <a href="https://coolors.co" target="_blank" rel="noopener noreferrer">
          coolors.co
        </a>
        . Источник данных — <code>TMDB API</code>.
      </>
    ),
    images: [
      "/filmhubimg.png",
      "/filmhubmobile3.jpeg",
      "/filmhubimg3.png",
      "/filmhubimg4.png",
      "/filmhubimg6.png",
      "/filmhubimg5.png",
    ],
    tools: {
      Popular:
        "https://api.themoviedb.org/3/movie/popular?api_key=api&language=en-US&page=1",
      TopRated:
        "https://api.themoviedb.org/3/movie/top_rated?api_key=api&language=en-US&page=1",
      MovieDetails:
        "https://api.themoviedb.org/3/movie/movieId/credits?api_key=api&language=en-US",
    },
  },

  portfolio: {
    link: "https://portfolio-flame-nu-18.vercel.app",
    title: "Portfolio",
    description:
      "Проект был разработан, когда я только начинал изучать Next.js. Несмотря на то, что сайт не в полной мере использует все возможности оптимизации фреймворка, работа над ним помогла мне глубже понять архитектуру Next.js и основные принципы его работы.",
    build: (
      <>
        Проект выполнен на{" "}
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer">
          Next.js
        </a>{" "}
        (v13). Для стилизации использованы <code>SCSS-модули</code>, а верстка
        адаптирована под различные устройства. Этот сайт стал моим первым
        портфолио и помог закрепить базовые знания Next.js.
      </>
    ),
    images: ["/portfolio.png", "/portfoliomobile.jpeg"],
    tools: null,
  },
};
interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects[slug as keyof typeof projects];

  if (!project) return notFound();
  return (
    <div className={scss.projectPage}>
      <Link href={"/"} className={scss.back}>
        <IoIosArrowBack />
        Назад
      </Link>

      <div className={scss.content}>
        <ProjectSlider project={project} />
        <div className={scss.about}>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div
            className={scss.build}
            style={{ display: project.build ? "block" : "none" }}
          >
            {project.build}
          </div>
          <div className={scss.toProjectContainer}>
            <div className={scss.bg}></div>
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className={scss.toProject}
            >
              Go to {project.title}
            </Link>
          </div>
        </div>
      </div>

      <h2
        className={scss.toolsTitle}
        style={{ display: project.tools ? "flex" : "none" }}
      >
        Инструменты
      </h2>

      {project.tools && <Copy project={project} />}
    </div>
  );
}
