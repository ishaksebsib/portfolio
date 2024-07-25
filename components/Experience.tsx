"use client";
import { OrbitControls } from "@react-three/drei";
import React from "react";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <mesh>
        <boxGeometry />
        <meshBasicMaterial />
      </mesh>
    </>
  );
};

export default Experience;
