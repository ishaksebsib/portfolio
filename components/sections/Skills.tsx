"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

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
              duration: 0.4,
            }}
            className={`h-5/6 w-4/5 bg-foreground flex items-center justify-center rounded-xl shadow-slate-100 shadow-sm hover:shadow-slate-200 hover:shadow-xl transition-all duration-300 transform `}
          >
            <h1>Hello world</h1>
          </motion.div>
        </AnimatePresence>
      </section>
    </>
  );
};

export default Skills;
