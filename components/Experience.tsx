"use client";
import { Cloud, Float, OrbitControls, Plane } from "@react-three/drei";
import React from "react";
import Background from "./Background";
import AirPlane from "./AirPlane";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <Background />
      <Float floatIntensity={2} speed={2}>
        <AirPlane
					rotation-y={Math.PI / 2}
					scale={[0.1, 0.1, 0.1]}
					position-y={0.1}
				/>
      </Float>
			<Cloud position={[0, 0, 0]} scale={[0.1, 0.1, 0.1]} />
    </>
  );
};

export default Experience;
