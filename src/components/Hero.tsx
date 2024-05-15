import { MaskContainer } from "./ui/svg-mask-effect";
import { Link } from "@nextui-org/react";

interface HeroProps {
  scrollDown: () => void;
}

const Hero: React.FC<HeroProps> = ({ scrollDown }) => {
  return (
    <div id="home" className="h-dvh">
      <MaskContainer
        revealText={
          <p
            className="max-w-4xl mx-auto text-[#131313] text-center text-5xl font-bold
          lg:text-6xl"
          >
            Salah Eddin Amar Nouhi
          </p>
        }
        className="text-2xl"
      >
        <span className="text-red-500">Junior FullStack Developer</span> and
        <span className="text-red-500"> Computer Engineering</span> student.
      </MaskContainer>

      <div
        className="relative  bottom-1/2 translate-y-[170%] z-0 flex justify-between  w-[225px] mx-auto
        lg:w-[260px]"
      >
        {/* projects button */}
        <button
          className=" jello-diagonal
      relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none "
        >
          <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#DEDEDE_0%,#131313_50%,#DEDEDE_100%)]" />
          <span
            onClick={scrollDown}
            className="
        inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#fafafa] px-3 py-1 text-sm font-medium text-[#131313] backdrop-blur-3xl"
          >
            Proyects
          </span>
        </button>

        {/* contact link/button */}
        <Link
          className="text-black flex justify-center items-center vibrate"
          isBlock
          showAnchorIcon
          href="https://www.linkedin.com/in/salah-amar/"
          target="_blank"
          color="undefined"
        >
          <i className="devicon-linkedin-plain text-[1rem] mr-[6px] text-[#000000]"></i>
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Hero;
