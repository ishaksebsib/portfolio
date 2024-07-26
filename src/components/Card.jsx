import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Plane, Html } from '@react-three/drei';

// Sample data for projects
const projects = [
  { id: 1, title: 'Project One', description: 'Description for project one' },
  { id: 2, title: 'Project Two', description: 'Description for project two' },
  // Add more projects here
];

const ProjectCard = ({ title, description, position }) => (
  <group position={position}>
    <Plane args={[2, 1]}>
      <meshStandardMaterial color="orange" />
      <Html position={[0, 0, 0.1]} center>
        <div style={{ padding: '10px', background: 'white', borderRadius: '8px' }}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </Html>
    </Plane>
  </group>
);

const Rectangle = () => {
  return (
    <Canvas>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      {projects.map((project, index) => (
        <ProjectCard
          key={project.id}
          title={project.title}
          description={project.description}
          position={[0, index * -1.5, 0]} // Adjust position for each card
        />
      ))}
    </Canvas>
  );
};

export default Rectangle;
