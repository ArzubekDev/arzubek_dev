"use client";
import React, { useEffect, useRef } from "react";
import scss from "./SideScrollbar.module.scss";

const SideScrollbar = () => {
  const barRef = useRef<HTMLDivElement | null>(null);
  const isDragging = useRef(false);
  const barHeight = useRef(0);
  const rafId = useRef<number | null>(null);

  const updateFromScroll = () => {
    if (isDragging.current || !barRef.current) return;

    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight;
    const winHeight = window.innerHeight;

    barHeight.current = (winHeight / docHeight) * winHeight;

    const maxScroll = docHeight - winHeight;
    const maxTranslate = winHeight - barHeight.current;

    const translateY = (scrollTop / maxScroll) * maxTranslate;

    barRef.current.style.height = `${barHeight.current}px`;
    barRef.current.style.transform = `translateY(${translateY}px)`;
  };

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onMouseDown = () => {
      isDragging.current = true;
      document.body.style.userSelect = "none";
    };

    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !barRef.current) return;

      // 🔥 негизги фокус ушул жерде
      if (rafId.current) cancelAnimationFrame(rafId.current);

      rafId.current = requestAnimationFrame(() => {
        const winHeight = window.innerHeight;
        const docHeight = document.documentElement.scrollHeight;
        const maxScroll = docHeight - winHeight;

        const maxTranslate = winHeight - barHeight.current;

        const barTop = Math.min(
          Math.max(e.clientY - barHeight.current / 2, 0),
          maxTranslate
        );

        barRef.current!.style.transform = `translateY(${barTop}px)`;

        const scrollTop = (barTop / maxTranslate) * maxScroll;

        window.scrollTo(0, scrollTop);
      });
    };

    const onMouseUp = () => {
      isDragging.current = false;
      document.body.style.userSelect = "";
      if (rafId.current) cancelAnimationFrame(rafId.current);
    };

    updateFromScroll();

    window.addEventListener("scroll", updateFromScroll);
    window.addEventListener("resize", updateFromScroll);
    bar.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);

    return () => {
      window.removeEventListener("scroll", updateFromScroll);
      window.removeEventListener("resize", updateFromScroll);
      bar.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
    };
  }, []);

  return (
    <div className={scss.siteScrollBar}>
      <div ref={barRef} className={scss.scroll_Bar} />
    </div>
  );
};

export default SideScrollbar;
