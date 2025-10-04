import { useRef, useState, useEffect } from "react";
import { FaGithub } from "react-icons/fa";
import { GiStarShuriken } from "react-icons/gi";

export default function App() {
	return (
		<html lang="en" className="scroll-smooth bg-background text-text">
			<body className="min-h-screen flex flex-col font-sans">
				<div className="bg-animation !z-[1000]">
					<div id="stars"></div>
					<div id="stars2"></div>
					<div id="stars3"></div>
					<div id="stars4"></div>
				</div>
				<Page></Page>
			</body>
		</html>
	);
}

function Page() {
	const projects = [
		{
			title: "NextChat",
			desc: "NextChat - A real time chat app with discord like UI and functionalities. ",
			link: "https://next-chat-discord-clone.vercel.app/",
			github: "https://github.com/calvintaw/discord_clone",
		},
		{
			title: "Lenscape",
			desc: "Lenscape – React app for discovering, searching, and previewing photos and videos via the Pexels API. ",
			link: "https://lenscape.vercel.app/",
			github: "https://github.com/calvintaw/Lenscape/",
		},
		{
			title: "Lenscape V2",
			desc: "Modernized version of Lenscape with improved styling (not as feature-complete as V1).",
			link: "https://photo-app-rose.vercel.app/",
			github: "https://github.com/calvintaw/photo_app",
		},
		{
			title: "Portfolio Site",
			desc: "Minimalistic, modern portfolio built with Vite, React & Tailwind CSS",
			link: "#",
			github: "https://github.com/calvintaw/calvintaw/",
		},
	];

	return (
		<main className="min-h-screen bg-gray-950 text-gray-100 flex flex-col items-center justify-center px-6 py-12 font-sans">
			{/* Hero */}
			<a
				href="https://github.com/calvintaw"
				target="_blank"
				rel="noopener noreferrer"
				aria-label="GitHub Profile"
				className="fixed z-10 bottom-8 right-6 group p-3 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 shadow-lg hover:shadow-indigo-500/50 transition-all transform hover:scale-110 flex items-center justify-center"
			>
				<FaGithub className="text-3xl sm:text-4xl text-white group-hover:text-gray-100 transition-colors" />
			</a>
			<section className="text-center space-y-6 max-w-2xl">
				<h1 className="text-5xl md:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-purple-500">
					Calvin Taw
				</h1>
				<p className="text-lg md:text-xl text-gray-400">
					Frontend Developer & Student
					<br></br>
					building modern web apps with React, and Next.js
				</p>
			</section>
			{/* Projects */}
			<section id="projects" className="w-full max-w-6xl mt-20 mb-20">
				<h2 className="text-2xl md:text-4xl font-semibold text-center text-indigo-400 mb-10">🚀 Featured Projects</h2>
				<div className="flex flex-wrap justify-center gap-8">
					{projects.map((proj) => (
						<a
							key={proj.title}
							href={proj.link}
							target={proj.link === "#" ? "_self" : "_blank"}
							className="w-100 p-6 bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20 transition-all no-underline
                group
                min-h-45
              "
						>
							<h3
								className="text-2xl font-semibold mb-4 flex items-center gap-1.5 
							bg-clip-text text-transparent 
bg-linear-to-r from-green-500 via-emerald-500 to-teal-500
							"
							>
								<GiStarShuriken className="text-indigo-400" />
								{proj.title}

								<button
									onClick={(e) => {
										e.preventDefault();
										e.stopPropagation();
										window.open(proj.github, "_blank");
									}}
									className="
                ml-auto p-1 cursor-pointer rounded-full bg-background"
								>
									<FaGithub className="text-white" />
								</button>
							</h3>
							<p className="text-gray-400">{proj.desc}</p>
						</a>
					))}
				</div>
			</section>

			{/* Footer */}
			<footer className="mt-12 text-gray-500 text-sm text-center">
				&copy; {new Date().getFullYear()} Calvin Taw. All rights reserved.
			</footer>
		</main>
	);
}

// // // clock

