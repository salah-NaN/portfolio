import ThreeDCardDemo from "./components/ThreeDCard";
import Hero from "./components/Hero";
import ProjectsTab from "./components/ProjectsTab";
import techStack from "./utils/technologies";
import TechnologieComponent from "./components/TechnologieComponent";
import CardTilt from "./components/CardTilt";
import { useRef } from "react";
import Footer from "./components/Footer";

interface TechStackItem {
  name: string;
  img: string;
}

const App = () => {
  const refProjects = useRef<HTMLDivElement>(null);

  // funcs

  const scrollDown = () => {
    if (refProjects.current) {
      refProjects.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed w-full h-dvh">
      {/* this is for making fixed all the page */}
      <div className="dark absolute overflow-y-scroll z-50 size-full">
        <Hero scrollDown={scrollDown}></Hero>

        <div className=" w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
          {/* to give a faded look to grid background*/}
          <div className=" absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_10%,black)]"></div>
          <div
            id="projects"
            className="w-[89%]
          lg:w-[1025px] lg:h-[900px]"
            ref={refProjects}
          >
            <h2
              className=" relative mt-20 text-5xl text-[#fafafa] font-medium z-50 bg-gradient-to-br from-[#343434] via-[#b3b3b3] to-[#969696] bg-clip-text text-transparent w-fit h-14
            lg:text-6xl lg:mt-40 lg:h-20"
            >
              Projects
            </h2>
            <ProjectsTab />
          </div>
          {/* only is a margin top */}
          <div
            className="mt-40
          lg:mt-72"
          ></div>
        </div>
        <div className="w-full relative bg-[#000000] z-50 shadow-[0px_-35px_90px_40px_rgba(0,0,0,1)] ">
          <div
            id="techStack"
            className="w-[89%] mx-auto h-full pb-20
          lg:w-[1025px] "
          >
            <h2
              className="pt-0 pb-16 text-5xl font-medium bg-gradient-to-br from-[#1e1e1e] via-[#b3b3b3] to-[#505050] bg-clip-text text-transparent w-fit
             lg:text-6xl lg:pb-24"
            >
              Tech Stack
            </h2>
            <div
              className="grid grid-cols-3 gap-3 text-[#fafafa]
            lg:grid-cols-6 lg:w-full"
            >
              {techStack.map((o: TechStackItem) => (
                <CardTilt
                  TechnologieComponent={TechnologieComponent}
                  name={o.name}
                  img={o.img}
                ></CardTilt>
              ))}
            </div>
            <h2
              className="pt-40 pb-[57px] text-5xl font-medium bg-gradient-to-br from-[#343434] via-[#b3b3b3] to-[#969696] bg-clip-text text-transparent w-fit
            lg:text-6xl lg:pb-24 lg:pt-52"
            >
              Contact
            </h2>
            <ThreeDCardDemo></ThreeDCardDemo>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default App;
