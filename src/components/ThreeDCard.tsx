"use client";
import profile from "../../public/profilePixeled.jpg";
// import Image from "";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

import { Image, Link } from "@nextui-org/react";

const ThreeDCardDemo = () => {
  return (
    <CardContainer className="inter-var ">
      <CardBody
        className="bg-[#0d0d0d] flex flex-col relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-gray-300
        lg:w-full lg:flex-row  lg:gap-7"
      >
        <div
          className="flex flex-col
        lg:w-full lg:shrink"
        >
          {/* image */}
          <CardItem translateZ="100" className="w-full mt-4 ">
            <Image
              src={profile}
              height="1000"
              width="1000"
              className="h-[255px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
              alt="thumbnail"
            />
          </CardItem>
          {/* name */}
          <CardItem
            translateZ="50"
            className="text-2xl font-semibold text-[#dadada] mt-4"
          >
            Salah Eddin Amar Nouhi
          </CardItem>

          {/* open for work */}
          <CardItem as="div" translateZ="60" className="mt-3"></CardItem>
        </div>
        {/* description */}
        <CardItem
          as="p"
          translateZ="50"
          className="  text-[#cacaca] leading-relaxed  mt-4 text-justify w-full
          lg:w-9/12 lg:flex lg:flex-col  lg:mx-auto lg:gap-5 lg:items-center"
        >
          Developer and computer engineer student, much of my free time I
          dedicate to learning on my own by creating projects or participating
          in community events. I have finished a FullStack bootcamp this year
          and after that my developent skills have grown massively. Whether you
          want to collaborate on a project with me or just feel like chatting,
          feel free to contact me!
          <button
            className="hidden cursor-default
      relative lg:inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none "
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#131313_0%,#fafafa_50%,#131313_100%)]" />
            <span
              className="
        inline-flex h-full w-full items-center justify-center rounded-full bg-[#000000] px-3 py-1 text-sm font-medium text-[#eeeeee] backdrop-blur-3xl"
            >
              Open for work
            </span>
          </button>
        </CardItem>

        {/* contact buttons */}
        <CardItem
          as="div"
          translateZ="75"
          className="flex justify-between mt-5  w-full
          lg:flex-col lg:w-1/12"
        >
          <a
            href="https://www.linkedin.com/in/salah-amar/"
            target="_blank"
            className="hover:scale-125 transition-all duration-300"
          >
            <i className="devicon-linkedin-plain text-[4.3rem] size-full text-[#dedede]"></i>
          </a>
          <a
            href="https://github.com/salah-NaN"
            target="_blank"
            className="hover:scale-125 transition-all duration-300"
          >
            <i className="devicon-github-original text-[4.3rem] size-full text-[#dedede]"></i>
          </a>
          <a href="/CV.pdf" download="CV.pdf">
            <img
              className="hover:scale-125 transition-all duration-300  size-[4.3rem]"
              src="/adobe.svg"
            ></img>
          </a>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCardDemo;

// "use client";
// import profile from "../../public/profilePixeled.jpg";
// // import Image from "";
// import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

// import { Image, Link } from "@nextui-org/react";

// const ThreeDCardDemo = () => {
//   return (
//     <CardContainer className="inter-var">
//       <CardBody className="bg-[#131313]  relative group/card w-auto sm:w-[30rem] h-auto rounded-xl p-6 border border-gray-300">
//         <div
//           className="flex flex-col
//         lg:flex-col"
//         >
//           <CardItem
//             translateZ="50"
//             className="text-2xl font-bold text-[#fafafa]"
//           >
//             Salah Eddin Amar Nouhi
//           </CardItem>
//           <CardItem
//             as="p"
//             translateZ="60"
//             className=" text-lg text-[#cacaca] max-w-sm mt-2 "
//           >
//             Full Stack Developer
//           </CardItem>
//           <CardItem translateZ="100" className="w-full mt-4">
//             <Image
//               src={profile}
//               height="1000"
//               width="1000"
//               className="h-[255px] w-full object-cover rounded-xl group-hover/card:shadow-xl"
//               alt="thumbnail"
//             />
//           </CardItem>

//           <CardItem
//             as="p"
//             translateZ="60"
//             className="  text-[#cacaca]  mt-3 text-justify w-full"
//           >
//             Developer and computer science student, much of my free time I
//             dedicate to learning on my own by creating projects or participating
//             in community events. Whether you want to collaborate on a project
//             with me or just feel like chatting, feel free to contact me!
//           </CardItem>
//         </div>
//       </CardBody>
//     </CardContainer>
//   );
// };

// export default ThreeDCardDemo;
