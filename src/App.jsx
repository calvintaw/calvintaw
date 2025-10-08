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
			desc: "A real time chat app with discord like UI and functionalities. (Basically discord clone with less features)",
			link: "https://next-chat-discord-clone.vercel.app/",
			github: "https://github.com/calvintaw/discord_clone",
		},
		{
			title: "Lenscape",
			desc: "React app for discovering, searching, and previewing photos and videos via the Pexels API. ",
			link: "https://lenscape.vercel.app/",
			github: "https://github.com/calvintaw/Lenscape/",
		},
		{
			title: "Lenscape V2",
			desc: "Modernized version of Lenscape with improved styling (not as feature-complete as V1).",
			link: "https://photo-app-rose.vercel.app/",
			github: "https://github.com/calvintaw/photo_app",
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
				className="fixed z-10 bottom-4 right-4 group p-1 rounded-full bg-white hover:scale-110 flex items-center justify-center"
			>
				<FaGithub className="text-3xl sm:text-4xl text-black transition-colors" />
			</a>

			<section className="text-center space-y-6 max-w-2xl">
				<h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">Calvin Taw</h1>
				<p className="text-lg md:text-xl text-gray-400">Student & Web Dev</p>
			</section>
			{/* Projects */}
			<section id="projects" className="w-full max-w-6xl mt-20 mb-20">
				<h2 className="text-2xl md:text-4xl font-semibold text-center text-white mb-10">My Projects</h2>
				<div className="flex flex-wrap justify-center gap-8">
					{projects.map((proj) => (
						<a
							key={proj.title}
							href={proj.link}
							target={proj.link === "#" ? "_self" : "_blank"}
							className="w-100 p-6 pt-5 bg-gray-900/80 backdrop-blur-md rounded-2xl border border-gray-800 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/20 transition-all no-underline
                group
                min-h-45
              "
						>
							<h3
								className="text-2xl font-semibold mb-4 flex items-center gap-1.5 
							text-emerald-500
							"
							>
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
			<footer className="mt-12 text-gray-500 text-base text-center">
				Credits to -{" "}
				<a className="underline text-emerald-500" href="https://codepen.io/riley-pearce/pen/OJWPjZM">
					Riley Pearce
				</a>{" "}
				{"  "}
				for the stars background
			</footer>
		</main>
	);
}
