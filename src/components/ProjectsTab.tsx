import Tabs from "./ui/tabs";
import { Image } from "@nextui-org/react";
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
          <p className="text-2xl md:text-4xl font-semibold text-[#d9d9d9]">
            Rejira
          </p>
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
          <p className="text-2xl md:text-4xl font-semibold text-[#d9d9d9]">
            Astropics
          </p>
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
          <p className="text-2xl md:text-4xl font-semibold text-[#d9d9d9]">
            Hanami
          </p>
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
        className=" mt-5 mb-7 text-[#cacaca] hidden
      lg:block"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        voluptates, vitae voluptatibus, iusto, blanditiis nisi odit minus fugit
        commodi nulla quos officiis aspernatur necessitatibus nam. Corrupti
        dolorum dolorem officia nihil!
      </p>
      <div
        className="flex justify-between items-center 
      lg:gap-5 lg:grid lg:grid-cols-2 "
      >
        <img
          className="w-full h-44 rounded-lg mt-2
          lg:mt-0 lg:h-full"
          src="https://plus.unsplash.com/premium_photo-1669048776605-28ea2e52ae66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <img
          className="size-full hidden rounded-lg
          lg:block"
          src="https://plus.unsplash.com/premium_photo-1669048776605-28ea2e52ae66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        {/* <img src="/rejira1.png"></img>
        <img src="/rejira1.png"></img> */}
      </div>
      <div className="flex flex-wrap gap-4 mt-2 truncate">
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
                className="border-[#c9c9c9] border px-2 py-0.5 rounded-full text-[#c9c9c9] cursor-pointer
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
        className=" mt-5 mb-7 text-[#cacaca] hidden
      lg:block"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        voluptates, vitae voluptatibus, iusto, blanditiis nisi odit minus fugit
        commodi nulla quos officiis aspernatur necessitatibus nam. Corrupti
        dolorum dolorem officia nihil!
      </p>
      <div
        className="flex justify-between items-center 
      lg:gap-5 lg:grid lg:grid-cols-2 "
      >
        <img
          className="w-full h-44 rounded-lg mt-2
          lg:mt-0 lg:h-full"
          src="https://plus.unsplash.com/premium_photo-1669048776605-28ea2e52ae66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <img
          className="size-full hidden rounded-lg
          lg:block"
          src="https://plus.unsplash.com/premium_photo-1669048776605-28ea2e52ae66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        {/* <img src="/rejira1.png"></img>
        <img src="/rejira1.png"></img> */}
      </div>
      <div className="flex flex-wrap gap-4 mt-3 truncate">
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
                className="border-[#c9c9c9] border px-2 py-0.5 rounded-full text-[#c9c9c9] cursor-pointer
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
        className=" mt-5 mb-7 text-[#cacaca] hidden
      lg:block"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
        voluptates, vitae voluptatibus, iusto, blanditiis nisi odit minus fugit
        commodi nulla quos officiis aspernatur necessitatibus nam. Corrupti
        dolorum dolorem officia nihil!
      </p>
      <div
        className="flex justify-between items-center 
      lg:gap-5 lg:grid lg:grid-cols-2 "
      >
        <img
          className="w-full h-44 rounded-lg mt-2
          lg:mt-0 lg:h-full"
          src="https://plus.unsplash.com/premium_photo-1669048776605-28ea2e52ae66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <img
          className="size-full hidden rounded-lg
          lg:block"
          src="https://plus.unsplash.com/premium_photo-1669048776605-28ea2e52ae66?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        {/* <img src="/rejira1.png"></img>
        <img src="/rejira1.png"></img> */}
      </div>
      <div className="flex flex-wrap gap-4 mt-2 truncate">
        {techStack.map((o: TechStackItem) => {
          if (
            o.name === "React" ||
            o.name === "Node.js" ||
            o.name === "Express" ||
            o.name === "Tailwind" ||
            o.name === "MySQL"
          ) {
            return (
              <p
                className="border-[#c9c9c9] border px-2 py-0.5 rounded-full text-[#c9c9c9] cursor-pointer
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
