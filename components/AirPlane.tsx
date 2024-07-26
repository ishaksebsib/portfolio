"use client";
import { useGLTF } from "@react-three/drei";
import React, { FC } from "react";

const AirPlane = (props) => {
  const { nodes, materials } = useGLTF("/models/airplane/model.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        geometry={nodes.PUSHILIN_Plane_Circle000.geometry}
        material={materials.plane}
      />
      <mesh
        geometry={nodes.PUSHILIN_Plane_Helix.geometry}
        material={materials.plane}
        position={[1.09, 0.23, 0]}
      >
        <meshStandardMaterial color="white" />
      </mesh>
    </group>
  );
};

useGLTF.preload("/models/airplane/model.glb");

export default AirPlane;
