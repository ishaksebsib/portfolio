"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

const NavBar = () => {
  const navItems = [
    {
      name: "Home",
      link: "home",
    },
    {
      name: "Work",
      link: "work",
    },
    //{
      //name: "Blog",
      //link: "/#",
			//isSection: false,
    //},
    {
      name: "Contact",
      link: "contact",
    },
  ];
  return (
    <nav>
      <div className="relative h-full w-full">
        <FloatingNav navItems={navItems} />
      </div>
    </nav>
  );
};

export default NavBar;
