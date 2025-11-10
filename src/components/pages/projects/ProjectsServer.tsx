import React from "react";
import scss from "./Projects.module.scss";
import ProjectsClient from "./ProjectsClient";

export default async function ProjectsServer() {
  return (
    <section className={scss.projects}>
      <div className={scss.content}>
        <h1>02</h1>
        <h3 className={scss.subtitle}>Проекты, над которыми я работал</h3>
        <ProjectsClient />
      </div>
    </section>
  );
}
