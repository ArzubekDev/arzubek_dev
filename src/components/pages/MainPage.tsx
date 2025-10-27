import Welcome from "./welcome/Welcome";
import About from "./about/About";
import ProjectsServer from "./projects/Projects";
import Contact from "./contact/Contact";

export default async function MainPage() {

  return (
    <>
      <Welcome />
      <div id="about">
      <About />
      </div>
      <div id="projects">
      <ProjectsServer />
      </div>
      <div id="contact">
      <Contact />
      </div>
    </>
  );
}
