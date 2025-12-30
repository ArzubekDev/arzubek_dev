import React from "react";
import scss from "./About.module.scss";
import { AiOutlinePushpin } from "react-icons/ai";
import Image from "next/image";

const skills: string[] = [
  "JavaScript (ES6+)",
  "React",
  "RTK Query",
  "Zustand",
  "TypeScript",
  "NextJS",
  "SASS",
  "Tailwind",
  "Nodejs",
  "Express",
  "Prisma",
  "NestJS"
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
  Я начал свой путь в IT в августе 2024 года в Motion Web Academy.
  За это время я прошёл путь от фронтенд-разработки к полноценному Full-Stack.
  Мне нравится превращать идеи в работающие продукты, разбираться в сложных
  задачах и постоянно расти как разработчик. Я уделяю внимание чистоте кода,
  архитектуре и созданию современных веб-приложений, удобных для пользователей.
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
