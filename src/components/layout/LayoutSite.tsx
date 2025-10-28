"use client";
import { FC, ReactNode, useEffect } from "react";
import scss from "./LayoutSite.module.scss";
import Header from "./header/Header";
import Footer from "./footer/Footer";
import BackgroundGlow from "../ui/backgroundGlow/BackgroundGlow";
import LightEffect from "../ui/lightEffect/LightEffect";

interface LayoutSiteProps {
  children: ReactNode;
}

const LayoutSite: FC<LayoutSiteProps> = ({ children }) => {
useEffect(() => {
  // Эгер курсор колдоно албаса — функция иштебейт
  if (window.matchMedia("(pointer: coarse)").matches) return;

  const light = document.createElement("div");
  light.id = "light";
  light.style.position = "fixed";
  light.style.top = "0";
  light.style.left = "0";
  light.style.width = "100%";
  light.style.height = "100%";
  light.style.pointerEvents = "none";
  light.style.zIndex = "9999";
  document.body.appendChild(light);

  let targetX = 0,
    targetY = 0;
  let currentX = 0,
    currentY = 0;

  const handleMouseMove = (e: MouseEvent) => {
    targetX = e.clientX;
    targetY = e.clientY;
  };

  function animate() {
    currentX += (targetX - currentX) * 0.3;
    currentY += (targetY - currentY) * 0.3;

    light.style.background = `radial-gradient(circle at ${currentX}px ${currentY}px, rgba(116, 2, 223, 0.16), transparent 200px)`;
    requestAnimationFrame(animate);
  }

  document.addEventListener("mousemove", handleMouseMove);
  animate();

  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
    document.body.removeChild(light);
  };
}, []);


  return (
    <div
      className={scss.layoutSite}
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <Header />
      <main>{children}</main>
      <Footer />
      <BackgroundGlow />
      <LightEffect/>
    </div>
  );
};
export default LayoutSite;
