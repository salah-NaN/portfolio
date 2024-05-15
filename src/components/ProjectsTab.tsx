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
            <a
              className="block lg:hover:scale-110 lg:transition-all lg:sduration-300"
              target="_blank"
              href="https://github.com/salah-NaN/rejira"
            >
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
            <a
              className="block lg:hover:scale-110 lg:transition-all lg:sduration-300"
              target="_blank"
              href="https://github.com/salah-NaN/fjs-astropics"
            >
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
            <a
              className="block lg:hover:scale-110 lg:transition-all lg:sduration-300"
              target="_blank"
              href="https://github.com/salah-NaN/front-hanami"
            >
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
        className=" mt-5 mb-7 text-[#cacaca] hidden leading-relaxed text-justify
      lg:block"
      >
        This project is a tool designed for software developer teams. To gain
        access, users must log in. Once logged in, they can create a project and
        invite collaborators. Within the project, there is a Kanban table where
        new issues can be added, updated, and deleted, along with their
        descriptions, priority, and nature. Additional features include
        assigning issues to other existing users, sorting them using a
        drag-and-drop system, adding and deleting tags and comments...
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
        A web application where logged-in users can view posts from others,
        sorted chronologically. Additionally, users can upload photos with
        descriptions and add tags to them.
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
        The project aims to develop a web application where users can check the
        flowering and fruit status of fruit trees and flowers. Additionally,
        users can explore activities and locations to observe these events, but
        only during available seasons. Users can navigate to their desired
        destinations in two ways: by utilizing the search bar or by using a
        temporal map. Furthermore, there is a review system, which is accessible
        only to logged-in users.
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
