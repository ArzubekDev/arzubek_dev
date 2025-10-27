"use client";
import { useEffect } from "react";
import scss from "./Header.module.scss";

export default function HeaderClient() {
  useEffect(() => {
    const header = document.querySelector(`.${scss.header}`);

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (header) {
        if (scrollTop > 50) {
          header.classList.add(scss.active);
        } else {
          header.classList.remove(scss.active);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return null;
}
