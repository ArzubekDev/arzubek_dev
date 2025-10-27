"use client";
import React from "react";
import scss from "./BackgroundGlow.module.scss"
export default function BackgroundGlow() {
  return (
    <div className={scss.container}>
     
      <div className={`${scss.glow} ${scss.topRight}`}></div>
      <div className={`${scss.glow} ${scss.topLeft}`}></div>
      <div className={`${scss.glow} ${scss.bottomLeft}`}></div>
      <div className={`${scss.glow} ${scss.bottomRight}`}></div>
    </div>
  );
}
