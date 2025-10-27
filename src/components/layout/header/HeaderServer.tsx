// "use client";
// import Link from "next/link";
// import scss from "./Header.module.scss";
// import { useEffect, useState } from "react";

// type NavItem = {
//   id: number;
//   link: string;
//   item: string;
// };

// const navItems: NavItem[] = [
//   { id: 1, link: "#about", item: "Обо мне" },
//   { id: 2, link: "#projects", item: "Проекты" },
//   { id: 3, link: "#contact", item: "Контакты" },
// ];

// export default function HeaderServer() {
//   const [activeId, setActiveId] = useState<number | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const about = document.querySelector("#about");
//       const projects = document.querySelector("#projects");
//       const contact = document.querySelector("#contact");

//       const scrollY = window.scrollY + window.innerHeight / 2;

//       const aboutTop = about?.getBoundingClientRect().top! + window.scrollY;
//       const projectTop = projects?.getBoundingClientRect().top! + window.scrollY;
//       const contactTop = contact?.getBoundingClientRect().top! + window.scrollY;

//       if (scrollY >= aboutTop && scrollY < projectTop) {
//         setActiveId(1);
//       } else if (scrollY >= projectTop && scrollY < contactTop) {
//         setActiveId(2);
//       } else if (scrollY >= contactTop) {
//         setActiveId(3);
//       } else {
//         setActiveId(null); // welcome зонасында
//       }
//     };

//     handleScroll();
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <header className={scss.header}>
//       <div className="container">
//         <div className={scss.content}>
//           <div className={scss.logoContainer}>
//             <div className={scss.logo}></div>
//             <span className={scss.back}></span>
//             <span className={scss.front}></span>
//             <h2>A</h2>
//           </div>

//           <div className={scss.left}>
//             {navItems.map((el) => (
//               <nav key={el.item}>
//                 <Link
//                   href={el.link}
//                   className={scss.navLink}
//                   style={{
//                     color: activeId === el.id ? "dodgerblue" : "white",
//                     transition: "color 0.3s ease",
//                   }}
//                 >
//                   <span>{`0${el.id}.`}</span> {el.item}
//                 </Link>
//               </nav>
//             ))}
//             <button className={scss.resume}>
//               <span>Резюме</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }
