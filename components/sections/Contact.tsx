"use client";
import Link from "next/link";
import React from "react";
import Socails from "../base/Socails";
import toast from "react-hot-toast";

const Contact = () => {
	const oppeningEmail = () => toast.success("Opening Email 😊");
	return (
		<section id={"contact"} className="w-full h-screen bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
			<div
				id="getintouch"
				className="h-screen flex flex-col gap-4 items-center justify-center font-inter "
			>
				<h1 className="text-4xl font-rubik bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent text-center sm:text-5xl md:text-6xl lg:text-7xl relative z-20 tracking-tight">
					Get In Touch
				</h1>
				<p className="font-rob text-lightdarkfont max-w-sm my-2 text-center md:max-w-lg md:text-lg lg:text-xl">
					Although I&apos;m currently looking for new opportunities, my inbox is
					always open. Whether you have a Project or just want to say hi, I&apos;m
					ready get back to you!
				</p>
				<Socails />
				<Link
					href={"mailto:ishaksebsib@gmail.com"}
					onClick={oppeningEmail}
					className="py-3 px-4 sm:py-4 sm:px-6 md:py-3 md:px-7 relative">
					<div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg" />
					<p className="relative font-geist text-white text-xs sm:text-sm md:text-lg">
						Say Hello <span>👋</span> 
					</p>
				</Link>
			</div>
		</section>
	);
};

export default Contact;
