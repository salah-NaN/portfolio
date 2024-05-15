import mailIcon from "../assets/mail.svg";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center w-full h-20 mt-20 bg-[#000000] border-t border-[#b4b4b4] text-[#e9e9e9]">
      <a
        href="mailto:salahamar9611@gmail.com"
        className="justify-center items-center gap-1 hidden w-1/3 
        lg:flex"
      >
        <img className="size-7" src={mailIcon}></img>
        <p className="text-[15px]">salahamar9611@gmail.com</p>
      </a>

      <div className="w-1/3 text-center">
        2024 © Designed and developed by Salah Eddin
      </div>
      <nav
        className="hidden w-1/3 
      lg:flex lg:justify-center lg:items-center lg:gap-4"
      >
        <a
          href="#home"
          className="underline underline-offset-2 hover:scale-110 cursor-pointer transition-all duration-300"
        >
          Home
        </a>
        <a
          href="#projects"
          className="underline underline-offset-2 hover:scale-110 cursor-pointer transition-all duration-300"
        >
          Projects
        </a>
        <a
          href="#techStack"
          className="underline underline-offset-2 hover:scale-110 cursor-pointer transition-all duration-300"
        >
          Tech Stack
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
