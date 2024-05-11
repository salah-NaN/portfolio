import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
} from "@nextui-org/react";
import logo from "../../src/assets/logo.png";

const links = ["Home", "Projects", "Contact"];

const NavbarC = () => {
  return (
    <div className="pt-10">
      <Navbar
        shouldHideOnScroll
        className=" w-[29%] mx-auto rounded-full h-12 bg-[#131313] border border-gray-600 backdrop-filter backdrop-blur-lg bg-opacity-70"
      >
        <NavbarBrand>
          <img className="size-8" src={logo}></img>
        </NavbarBrand>
        <NavbarContent className="hidden sm:flex gap-6" justify="center">
          {links.map((l, index) => {
            return (
              <NavbarItem isActive key={index}>
                <Link className="text-[#fafafa]" href="#home">
                  {l}
                </Link>
              </NavbarItem>
            );
          })}
        </NavbarContent>
      </Navbar>
    </div>
  );
};

export default NavbarC;
