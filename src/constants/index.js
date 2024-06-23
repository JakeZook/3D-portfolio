import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	Escapeworks,
	DU,
	ewd,
	ShrednKens,
	WordyWhirl,
	threejs,
	bootstrap,
	sql,
	firebase,
	arduino,
	raspberry,
	c,
	csharp,
	python,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

const services = [
	{
		title: "Web Developer",
		icon: web,
	},
	{
		title: "React Native Developer",
		icon: mobile,
	},
	{
		title: "Unity Developer",
		icon: backend,
	},
];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "Python",
		icon: python,
	},
	{
		name: "C++",
		icon: c,
	},
	{
		name: "Csharp",
		icon: csharp,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "bootstrap",
		icon: bootstrap,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
];

const experiences = [
	{
		title: "Full Stack Web Development Certification",
		company_name: "University of Denver",
		icon: DU,
		iconBg: "white",
		date: "August 2023 - November 2023",
		points: [
			`A 12-week, fully remote, and highly intensive program that provided
				technical programming skills for Full Stack Web Development.`,
			`Focused on multiple languages, frameworks, and libraries currently used in the industry.`,
			`Developed multiple relevant projects solo and with teams of 4.
				Gained experience collaborating with other programmers and working
				with Git efficiently and spent approximately 50 hours/week on the
				program.`,
		],
	},
	{
		title: "General Manager / Software Manager",
		company_name: "EscapeWorks Denver",
		icon: Escapeworks,
		iconBg: "black",
		date: "June 2021 - June 2024",
		points: [
			`EscapeWorks Denver Denver, CO Managed a staff of up to 15 employees.
				Handled recruitment, development, inventory, expense reporting,
				marketing, SEO optimization, and day-to-day operations.`,
			`Responsible for managing large projects such as upgrading or building new customer experiences`,
			`Maintained a custom, open source, server-side application to operate the customer experience,
				utilizing Arduino and Raspberry Pi hardware and software to create
				interactive puzzles, and wiring numerous props to MQTT relay devices to
				interact with our custom server.`,
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Jake possesses an innate curiosity for technology and actively seeks solutions to the challenges he encounters. These qualities, such as passion, curiosity, and motivation, are crucial for any developer, and Jake embodies them all.",
		name: "Tony Fryer",
		designation: "Mentor",
		image:
			"https://media.licdn.com/dms/image/D4D03AQEdGU6_kbDaxQ/profile-displayphoto-shrink_400_400/0/1697126941922?e=2147483647&v=beta&t=QT1D4T27pol6ASRbD18QkN2kliPCeCeTmRw57xj86tw",
	},
	{
		testimonial:
			"Beyond the keyboards and screens, Jake is an awesome friend and the kind of teammate everyone needs. Any company would strike gold by bringing him on board. He’s a standout developer and an even better team player. ",
		name: "Pete Richards",
		designation: "Colleague",
		image: "https://avatars.githubusercontent.com/u/132288738?v=4",
	},
	{
		testimonial:
			"What sets Jake apart is not just his ability to tackle complex tasks but also his unwavering dependability and diligence. He has an exceptional work ethic, consistently going the extra mile to ensure that the project's goals are met.",
		name: "Jordan Adams",
		designation: "Colleague",
		image: "https://avatars.githubusercontent.com/u/139721955?v=4",
	},
];

const projects = [
	{
		name: "Wordy Whirl",
		description:
			"A Wordle style word game where players try to guess a new 5 letter word each day. Deployed on the App Store and Google Play Store for free.",
		tags: [
			{
				name: "react-native",
				color: "blue-text-gradient",
			},
			{
				name: "Expo",
				color: "green-text-gradient",
			},
			{
				name: "tailwind",
				color: "pink-text-gradient",
			},
		],
		image: WordyWhirl,
		source_code_link: "https://github.com/JakeZook/WordWhirl",
	},
	{
		name: "EscapeWorks Website",
		description:
			"An escape room booking website that allows customers to book rooms, view availability, and learn about the company. Optimized for great SEO and setup with Google Analytics.",
		tags: [
			{
				name: "react",
				color: "blue-text-gradient",
			},
			{
				name: "Framer Motion",
				color: "green-text-gradient",
			},
			{
				name: "Tailwind",
				color: "pink-text-gradient",
			},
		],
		image: ewd,
		source_code_link: "https://github.com/JakeZook/EWD-New-Website",
	},
	{
		name: "ShredNStyle",
		description:
			"My first project with a large group during my time in boot camp. A full stack winter sports E-Commerce site. Provides apparel, gear, lift passes, resort and weather information.",
		tags: [
			{
				name: "Handlebars",
				color: "blue-text-gradient",
			},
			{
				name: "MongoDB",
				color: "green-text-gradient",
			},
			{
				name: "Bootstrap",
				color: "pink-text-gradient",
			},
		],
		image: ShrednKens,
		source_code_link: "https://github.com/nlad218/ShredNStyle",
	},
];

export { services, technologies, experiences, testimonials, projects };
