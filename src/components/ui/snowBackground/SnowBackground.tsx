"use client";
import { useEffect } from "react";

export default function SnowBackground() {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d")!;
    document.body.appendChild(canvas);
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "0";

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const snowflakes: { x: number; y: number; r: number; d: number }[] = [];
    const maxFlakes = 7;

    for (let i = 0; i < maxFlakes; i++) {
      snowflakes.push({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 3 + 1,
        d: Math.random() * maxFlakes,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(255, 255, 255, 0.8)";
      ctx.beginPath();
      for (let i = 0; i < maxFlakes; i++) {
        const f = snowflakes[i];
        ctx.moveTo(f.x, f.y);
        ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2, true);
      }
      ctx.fill();
      update();
    }

    let angle = 0;
    function update() {
      angle += 0.01;
      for (let i = 0; i < maxFlakes; i++) {
        const f = snowflakes[i];
        f.y += Math.cos(angle + f.d) + 1 + f.r / 2;
        f.x += Math.sin(angle) * 0.5;

        if (f.y > height) {
          snowflakes[i] = { x: Math.random() * width, y: 0, r: f.r, d: f.d };
        }
      }
    }

    function animate() {
      draw();
      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    return () => {
      canvas.remove();
    };
  }, []);

  return null;
}
