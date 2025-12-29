import React from "react";
import scss from "./Welcome.module.scss";

const text: string[] = [
  "Full-Stack разработчик",
  "NextJS специалисть",
  "Web разработчик",
];

const Welcome = () => {
  return (
    <section className={scss.welcome}>
      <div className={scss.content}>
        <h3>Привет, меня зовут</h3>
        <div className={scss.title}>
          <h1>Арзубек Джураев</h1>
          <div className={scss.text}>
            {text.map((el) => (
              <h2 key={el}>{el}</h2>
            ))}
          </div>
        </div>
        <p>
          Привет! Я фронтенд-разработчик, который постоянно развивается и
          изучает бэкенд. Для меня важно не просто писать код — я стремлюсь
          предлагать идеи, искать эффективные решения и мыслить как человек,
          создающий продукт, а не просто выполняющий задачу.
        </p>
        <a
          href="/АРЗУБЕК ДЖУРАЕВ.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className={scss.resume}
        >
          <span>Резюме</span>
        </a>
      </div>
    </section>
  );
};

export default Welcome;
