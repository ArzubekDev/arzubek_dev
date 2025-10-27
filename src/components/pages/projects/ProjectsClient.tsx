// "use client";

// import { useState } from "react";
// import Image from "next/image";
// import scss from "./Projects.module.scss";

// interface Project {
//   id: number;
//   title: string;
//   imageUrl: string;
// }

// interface ProjectsClientProps {
//   projects: Project[];
// }

// export default function ProjectsClient({ projects }: ProjectsClientProps) {
//   const [zoomedId, setZoomedId] = useState<number | null>(null);
//   const [originMap, setOriginMap] = useState<Record<number, { x: string; y: string }>>({});

//   const handleMouseEnter = (id: number, e: React.MouseEvent<HTMLDivElement>) => {
//     setZoomedId(id);
//     updateOrigin(id, e);
//   };

//   const handleMouseMove = (id: number, e: React.MouseEvent<HTMLDivElement>) => {
//     if (zoomedId !== id) return;
//     updateOrigin(id, e);
//   };

//   const handleMouseLeave = (id: number) => {
//     setZoomedId(null);
//     setOriginMap((prev) => ({ ...prev, [id]: { x: "50%", y: "50%" } }));
//   };

//   const updateOrigin = (id: number, e: React.MouseEvent<HTMLDivElement>) => {
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = ((e.clientX - rect.left) / rect.width) * 100;
//     const y = ((e.clientY - rect.top) / rect.height) * 100;
//     setOriginMap((prev) => ({ ...prev, [id]: { x: `${x}%`, y: `${y}%` } }));
//   };

//   return (
//     <>
//       {projects.map((project) => {
//         const isZoomed = zoomedId === project.id;
//         const origin = originMap[project.id] || { x: "50%", y: "50%" };

//         return (
//           <div
//             key={project.id}
//             className={scss.image_container}
//             onMouseEnter={(e) => handleMouseEnter(project.id, e)}
//             onMouseMove={(e) => handleMouseMove(project.id, e)}
//             onMouseLeave={() => handleMouseLeave(project.id)}
//           >
//             <Image
//               src={project.imageUrl}
//               alt={project.title}
//               width={480}
//               height={270}
//               priority
//               quality={50}
//               style={{
//                 transform: isZoomed ? "scale(1.3)" : "scale(1)",
//                 transformOrigin: `${origin.x} ${origin.y}`,
//                 transition: isZoomed
//                   ? "transform 0.25s ease-out, filter 0.25s ease-out"
//                   : "transform 0.5s ease-out, filter 0.5s ease-out",
//                 filter: isZoomed ? "brightness(1.1)" : "brightness(1)",
//               }}
//             />
//           </div>
//         );
//       })}
//     </>
//   );
// }
