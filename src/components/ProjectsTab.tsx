import Tabs from "./ui/tabs";
import techStack from "../utils/technologies";

interface TechStackItem {
  name: string;
  img: string;
}

const ProjectsTab = () => {
  const tabs = [
    {
      title: "Rejira",
      value: "Rejira",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl px-5 py-3  bg-gradient-to-br from-[#323232] via-[#000000] to-[#404040] 
        lg:p-10"
        >
          <div className="flex justify-between items-center w-full">
            <p className="text-2xl md:text-4xl font-semibold text-[#d9d9d9]">
              Rejira
            </p>
            <a className="block lg:hover:scale-110 lg:transition-all lg:sduration-300">
              <i
                className="devicon-github-original text-[1.8rem] w-fit text-[#dedede]
            lg:text-[2.8rem] "
              ></i>
            </a>
          </div>
          <RejiraContent />
        </div>
      ),
    },
    {
      title: "Astropics",
      value: "Astropics",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl px-5 py-3  bg-gradient-to-br from-[#323232] via-[#000000] to-[#404040]
        lg:p-10"
        >
          <div className="flex justify-between items-center w-full">
            <p className="text-2xl md:text-4xl font-semibold text-[#d9d9d9]">
              Astropics
            </p>
            <a className="block lg:hover:scale-110 lg:transition-all lg:sduration-300">
              <i
                className="devicon-github-original text-[1.8rem] w-fit text-[#dedede]
            lg:text-[2.8rem] "
              ></i>
            </a>
          </div>
          <AstropicsContent />
        </div>
      ),
    },
    {
      title: "Hanami",
      value: "Hanami",
      content: (
        <div
          className="w-full overflow-hidden relative h-full rounded-2xl px-5 py-3  bg-gradient-to-br from-[#323232] via-[#000000] to-[#404040]
        lg:p-10"
        >
          <div className="flex justify-between items-center w-full">
            <p className="text-2xl md:text-4xl font-semibold text-[#d9d9d9]">
              Hanami
            </p>
            <a className="block lg:hover:scale-110 lg:transition-all lg:sduration-300">
              <i
                className="devicon-github-original text-[1.8rem] w-fit text-[#dedede]
            lg:text-[2.8rem] "
              ></i>
            </a>
          </div>
          <HanamiContent />
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start mt-12 mb-20">
      <Tabs tabs={tabs} />
    </div>
  );
};

const RejiraContent = () => {
  return (
    <>
      <p
        className=" mt-5 mb-7 text-[#cacaca] hidden leading-relaxed
      lg:block"
      >
        This project is a{" "}
        <span className="font-semibold text-[#82b0ff]">tool</span> designed for
        software developer teams. To gain access, users must{" "}
        <span className="font-semibold text-[#82b0ff]">log in.</span> Once
        logged in, they can create a project and{" "}
        <span className="font-semibold text-[#82b0ff]">
          invite collaborators
        </span>
        . Within the project, there is a{" "}
        <span className="underline underline-offset-2">Kanban</span> table where
        new <span className="font-semibold text-[#82b0ff]">issues</span> can be
        added, updated, and deleted, along with their descriptions, priority,
        and nature. Additional{" "}
        <span className="underline underline-offset-2">features</span> include{" "}
        <span className="font-semibold text-[#82b0ff]">assigning issues</span>{" "}
        to other existing users, sorting them using a{" "}
        <span className="font-semibold text-[#82b0ff]">drag-and-drop</span>{" "}
        system, adding and deleting{" "}
        <span className="font-semibold text-[#82b0ff]">tags</span> and{" "}
        <span className="font-semibold text-[#82b0ff]">comments.</span>
      </p>
      <div
        className="flex justify-between items-center 
      lg:gap-5 lg:grid lg:grid-cols-2 "
      >
        <img
          className="w-full h-44 rounded-lg mt-2 mb-2.5
          lg:mt-0 lg:h-full lg:mb-0"
          src="rejira1.png"
        />
        <img
          className="size-full hidden rounded-lg 
          lg:block"
          src="rejira2.png"
        />
        {/* <img src="/rejira1.png"></img>
        <img src="/rejira1.png"></img> */}
      </div>
      <div
        className="flex flex-wrap gap-4 mt-1.5 truncate
      lg:mt-4"
      >
        {techStack.map((o: TechStackItem) => {
          if (
            o.name === "React" ||
            o.name === "Node.js" ||
            o.name === "Express" ||
            o.name === "MySQL" ||
            o.name === "Tailwind"
          ) {
            return (
              <p
                className="border-[#c9c9c9] border cursor-default px-2 py-0.5 rounded-full text-[#c9c9c9]
              lg:px-3 lg:py-2 lg:mt-5"
              >
                {o.name}
              </p>
            );
          }
        })}
      </div>
    </>
  );
};

const AstropicsContent = () => {
  return (
    <>
      <p
        className=" mt-5 mb-4 text-[#cacaca] hidden leading-relaxed
      lg:block"
      >
        A web application where{" "}
        <span className="font-semibold text-[#7d53d4]">logged-in</span> users
        can view posts from others,{" "}
        <span className="font-semibold text-[#7d53d4]">sorted</span>{" "}
        chronologically. Additionally, users can{" "}
        <span className="underline underline-offset-2">upload</span> photos with{" "}
        <span className="font-semibold text-[#d749a1]">descriptions</span> and
        add <span className="font-semibold text-[#d749a1]">tags</span> to them.
      </p>
      <div
        className=" flex justify-evenly items-center
 "
      >
        <img
          className="w-fit h-44 rounded-lg mt-2 
          lg:h-[20rem]"
          src="/astropics1.png"
        />
        <img
          className="w-fit h-44 rounded-lg mt-2
          lg:h-[20rem]"
          src="/astropics2.png"
        />
        <img
          className="w-fit h-44 rounded-lg mt-2
          lg:h-[20rem]"
          src="/astropics3.png"
        />
        {/* <img src="/rejira1.png"></img>
        <img src="/rejira1.png"></img> */}
      </div>
      <div
        className="flex flex-wrap gap-4 mt-3.5 truncate
      lg:mt-3"
      >
        {techStack.map((o: TechStackItem) => {
          if (
            o.name === "Astro" ||
            o.name === "React" ||
            o.name === "Node.js" ||
            o.name === "Express" ||
            o.name === "Tailwind"
          ) {
            return (
              <p
                className="border-[#c9c9c9] border px-2 py-0.5 rounded-full text-[#c9c9c9] cursor-default
              lg:px-3 lg:py-2 lg:mt-5"
              >
                {o.name}
              </p>
            );
          }
        })}
      </div>
    </>
  );
};

const HanamiContent = () => {
  return (
    <>
      <p
        className=" mt-5 mb-7 text-[#cacaca] hidden leading-relaxed
      lg:block"
      >
        The <span className="font-semibold text-[#54cd68]">project</span> aims
        to develop a web application where users can check the{" "}
        <span className="font-semibold text-[#54cd68]">
          flowering and fruit
        </span>{" "}
        status of fruit trees and flowers. Additionally, users can explore{" "}
        <span className="underline underline-offset-2">activities</span> and{" "}
        <span className="underline underline-offset-2">locations</span> to
        observe these events, but only during available seasons. Users can
        navigate to their desired destinations in two ways: by utilizing the{" "}
        <span className="font-semibold text-[#54cd68]">search bar</span> or by
        using a <span className="font-semibold text-[#54cd68]">temporal</span>{" "}
        map. Furthermore, there is a{" "}
        <span className="font-semibold text-[#54cd68]">review</span> system,
        which is accessible only to logged-in users.
      </p>
      <div
        className="flex justify-between items-center 
      lg:gap-5 lg:grid lg:grid-cols-2 "
      >
        <img
          className="w-full h-44 rounded-lg mt-2 mb-2.5
          lg:mt-0 lg:h-full lg:mb-0"
          src="/hanami1.png"
        />
        <img
          className="size-full hidden rounded-lg
          lg:block"
          src="/hanami2.png"
        />
        {/* <img src="/rejira1.png"></img>
        <img src="/rejira1.png"></img> */}
      </div>
      <div
        className="flex flex-wrap gap-4 mt-1 truncate
      lg:mt-4"
      >
        {techStack.map((o: TechStackItem) => {
          if (
            o.name === "React" ||
            o.name === "Node.js" ||
            o.name === "Express" ||
            o.name === "Tailwind" ||
            o.name === "MySQL" ||
            o.name === "Azure"
          ) {
            return (
              <p
                className="border-[#c9c9c9] border px-2 py-0.5 rounded-full text-[#c9c9c9] cursor-default
              lg:px-3 lg:py-2 lg:mt-5"
              >
                {o.name}
              </p>
            );
          }
        })}
      </div>
    </>
  );
};

export default ProjectsTab;
