"use client";
import React from "react";

const GradientText = ({ text }: { text: string }) => {
  return (
    <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center sm:text-5xl md:text-6xl lg:text-7xl font-sans py-2 md:py-10 relative z-20 tracking-tight">
      {text}
    </h1>
  );
};

export default GradientText;
