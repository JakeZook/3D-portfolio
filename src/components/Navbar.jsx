import React, { useState } from "react";
import { Link } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

import { styles } from "../style";
import { navLinks } from "../constants";
import { menu, resume } from "../assets";
import favicon from "../assets/favicon/favicon.ico";

const Navbar = () => {
	const [toggle, setToggle] = useState(false);

	const handleLinkClick = (title) => {
		setToggle(false);
		const element = document.getElementById(
			title.replace(/\s+/g, "-").toLowerCase()
		);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav
			className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
		>
			<div className="w-full flex justify-between items-center max-w-7xl mx-auto">
				<Link
					to="/"
					className="flex items-center gap-2"
					onClick={() => {
						setActive("");
						window.scrollTo(0, 0);
					}}
				>
					<img
						src={favicon}
						alt="logo"
						className="w-16 h-16 object-contain mr-3"
					/>
					<div className="flex flex-col">
						<p className="text-white text-[18px] font-bold cursor-pointer flex">
							Jake Zook &nbsp;{" "}
							<span className="sm:block hidden">
								| Full Stack Web Developer
							</span>
						</p>
						<ul className="max-sm:hidden flex justify-start gap-5">
							<li className="mt-2" onClick={() => setToggle(false)}>
								<SocialIcon
									target="_blank"
									url="https://www.linkedin.com/in/jake-zook-b27992222/"
									style={{ height: 35, width: 35 }}
								/>
							</li>
							<li className="mt-2" onClick={() => setToggle(false)}>
								<SocialIcon
									target="_blank"
									url="https://github.com/JakeZook"
									style={{ height: 35, width: 35 }}
								/>
							</li>
							<li className="mt-2" onClick={() => setToggle(false)}>
								<SocialIcon
									target="_blank"
									url="https://www.discord.com/users/673296567452827675"
									style={{ height: 35, width: 35 }}
								/>
							</li>
						</ul>
					</div>
				</Link>
				<ul className="list-none hidden sm:flex flex-row gap-10">
					{navLinks.map((link, index) => (
						<li
							key={index}
							className={`text-[#3671ba] hover:text-[#915eff] text-[18px] font-medium cursor-pointer`}
							onClick={() => handleLinkClick(link.title)}
						>
							<a
								href={`#${link.id}`}
								onClick={() => handleLinkClick(link.title)}
							>
								{link.title}
							</a>
						</li>
					))}
					<li className="text-[#3671ba] hover:text-[#915eff] text-[18px] font-medium cursor-pointer">
						<a href={resume} download>
							Resume
						</a>
					</li>
				</ul>

				<div className="sm:hidden drawer drawer-end w-10">
					<input
						id="my-drawer"
						type="checkbox"
						className="drawer-toggle"
						checked={toggle}
						onChange={() => setToggle(!toggle)}
					/>
					<div className="drawer-content">
						<label htmlFor="my-drawer">
							<img src={menu} alt="menu" />
						</label>
					</div>
					<div className={`drawer-side ${toggle ? "open" : ""}`}>
						<label
							htmlFor="my-drawer"
							aria-label="close sidebar"
							className="drawer-overlay"
							onClick={() => setToggle(false)}
						></label>
						<ul className="menu black-gradient text-base-content min-h-full w-50 p-4">
							{navLinks.map((link, index) => (
								<li
									key={index}
									className={`text-white hover:text-[#915eff] text-[26px] font-medium cursor-pointer py-2`}
									onClick={() => handleLinkClick(link.title)}
								>
									<a href={`#${link.id}`}>{link.title}</a>
								</li>
							))}
							<li className="text-white hover:text-[#915eff] text-[26px] py-2 font-medium cursor-pointer">
								<a href={resume} download onClick={() => setToggle(false)}>
									Resume
								</a>
							</li>
							<ul className="flex justify-center gap-5">
								<li className="mt-5" onClick={() => setToggle(false)}>
									<SocialIcon
										target="_blank"
										url="https://www.linkedin.com/in/jake-zook-b27992222/"
										style={{ height: 35, width: 35 }}
									/>
								</li>
								<li className="mt-5" onClick={() => setToggle(false)}>
									<SocialIcon
										target="_blank"
										url="https://github.com/JakeZook"
										style={{ height: 35, width: 35 }}
									/>
								</li>
								<li className="mt-5" onClick={() => setToggle(false)}>
									<SocialIcon
										target="_blank"
										url="https://www.discord.com/users/673296567452827675"
										style={{ height: 35, width: 35 }}
									/>
								</li>
							</ul>
						</ul>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
