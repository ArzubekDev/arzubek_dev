import Welcome from "./welcome/Welcome";
import About from "./about/About";
import ProjectsServer from "./projects/Projects";
import Contact from "./contact/Contact";

export default async function MainPage() {

  return (
    <>
      <Welcome />
      <About />
      <ProjectsServer />
      <Contact />
    </>
  );
}
