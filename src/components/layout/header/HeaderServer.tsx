// components/Header/HeaderServer.tsx
import Link from "next/link";
import scss from "./Header.module.scss";

type NavItem = {
  link: string;
  item: string;
};

const navItem: NavItem[] = [
  { link: "/", item: "Обо мне" },
  { link: "/", item: "Проекты" },
  { link: "/", item: "Контакты" },
];


export default function HeaderServer() {
  return (
    <header className={scss.header}>
      <div className="container">
        <div className={scss.content}>
          <div className={scss.logoContainer}>
            <div className={scss.logo}></div>
            <span className={scss.back}></span>
            <span className={scss.front}></span>
            <h2>A</h2>
          </div>
          <div className={scss.left}>
            {navItem.map((el, idx) => (
              <nav key={el.item}>
                <Link href={el.link} className={scss.navLink}>
                  <span>{`0${idx + 1}.`}</span> {el.item}
                </Link>
              </nav>
            ))}
            <button className={scss.resume}>
              <span>Резюме</span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
