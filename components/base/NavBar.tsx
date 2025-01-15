"use client";
import React from "react";
import { FloatingNav } from "../ui/floating-navbar";

const NavBar = () => {
  const navItems = [
    {
      name: "Home",
      link: "/#",
    },
    {
      name: "Work",
      link: "/#",
    },
    {
      name: "Skills",
      link: "/#",
    },
    {
      name: "Contact",
      link: "/#",
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
