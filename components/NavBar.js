import Image from "next/image";
import { Link } from "react-scroll";
import * as Icon from "react-feather";
import { useState } from "react";
import { useTheme } from "next-themes";

export default function NavBar({}) {
  const [isMenu, setIsMenu] = useState(false);
  const { systemTheme, theme, setTheme } = useTheme();
  const toogleMenu = () => {
    setIsMenu(!isMenu);
  };
  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <Icon.Sun
          size={25}
          className="stroke-warmer hover:stroke-mediumer"
          onClick={() => setTheme("light")}
        />
      );
    } else {
      return (
        <Icon.Moon
          size={25}
          color={"#f77f05"}
          className="hover:stroke-warmer"
          onClick={() => setTheme("dark")}
        />
      );
    }
  };

  return (
    <div>
      <nav className=" fixed top-0 w-screen h-16 bg-bgcolor  dark:bg-black flex justify-between items-center px-8 z-10">
        {/* SIDE BAR MENU  */}
        {renderThemeChanger()}
        <div className=" text-warmer items-center hidden md:flex md:gap-10 font-roboto text-base ">
          <Link
            activeClass="active"
            to="work"
            spy={true}
            smooth={true}
            className=" hover:border-b-2 border-warmer hover:text-lighter hover:cursor-pointer"
          >
            Work
          </Link>
          <Link
            to="experience"
            spy={true}
            smooth={true}
            className="hover:border-b-2 border-warmer hover:text-lighter hover:cursor-pointer"
          >
            Experience
          </Link>
          <Link
            to="aboutme"
            spy={true}
            smooth={true}
            className="hover:border-b-2 border-warmer hover:text-lighter hover:cursor-pointer"
          >
            About
          </Link>
          <Link
            to="getintouch"
            spy={true}
            smooth={true}
            className="hover:border-b-2 border-warmer hover:text-lighter hover:cursor-pointer"
          >
            Contact
          </Link>
        </div>
        <button className="md:hidden">
          <Icon.BarChart
            size={35}
            className="-rotate-90 stroke-mediumer hover:stroke-warmer dark:stroke-warmer"
            onClick={toogleMenu}
          />
        </button>
      </nav>

      {/* SIDE NAVIGATION MENU  */}

      {isMenu && (
        <div className="fixed flex a~ justify-end top-0 z-20 w-[100%] h-screen">
          <div className="flex flex-col items-center justify-center gap-14 w-[50%] bg-black text-white">
            <button onClick={toogleMenu}>
              <Icon.X
                size={35}
                color={"#f77f05"}
                className="-rotate-90 hover:stroke-warmer"
              />
            </button>
            <Link
              activeClass="active"
              to="work"
              spy={true}
              onClick={toogleMenu}
              smooth={true}
              className=" hover:border-b-2 border-warmer hover:text-lighter hover:cursor-pointer"
            >
              Work
            </Link>
            <Link
              to="experience"
              spy={true}
              onClick={toogleMenu}
              smooth={true}
              className="hover:border-b-2 border-warmer hover:text-lighter hover:cursor-pointer"
            >
              Experience
            </Link>
            <Link
              to="aboutme"
              spy={true}
              onClick={toogleMenu}
              smooth={true}
              className="hover:border-b-2 border-warmer hover:text-lighter hover:cursor-pointer"
            >
              About
            </Link>
            <Link
              to="getintouch"
              spy={true}
              onClick={toogleMenu}
              smooth={true}
              className="hover:border-b-2 border-warmer hover:text-lighter hover:cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      )}
      {/* END OF SIDE MENU  */}
    </div>
  );
}
