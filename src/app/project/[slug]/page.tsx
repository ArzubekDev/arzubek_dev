import { notFound } from "next/navigation";
import scss from "./ProjectPage.module.scss";
import Link from "next/link";
import Copy from "./Copy";
import BackButton from "./BackButton";
import ProjectSlider from "./ProjectSlider";

 const projects = {
  filmhub: {
    link: "https://filmhub-byarzu.vercel.app/",
    title: "FilmHub",
    description:
      "FilmHub — платформа для поиска фильмов и получения информации о них, созданная с использованием TMDB API. Пользователи могут искать фильмы, смотреть трейлеры, изучать рейтинги. Проект был реализован с помощью React.js и его экосистемы и позволил глубже разобраться в архитектуре приложения, взаимодействии компонентов, работе с асинхронными запросами и оптимизации пользовательского интерфейса.",
    build: (
      <>
     Разработка выполнена с использованием
<a href="https://react.dev" target="_blank" rel="noopener noreferrer"> React.js</a> (v19.0).

Для работы с серверными данными и асинхронными запросами применяется
<code> @tanstack/react-query</code>. Глобальное состояние реализовано с помощью
<code> Redux Toolkit</code> (<code>createAsyncThunk</code>, <code>async/await</code>).

Анимации и интерактивные эффекты выполнены с использованием
<a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer">Framer Motion</a> и <code>GSAP</code>.

<code>react-hook-form</code> используется для реализации поискового input’а.
SEO и метаданные управляются через <code>react-helmet-async</code>.

UI-компоненты частично реализованы с помощью <code>@mui/material</code>.
Стилизация выполнена с использованием <code>SCSS-модулей</code>, адаптивная верстка.

Источник данных — <code>TMDB API</code>.
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
nexus: {
    link: "https://nexus-alpha-navy.vercel.app/",
    title: "Nexus",
    description:
      "Nexus — это современный масштабируемый мессенджер для мгновенного обмена сообщениями в реальном времени. В основе проекта лежит работа с WebSocket для обеспечения мгновенной доставки сообщений без задержек. Реализована система аутентификации, возможность создания чатов и кастомизация интерфейса. Работа над этим Full-stack приложением позволила глубоко изучить архитектуру NestJS, работу с базами данных через Prisma и управление состоянием на клиенте с помощью Zustand.",
    build: (
      <>
        Разработка фронтенда выполнена на 
        <a href="https://nextjs.org" target="_blank" rel="noopener noreferrer"> Next.js</a>. 
        Стилизация реализована с помощью <code>TailwindCSS</code>, что обеспечило высокую скорость верстки и адаптивность.

        Для работы с состоянием чатов и пользовательского интерфейса используется 
        <code> Zustand</code> — легковесная альтернатива Redux. Анимации переходов и уведомлений выполнены с 
        <a href="https://www.framer.com/motion/" target="_blank" rel="noopener noreferrer"> Framer Motion</a>.

        Серверная часть построена на мощном фреймворке 
        <a href="https://nestjs.com" target="_blank" rel="noopener noreferrer"> NestJS</a>. 
        Реализована работа с <code>Websocket (Socket.io)</code> для двусторонней связи между клиентом и сервером.

        В качестве ORM используется <code>Prisma</code>, обеспечивающая типобезопасную работу с базой данных. 
        Система включает в себя регистрацию и авторизацию пользователей с валидацией данных.

        Проект демонстрирует навыки построения сложных архитектурных решений и работы с real-time данными.
      </>
    ),
    images: [
      "/Nexus-1.png",
      "/nexus-2.png",
      "/nexus-login.png",
      "/nexus-register.png",
      "/nexus-theme.png",
      "/nexus-3.jpg",
      "/nexus-4.jpg",
    ],
    tools: null
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
      <BackButton />

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
