import mailIcon from "../assets/mail.svg";

const Footer = () => {
  return (
    <footer
      className="flex justify-between items-center w-full h-20 mt-28 bg-[#000000] border-t border-[#b4b4b4] text-[#e9e9e9]
    lg:mt-[103px]"
    >
      <a
        href="mailto:salah@gmail.com"
        className="justify-center items-center gap-1 hidden lg:w-1/3 
        lg:flex"
      >
        <img className="size-7" src={mailIcon}></img>
        <p className="text-[15px]">salah@gmail.com</p>
      </a>

      <div className="w-full lg:w-1/3 text-center">
        2025 © Designed and developed by Salah
      </div>
      <nav
        className="hidden lg:w-1/3 
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
