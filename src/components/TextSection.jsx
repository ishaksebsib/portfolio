import {  Plane, Text } from "@react-three/drei";
//import { fadeOnBeforeCompileFlat } from "../utils/fadeMaterial";
import { useSpring, a } from '@react-spring/three';
import React from "react";

export const TextSection = ({ title, subtitle, ...props }) => {
  const [hovered, setHovered] = React.useState(false);

  const { scale } = useSpring({ scale: hovered ? 1.1 : 1 });

  return (
		
    <a.group
      {...props}
      scale={scale}
      onPointerOver={() => setHovered(true)}
      onPointerOut={() => setHovered(false)}
			onClick={() => window.open("https://ishak.io", "_blank")}
    >
      {/* Project display card */}
      <Plane args={[2, 1]} receiveShadow castShadow>
        <meshStandardMaterial color={hovered ? "lightblue" : "orange"} />
      </Plane>
      <Text
        position={[0, 0.3, 0.1]}
        fontSize={0.2}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
				suuuii
      </Text>
      <Text
        position={[0, -0.2, 0.1]}
        fontSize={0.1}
        color="black"
        anchorX="center"
        anchorY="middle"
      >
				hell
      </Text>
    </a.group>
  );
};

//<group {...props}>
//{!!title && (
//<Text
//color="white"
//anchorX={"left"}
//anchorY="bottom"
//fontSize={0.52}
//maxWidth={2.5}
//lineHeight={1}
//font={"./fonts/DMSerifDisplay-Regular.ttf"}
//>
//{title}
//<meshStandardMaterial
//color={"white"}
//onBeforeCompile={fadeOnBeforeCompileFlat}
///>
//</Text>
//)}

//<Text
//color="white"
//anchorX={"left"}
//anchorY="top"
//fontSize={0.2}
//maxWidth={2.5}
//font={"./fonts/Inter-Regular.ttf"}
//>
//{subtitle}
//<meshStandardMaterial
//color={"white"}
//onBeforeCompile={fadeOnBeforeCompileFlat}
///>
//</Text>
//</group>
