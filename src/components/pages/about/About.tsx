import React from "react";
import scss from "./About.module.scss";
import { AiOutlinePushpin } from "react-icons/ai";
import Image from "next/image";

const skills: string[] = [
  "HTML",
  "CSS",
  "Javascript (ES6+)",
  "React",
  "Typescript",
  "NextJS",
  "SASS",
  "Nodejs",
];

const About = () => {
  return (
    <section className={scss.about}>
      <div className={scss.content}>
        <h1>01</h1>
        <div className={scss.aboutContainer}>
         <div className={scss.infoContainer}>
           <div className={scss.info}>
            <h3>Обо мне</h3>
            <p>
              Я начал свой путь в IT в августе 2024 года, познакомившись с
              Motion Web Academy. За 13 месяцев обучения я освоил фронтенд и
              сейчас активно развиваю навыки в бэкенде, стремясь стать
              полноценным Full Stack разработчиком. Мне нравится превращать идеи
              в реальные проекты, решать сложные задачи и изучать новые
              технологии. Я ценю чистый, эффективный код и стремлюсь создавать
              удобные и современные веб-приложения, которые приносят реальную
              пользу пользователям.
            </p>
          </div>
          <h4>Технические навыки:</h4>
          <div className={scss.skills}>
            {skills.map((el) => (
              <h5 key={el}>
                <span>
                  <AiOutlinePushpin />
                </span>
                {el}
              </h5>
            ))}
          </div>
         </div>
        <div className={scss.image}>
            <Image
              src={"/A.jpeg"}
              width={290}
              height={310}
              alt="img"
              priority={true}
              quality={90}
              loading="eager"
            />
            <div className={scss.front}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
