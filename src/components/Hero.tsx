import { MaskContainer } from "./ui/svg-mask-effect";

interface HeroProps {
  scrollDown: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollDown }) => {
  return (
    <div id="home" className="h-dvh">
      <MaskContainer
        revealText={
          <p
            className="max-w-4xl cursor-default mx-auto text-[#131313] text-center text-5xl font-bold -translate-y-1/2
          lg:text-6xl lg:-translate-y-0"
          >
            It's me, Salah.
          </p>
          // other alternative: adding a subtitle
          //   <div
          //   className="max-w-4xl mx-auto
          // text-center"
          // >
          //   <h1
          //     className=" text-[#131313]  text-5xl font-bold
          // lg:text-6xl cursor-move"
          //   >
          //     nombre completo
          //   </h1>
          //   <h2 className="text-[#373737] mt-6 mb-5 ">
          //     Full Stack developer & Software Engineering student
          //   </h2>
          // </div>
        }
        className="text-2xl"
      >
        {/* <span className="text-red-500">Junior FullStack Developer</span> and
        <span className="text-red-500"> Computer Engineering</span> student. */}
      </MaskContainer>

      <div
        className="relative bottom-1/2 translate-y-1/2 z-0 flex justify-between  w-[305px] mx-auto
        lg:w-[350px] lg:translate-y-[170%]"
      >
        <button
          onClick={scrollDown}
          className="bg-[#131313] px-5 py-1.5 border-2 border-[#131313] rounded-full flex justify-center items-center hover:bg-[#3e3e3e] transition-all duration-400
          lg:px-8"
        >
          <p className="text-[#fbfbfb] text-[18px] ">Projects</p>
          <img
            className="text-[#fbfbfb] size-6 ml-[6px]"
            src="/rocket.svg"
          ></img>
        </button>

        {/* contact link/button */}
        <a
          className="text-[#131313] flex justify-center items-center rounded-full border-2 border-[#131313] px-5 py-1.5 hover:bg-[#d8d8d8] transition-all duration-400
          lg:px-8"
        >
          <i className="devicon-linkedin-plain text-[1.3rem] mr-[6px] text-[#131313] "></i>
          <p className="text-[#131313] text-[18px] cursor-pointer">LinkedIn</p>
        </a>
      </div>
    </div>
  );
};

export default Hero;
