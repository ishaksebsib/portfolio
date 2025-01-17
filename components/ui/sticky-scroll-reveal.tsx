"use client";
import React, { useEffect, useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { motion } from "framer-motion";
import PythonSvg from "../utils/svg/PythonSvg";
import RustSvg from "../utils/svg/RustSvg";
import ReactSvg from "../utils/svg/ReactSvg";
import GitButton from "./GitButton";

export const StickyScroll = ({
	content,
}: {
	content: {
		title: string;
	}[];
	contentClassName?: string;
}) => {
	const [activeCard, setActiveCard] = React.useState(0);
	const { scrollYProgress } = useScroll({});
	const cardLength = content.length;
	const viewportHeight = window.innerHeight; // Dynamically fetches the current viewport height
	const totalHeight = viewportHeight * cardLength; // Calculates the total height of the container

	// bg colors
	const linearGradients = [
		"linear-gradient(to bottom right, var(--cyan-500), var(--emerald-500))",
		"linear-gradient(to bottom right, var(--pink-500), var(--indigo-500))",
		"linear-gradient(to bottom right, var(--orange-500), var(--yellow-500))",
	];

	const [backgroundGradient, setBackgroundGradient] = useState(
		linearGradients[0],
	);

	useEffect(() => {
		setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
	}, [activeCard]);

	useMotionValueEvent(scrollYProgress, "change", (current) => {
		// Check if current is not undefined and is a number
		const index = Math.floor(
			(current * totalHeight) / (totalHeight / cardLength),
		);
		if (index <= cardLength - 1 && index >= 0) {
			setActiveCard(index);
		}
	});

	return (
		<div
			className={`h-[300vh] w-full flex justify-center items-start bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] `}
		>
			<motion.div
				initial={{
					position: "sticky",
					top: 90,
				}}
				style={{ background: backgroundGradient }}
				className="h-[40rem] w-5/6 flex flex-col justify-around items-center rounded-md md:w-3/4 lg:w-3/4 lg:flex-row"
			>
				{/* Photo on md screen */}
				<div className="lg:hidden h-3/4 w-full rounded-md bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
					hello {content[activeCard].title}
				</div>

				{/* title and description */}
				<div className="flex items-start ml-4 px-4 blg-red-300">
					<div className="max-w-2xl flex">
						<div className="my-10 lg:my-20">
							<motion.h2 className="text-2xl font-geist font-bold text-white md:text-3xl">
								{content[activeCard].title}
							</motion.h2>
							<motion.p className="text-[1rem] font-normal text-slate-200 max-w-sm mt-5">
								See changes as they happen. With our platform, you can track
								every modification in real time. No more confusion about the
								latest version of your project. Say goodbye to the chaos of
								version control and embrace the simplicity of real-time updates.
							</motion.p>
							<motion.div className="w-full h-10 max-w-[8rem] flex justify-start gap-2  mt-3">
								<PythonSvg />
								<RustSvg />
								<PythonSvg />
								<ReactSvg />
							</motion.div>

							<motion.div className="flex gap-2 mt-4">
								<GitButton title="Live" link="jfkd" />
								<GitButton title="GitHub" link="jfkd" />
							</motion.div>
						</div>
					</div>
				</div>

				{/* Photo on lg screen */}
				<div className={"h-3/5 w-2/4 px-4 hidden lg:block "}>
					<div className="h-full w-full rounded-md bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
						{content[activeCard].title}
					</div>
				</div>
			</motion.div>
		</div>
	);
};