// // const H = { h: 0, m: 180 },
// // 	V = { h: 270, m: 90 },
// // 	TL = { h: 180, m: 270 },
// // 	TR = { h: 0, m: 270 },
// // 	BL = { h: 180, m: 90 },
// // 	BR = { h: 0, m: 90 },
// // 	E = { h: 135, m: 135 };

// // const digits = [
// // 	[BR, H, H, BL, V, BR, BL, V, V, V, V, V, V, V, V, V, V, TR, TL, V, TR, H, H, TL],
// // 	[BR, H, BL, E, TR, BL, V, E, E, V, V, E, E, V, V, E, BR, TL, TR, BL, TR, H, H, TL],
// // 	[BR, H, H, BL, TR, H, BL, V, BR, H, TL, V, V, BR, H, TL, V, TR, H, BL, TR, H, H, TL],
// // 	[BR, H, H, BL, TR, H, BL, V, E, BR, TL, V, E, TR, BL, V, BR, H, TL, V, TR, H, H, TL],
// // 	[BR, BL, BR, BL, V, V, V, V, V, TR, TL, V, TR, H, BL, V, E, E, V, V, E, E, TR, TL],
// // 	[BR, H, H, BL, V, BR, H, TL, V, TR, H, BL, TR, H, BL, V, BR, H, TL, V, TR, H, H, TL],
// // 	[BR, H, H, BL, V, BR, H, TL, V, TR, H, BL, V, BR, BL, V, V, TR, TL, V, TR, H, H, TL],
// // 	[BR, H, H, BL, TR, H, BL, V, E, E, V, V, E, E, V, V, E, E, V, V, E, E, TR, TL],
// // 	[BR, H, H, BL, V, BR, BL, V, V, TR, TL, V, V, BR, BL, V, V, TR, TL, V, TR, H, H, TL],
// // 	[BR, H, H, BL, V, BR, BL, V, V, TR, TL, V, TR, H, BL, V, BR, H, TL, V, TR, H, H, TL],
// // ];

// // const normalizeAngle = (next, prev) => {
// // 	const delta = (((next - prev) % 360) + 360) % 360;
// // 	return prev + delta;
// // };

// // const birthDate = new Date();

// // const getTimeDigits = () => {
// // 	const now = new Date();
// // 	let diff = now - birthDate;

// // 	const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
// // 	diff -= years * (1000 * 60 * 60 * 24 * 365.25);

// // 	const months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30.44));
// // 	diff -= months * (1000 * 60 * 60 * 24 * 30.44);

// // 	const days = Math.floor(diff / (1000 * 60 * 60 * 24));
// // 	diff -= days * (1000 * 60 * 60 * 24);

// // 	const hours = Math.floor(diff / (1000 * 60 * 60));
// // 	diff -= hours * (1000 * 60 * 60);

// // 	const minutes = Math.floor(diff / (1000 * 60));
// // 	diff -= minutes * (1000 * 60);

// // 	const seconds = Math.floor(diff / 1000);

// // 	return [years, months, days, hours, minutes, seconds].flatMap((val) =>
// // 		String(val).padStart(2, "0").split("").map(Number)
// // 	);
// // };

// // const getAgeDecimal = () => {
// // 	const now = new Date();
// // 	let diff = now - birthDate;

// // 	const years = diff / (1000 * 60 * 60 * 24 * 365.25);
// // 	return years;
// // };

// // const randomAngle = () => Math.floor(Math.random() * 360);

// // const Clock = ({ h, m, initial }) => {
// // 	const prev = useRef({ h: 0, m: 0 });
// // 	const hourAngle = normalizeAngle(h, prev.current.h);
// // 	const minuteAngle = normalizeAngle(m, prev.current.m);
// // 	prev.current = { h: hourAngle, m: minuteAngle };

// // 	return (
// // 		<div
// // 			className="clock"
// // 			style={{
// // 				"--hour-angle": initial ? randomAngle() : hourAngle,
// // 				"--minute-angle": initial ? randomAngle() : minuteAngle,
// // 				"--dur": initial ? 1 : 0.4,
// // 			}}
// // 		/>
// // 	);
// // };

