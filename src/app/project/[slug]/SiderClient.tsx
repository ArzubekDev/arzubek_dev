"use client";
import dynamic from "next/dynamic";
import type { Project } from "./ProjectSlider";

const ProjectSlider = dynamic<{ project: Project }>(
  () => import("./ProjectSlider"),
  { ssr: false, loading: () => <p>Слайдер жүктөлүүдө...</p> }
);

export default function ProjectSliderWrapper({ project }: { project: Project }) {
  return <ProjectSlider project={project} />;
}
