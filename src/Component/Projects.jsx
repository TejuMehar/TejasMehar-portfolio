import React, { useEffect, useState } from "react";
import Weather from "../assets/websiteThumbnail/Weather.png";
import  LodgifyMe from "../assets/websiteThumbnail/LodgifyMe.png";

import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

// AOS for animation
import AOS from "aos";
import "aos/dist/aos.css";

import { Link } from "react-router-dom";

const Projects = () => {
	const [activeButton, setActiveButton] = useState("All Projects");

	useEffect(() => {
		AOS.init();
	}, []);

	const Data = [
		{
			title: "Weather Widget",
			description:
				"A responsive weather widget application that fetches real-time weather data using an open weather API. It displays temperature, weather conditions, and location-based forecasts with a clean and minimal UI built using React.",
			thumbnailImage: Weather,
			category: "FrontEnd",
			clintLink: "https://github.com/TejuMehar/weather-widget",
			serverLink: "",
			LiveLInk: "https://weather-widget-tejas.netlify.app/",
		},
		{
	title: "LodgifyMe",
	description:
		"A full-stack hotel booking platform where users can list, search, and book accommodations. It includes features like user authentication, property management, booking history, and a responsive UI. Built using the MERN stack with secure RESTful APIs.",
	thumbnailImage: LodgifyMe, // Make sure to import LodgifyMe image at the top
	category: "FullStack",
	clintLink: "https://github.com/TejuMehar/LodgifyMe", // Replace with your actual client repo link
	//serverLink: "https://github.com/TejuMehar/LodgifyMe-Server", // Replace if applicable
	//LiveLInk: "https://lodgifyme.netlify.app/" // Replace with your actual deployed link
}

		
	];

	const filteredData = Data.filter((item) => {
		if (activeButton === "All Projects") return true;
		if (activeButton === "FrontEnd") return item.category === "FrontEnd";
		if (activeButton === "FullStack") return item.category === "FullStack";
		return false;
	});

	return (
		<div id="Projects" className="bg-transparent py-10">
			{/* Header and Category Buttons */}
			<div className="sticky -top-5 z-[999] py-5 bg-black backdrop-blur-2xl">
				<h1 className="text-4xl md:text-5xl text-center pb-10">
					Latest Projects
				</h1>
				<div className="flex flex-wrap justify-center gap-5">
					<button
						onClick={() => setActiveButton("All Projects")}
						className={`${
							activeButton === "All Projects"
								? "bg-[#61CE70] text-black"
								: ""
						} btn lg:px-8 rounded-md hover:bg-[#61CE70] hover:text-black btn-outline hover:border-none text-[#61CE70]`}
					>
						All Projects
					</button>
					<button
						onClick={() => setActiveButton("FrontEnd")}
						className={`${
							activeButton === "FrontEnd"
								? "bg-[#61CE70] text-black"
								: ""
						} btn lg:px-8 rounded-md hover:bg-[#61CE70] hover:text-black btn-outline hover:border-none text-[#61CE70]`}
					>
						Frontend Projects
					</button>
					<button
						onClick={() => setActiveButton("FullStack")}
						className={`${
							activeButton === "FullStack"
								? "bg-[#61CE70] text-black"
								: ""
						} btn lg:px-8 rounded-md hover:bg-[#61CE70] hover:text-black btn-outline hover:border-none text-[#61CE70]`}
					>
						Full Stack Projects
					</button>
				</div>
			</div>

			{/* Project Cards */}
			<div className="mt-10 flex flex-col px-5 gap-20 lg:gap-10">
				{filteredData?.map((item, inx) => (
					<div
						key={inx}
						className={`${
							inx % 2 === 0 ? "lg:flex-row-reverse" : ""
						} flex flex-col lg:flex-row justify-center h-full lg:gap-5`}
					>
						<div className="lg:w-[700px]">
							<img
								src={item?.thumbnailImage}
								alt={`Thumbnail of ${item?.title}`}
								className="rounded-lg shadow-lg"
							/>
						</div>
						<div className="lg:w-[450px] h-full">
							<div className="min-h-[340px] bg-[#61CE70]/20 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg">
								<h1 className="text-4xl">{item?.title}</h1>
								<p className="text-lg mt-5">{item?.description}</p>
							</div>
							<div className="flex justify-between mt-3 flex-wrap gap-3">
								<Link
									to={item?.clintLink}
									className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]"
								>
									<FaGithub /> Client side
								</Link>

								{item?.serverLink && (
									<Link
										to={item?.serverLink}
										className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]"
									>
										<FaGithub /> Server side
									</Link>
								)}

								<Link
									to={item?.LiveLInk}
									className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]"
								>
									<FaExternalLinkAlt /> Visit website
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Projects;
