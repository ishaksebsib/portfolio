"use client";
import React from "react";
import { StickyScroll } from "../ui/sticky-scroll-reveal";
import {
  IconBrandAws,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandReact,
  IconBrandRedux,
  IconBrandRust,
  IconBrandTailwind,
	IconNetwork,
	IconServer,
} from "@tabler/icons-react";

const personalProjects = [
  {
    title: "Ai Resume Assistant",
    description:
      "An intelligent web app that reviews resumes, provides detailed feedback, and assigns scores to help users improve their profiles and job prospects.",
    imageUrl: "/assets/img/projects/1.png",
    gitLink: "https://github.com/ishaksebsib/ai-rate-my-resume",
    liveLink: "https://ai-rate-my-resume.vercel.app/",
    languageIcons: [
      <IconBrandReact key={0} />,
      <IconBrandNextjs key={1} />,
      <IconBrandPython key={2} />,
      <IconBrandAws key={3} />,
    ],
  },
  {
    title: "Multi-Thredeed Web Server",
    description:
      "A high-performance web server built from scratch in Rust to efficiently handle concurrent requests using custom threading mechanisms and advanced optimization.",
    imageUrl: "/assets/img/projects/2.webp",
    gitLink: "https://github.com/ishaksebsib/multi-threaded-web-server",
    languageIcons: [
			<IconBrandRust key={0} />,
			<IconServer key={1} />,
			<IconNetwork key={2} />,
		],
  },
  {
    title: "Ecomece Web App",
    description:
      "A feature-rich ecommerce platform offering seamless browsing, cart management, and secure payments, designed with scalability and user experience in mind.",
    imageUrl: "/assets/img/projects/3.png",
    gitLink: "https://github.com/ishaksebsib/clothes-shopping-app",
    liveLink: "https://shop-isotop.vercel.app/",
    languageIcons: [
      <IconBrandReact key={0} />,
      <IconBrandRedux key={1} />,
      <IconBrandNodejs key={2} />,
      <IconBrandMongodb key={4} />,
      <IconBrandTailwind key={5} />,
    ],
  },
];

const Projects = () => {
  return (
    <section className="w-full h-auto bg-white">
      <StickyScroll content={personalProjects} />;
    </section>
  );
};

export default Projects;
