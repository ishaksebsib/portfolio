"use client";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import GradientText from "@/components/ui/GradientText";

const Hero = () => {
  return (
    <>
      {/*Line animation*/}
      <BackgroundLines className="flex items-center justify-center w-full  flex-col px-4 h-[100vh]">
        <div className="w-full h-full flex flex-col justify-center items-center gap-6 px-8 sm:px-0 md:gap-8">
          {/*Hero text*/}
          <GradientText text="Hello I'm Ishak" />

          {/*Subtext*/}
          <p className="max-w-xl text-sm mt-[-1rem] md:mt-[-3rem] md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
            i’m always curious about new technologies and have been spending
            time lately prototyping functional apps using swiftUI. learn more
            about me.
          </p>

          {/*Button */}
          <button className="py-3 px-4 sm:py-4 sm:px-6 md:py-3 md:px-7 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg" />
            <p className="relative text-white text-xs sm:text-sm md:text-lg">
              Explore My Work
            </p>
          </button>
        </div>
      </BackgroundLines>
    </>
  );
};

export default Hero;
