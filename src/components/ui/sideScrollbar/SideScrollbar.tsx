"use client";
import React, { useEffect } from "react";
import scss from "./SideScrollbar.module.scss";

const SideScrollbar = () => {
  useEffect(() => {
    const scrollBar = document.getElementById("scrollBar");

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;

      if (!scrollBar) return;

      // Scroll bar бийиктиги пропорционалдуу
      const barHeight = (winHeight / docHeight) * winHeight;
      const maxScroll = docHeight - winHeight;
      const maxTranslate = winHeight - barHeight;

      const scrollPercent = (scrollTop / maxScroll) * maxTranslate;

      scrollBar.style.height = `${barHeight}px`;
      scrollBar.style.transform = `translateY(${scrollPercent}px)`;
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  return (
    <div className={scss.siteScrollBar}>
      <div className={scss.scroll_Bar} id="scrollBar"></div>
    </div>
  );
};

export default SideScrollbar;
