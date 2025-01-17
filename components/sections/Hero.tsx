"use client";
import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import GradientText from "@/components/ui/GradientText";

const Hero = () => {
	return (
		<section className="w-full h-screen">
			{/*Main Gradient Background */}
			<section className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
				{/*Background pink gradient circle*/}
				<div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
			</section>
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
		</section>
	);
};

export default Hero;