// // const ClockContainer = () => {
// // 	const [time, setTime] = useState(Array(8).fill(0));
// // 	const [initial, setInitial] = useState(true);

// // 	useEffect(() => {
// // 		let updateTimerId;
// // 		const updateTime = () => {
// // 			setTime(getTimeDigits());
// // 			const now = Date.now();
// // 			const delay = 1000 - (now % 1000);
// // 			updateTimerId = setTimeout(updateTime, delay);
// // 		};

// // 		const initialTimerId = setTimeout(() => {
// // 			setInitial(false);
// // 			updateTime();
// // 		}, 600);

// // 		return () => {
// // 			clearTimeout(updateTimerId);
// // 			clearTimeout(initialTimerId);
// // 		};
// // 	}, []);

// // 	return (
// // 		<>
// // 			<TextClock></TextClock>
// // 			<div className="clock-container scale-65 max-sm:!hidden">
// // 				{time.map((t, i) => (
// // 					<div key={i}>
// // 						{digits[t].map(({ h, m }, j) => (
// // 							<Clock key={j} h={h} m={m} initial={initial} />
// // 						))}

// // 						{i % 2 === 0 && (
// // 							<div className="text-xs text-gray-400 mt-1 flex justify-center gap-1">
// // 								{i === 0 && <span>Years</span>}
// // 								{i === 2 && <span>Months</span>}
// // 								{i === 4 && <span>Days</span>}
// // 								{i === 6 && <span>Minutes</span>}
// // 							</div>
// // 						)}
// // 					</div>
// // 				))}
// // 			</div>
// // 		</>
// // 	);
// // };

// // // const TextClock = ({ digits }) => {
// // // 	const [displayDigits, setDisplayDigits] = useState(digits);

// // // 	useEffect(() => {
// // // 		let animationFrame;

// // // 		const animate = () => {
// // // 			// Update display digits to match actual digits
// // // 			setDisplayDigits((prev) =>
// // // 				prev.map((d, i) => {
// // // 					const target = digits[i];
// // // 					if (d === target) return d;
// // // 					return d + (d < target ? 1 : -1); // step towards target
// // // 				})
// // // 			);

// // // 			animationFrame = requestAnimationFrame(animate);
// // // 		};

// // // 		animate();
// // // 		return () => cancelAnimationFrame(animationFrame);
// // // 	}, [digits]);

// // // 	return (
// // // 		<div className="text-3xl font-mono text-gray-200 flex gap-1">
// // // 			{displayDigits.map((d, i) => (
// // // 				<span key={i} className="transition-transform duration-300">
// // // 					{d}
// // // 				</span>
// // // 			))}
// // // 		</div>
// // // 	);
// // // };

// // const TextClock = () => {
// // 	const [time, setTime] = useState("0.000000000");

// // 	const getAgeDecimal = () => {
// // 		const now = new Date();
// // 		const diff = now - birthDate; // milliseconds difference
// // 		const years = diff / (1000 * 60 * 60 * 24 * 365.25); // fractional years
// // 		return years.toFixed(9); // precision
// // 	};

// // 	useEffect(() => {
// // 		let animationFrame;

// // 		const update = () => {
// // 			setTime(getAgeDecimal());
// // 			animationFrame = requestAnimationFrame(update);
// // 		};

// // 		animationFrame = requestAnimationFrame(update);

// // 		return () => cancelAnimationFrame(animationFrame);
// // 	}, []);

// // 	return (
// // 		<div className="flex items-center gap-2 min-sm:hidden p-2 rounded-md bg-surface px-4">
// // 			I am{" "}
// // 			<p className="text-base font-mono text-gray-200 flex gap-0.5 ">
// // 				{time.split("").map((c, i) => (
// // 					<span key={i} className="inline-block transition-transform duration-300">
// // 						{c}
// // 					</span>
// // 				))}{" "}
// // 			</p>
// // 			years old.
// // 		</div>
// // 	);
// // };
