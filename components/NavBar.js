import Image from "next/image";
import { Link } from "react-scroll";
import * as Icon from "react-feather";
import { useState } from "react";

export default function NavBar({}) {
  const [isMenu, setIsMenu] = useState(false);
  const toogleMenu = () => {
    setIsMenu(!isMenu);
  };

  return (
    <div>
      <nav className=" fixed top-0 w-screen h-16 bg-bgcolor flex justify-between items-center px-8 z-10">
        <div>
          <Image src={"./n1.svg"} width={50} height={50} alt="logo" />
        </div>

        {/* SIDE BAR MENU  */}

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
            color={"#f77f05"}
            className="-rotate-90"
            onClick={toogleMenu}
          />
        </button>
      </nav>

      {/* SIDE NAVIGATION MENU  */}

      {isMenu && (
        <div className="fixed flex a~ justify-end top-0 z-20 w-[100%] h-screen">
          <div className="flex flex-col items-center justify-center gap-14 w-[50%] bg-black text-white">
            <button onClick={toogleMenu}>
              <Icon.X size={35} color={"#f77f05"} className="-rotate-90" />
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
