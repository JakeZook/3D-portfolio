import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import { styles } from "../style";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
	return (
		<section className="relative w-full h-screen mx-auto">
			<div
				className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
			>
				<div className="flex flex-col justify-center items-center mt-5">
					<div className="w-5 h-5 rounded-full bg-[#3671ba]" />
					<div className="w-1 sm:h-80 h-40 violet-gradient" />
				</div>
				<div>
					<h1 className={`${styles.heroHeadText} text-white`}>
						Hello, I'm <span className="text-[#3671ba]">Jake</span>
					</h1>
					<p className={`${styles.heroSubText} mt-2 text-white-100 text-xl`}>
						I am a:
						<br />
						<span className="text-[#3671ba]">
							<TypeAnimation
								sequence={[
									"Full Stack Web Developer.",
									2000,
									"Video Game Creator.",
									2000,
									"Arduino and Raspberry Pi Expert.",
									2000,
								]}
								wrapper="span"
								speed={60}
								repeat={Infinity}
								deletionSpeed={75}
							></TypeAnimation>
						</span>
					</p>
				</div>
			</div>

			<ComputersCanvas />
		</section>
	);
};

export default Hero;
