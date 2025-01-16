"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import Svg from "../utils/Svg";
import GoSvg from "../utils/svg/GoSvg";
import RustSvg from "../utils/svg/RustSvg";
import TsSvg from "../utils/svg/TsSvg";
import PythonSvg from "../utils/svg/PythonSvg";
import ReactSvg from "../utils/svg/ReactSvg";

const Skills = () => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current! - scrollYProgress.getPrevious()!;

      if (direction < 0) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    }
  });

  return (
    <>
      <section className="h-screen w-full bg-white flex justify-center items-center">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.5,
            }}
            animate={{
              scale: visible ? 1 : 0.8,
              opacity: 1,
            }}
            transition={{
              duration: 0.3,
            }}
            className={`h-5/6 w-4/5 bg-white flex items-center justify-center rounded-xl shadow-slate-400 shadow-sm hover:shadow-slate-200 hover:shadow-xl transition-all duration-300 transform `}
          >
            <div className="w-full h-auto full flex flex-col justify-start items-start p-6 gap-8 md:p-8 lg:p-12">
              {/* Heading Section */}
              <div className="flex flex-col items-center justify-center text-center">
                <h1 className="font-geist text-xl text-darkfont font-extrabold sm:text-2xl md:text-3xl lg:text-4xl">
                  Langs I work with
                </h1>
                <p className="text-lightdarkfont font-rob font-thin mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-full md:max-w-[60%]">
                  Love to learn new things and master what I know. Currently
                  working on a prototyping studio making apps and websites that
                  are fun to play with.
                </p>
              </div>

              {/* Skills Section */}
              <div className="w-full h-80 sm:h-72 md:h-80 lg:h-96 rounded-xl flex flex-col items-center justify-center gap-10">
                {/*
                 *bottom small icons
                 */}
                <div className="w-full flex justify-center items-center gap-8 ">
                  <div className="w-full max-w-20">
                    <GoSvg />
                  </div>
                  <div className="w-full max-w-20">
                    <TsSvg />
                  </div>
                  <div className="w-full max-w-20">
                    <RustSvg />
                  </div>
                  <div className="w-full max-w-20">
                    <PythonSvg />
                  </div>
                  <div className="w-full max-w-20">
                    <ReactSvg />
                  </div>
                </div>

                <div className="w-full flex justify-center gap-10">
                  <div className="w-full max-w-32">
                    <GoSvg />
                  </div>
                  <div className="w-full max-w-32">
                    <TsSvg />
                  </div>
                  <div className="w-full max-w-32">
                    <RustSvg />
                  </div>
                  <div className="w-full max-w-32">
                    <PythonSvg />
                  </div>
                  <div className="w-full max-w-32">
                    <ReactSvg />
                  </div>
                </div>

                {/*
                 *bottom small icons
                 */}
                <div className="w-full flex justify-center items-center gap-8 ">
                  <div className="w-full max-w-20">
                    <GoSvg />
                  </div>
                  <div className="w-full max-w-20">
                    <TsSvg />
                  </div>
                  <div className="w-full max-w-20">
                    <RustSvg />
                  </div>
                  <div className="w-full max-w-20">
                    <PythonSvg />
                  </div>
                  <div className="w-full max-w-20">
                    <ReactSvg />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
};

export default Skills;
