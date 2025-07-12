import React, { useEffect, useState } from "react";

import BikroyElectronics from "../assets/websiteThumbnail/bikroyelectronics.webp"
import motionArt from "../assets/websiteThumbnail/motion-art.webp"
import topicTrove from "../assets/websiteThumbnail/topic-trove.webp"
import weddingHut from "../assets/websiteThumbnail/wedding-hut.webp"
import assetHexa from "../assets/websiteThumbnail/asset-hexa.webp"


import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


// importing aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Projects = () => {



	const Data = [
		{
			title: "BikroyElectronics",
			description: "BikroyElectronics is a comprehensive e-commerce platform for selling and purchasing electronics. The site is designed with a user-friendly interface, secure transactions, and a range of features that enhance both user and admin experiences.",
			thumbnailImage: BikroyElectronics,
			category: "FullStack",
			clintLink: "https://github.com/Mustafiz82/BikroyElectronics",
			serverLink: "https://github.com/Mustafiz82/BikroyElectronics-server",
			LiveLInk: "https://bikroyelectronics.web.app/"

		},
		{
			title: "Motion Art",
			description: "Helivarse Motion Art is a sleek, modern website that showcases stunning motion graphics and animations. It offers a curated collection of visually engaging art, providing an immersive experience for design enthusiasts and creatives alike.",
			thumbnailImage: motionArt,
			category: "FrontEnd",
			clintLink: "https://github.com/Mustafiz82/jobtask-Motion-art",
			serverLink: "",
			LiveLInk: "https://helivarse-motion-art.vercel.app/"

		},
		{
			title: "Asset Hexa",
			description: "This is a Team project that offers tools for money management, income/expense tracking, and investment in businesses. Users can write blogs, showcase businesses, and invest, while admins manage accounts and verify conten.",
			thumbnailImage: assetHexa,
			category: "FullStack",
			clintLink: "https://github.com/NFRIDOY/asset-hexa",
			serverLink: "https://github.com/NFRIDOY/Asset-Hexa-Server",
			LiveLInk: "https://asset-hexa.web.app/"

		},
		
		{
			title: "Wedding Hut",
			description: "The website features a welcoming homepage, secure user authentication with Google Sign-In, and private routes for logged-in users. It’s fully responsive with React AOS integration for smooth, engaging animations.",
			thumbnailImage: weddingHut,
			category: "FrontEnd",
			clintLink: "https://github.com/Mustafiz82/Assignment-9-wedding-event-management",
			serverLink: null,
			LiveLInk: "https://wedding-hut-8caa8.web.app/"

		},
		
		{
			title: "TopicTrove",
			description: "The website offers a welcoming homepage, secure user authentication with Google Sign-In, and features like post creation, editing, deletion, and comments. It’s fully responsive with efficient data storage.",
			thumbnailImage: topicTrove,
			category: "FullStack",
			clintLink: "https://github.com/Mustafiz82/Assignment-12-TopicTrove-Clint-side-",
			serverLink: "https://github.com/Mustafiz82/Assignment-12-TopicTrove-Server-side",
			LiveLInk: "https://topic-trove.web.app/"

		},
	]



	const [activeButton, setActiveButton] = useState("all Product")


	const filteredData = Data.filter(item => {
		if (activeButton === "all Product") return true;
		if (activeButton === "FrontEnd") return item.category === "FrontEnd";
		if (activeButton === "Full Stack") return item.category === "FullStack";
		return false;
	});

	

	useEffect(() => {
		AOS.init();
	}, []);

	return (
		<div id="Projects" className="bg-transparent py-10 ">
			<div className="sticky -top-5 z-[999] py-5  bg-black backdrop-blur-2xl">
				<h1 className="text-4xl md:text-5xl text-center pb-10 ">

					Latest projects
				</h1>


				<div className="flex flex-wrap bg-black justify-center gap-5">
					<button onClick={() => setActiveButton("all Product")} className={` ${(activeButton == "all Product") ? "bg-[#61CE70] text-black" : ""}     btn lg:px-8 rounded-md  hover:bg-[#61CE70] hover:text-black btn-outline  hover:border-none text-[#61CE70]`}> All Projects</button>
					<button onClick={() => setActiveButton("FrontEnd")} className={` ${(activeButton == "FrontEnd") ? "bg-[#61CE70] text-black" : ""}     btn lg:px-8 rounded-md  hover:bg-[#61CE70] hover:text-black btn-outline  hover:border-none text-[#61CE70]`}> Frontend Projects</button>
					<button onClick={() => setActiveButton("Full Stack")} className={` ${(activeButton == "Full Stack") ? "bg-[#61CE70] text-black" : ""}     btn lg:px-8 rounded-md  hover:bg-[#61CE70] hover:text-black btn-outline  hover:border-none text-[#61CE70]`}> Full Stack Projects</button>


				</div>
			</div>



			<div className="mt-10 flex flex-col px-5 gap-20 lg:gap-10">

				{
					filteredData?.map((item, inx) => (
						<div className={`${inx % 2 == 0 ? "lg:flex-row-reverse" : ""} flex flex-col lg:flex-row justify-center h-full lg:gap-5`} key={inx}>
							<div className="lg:w-[700px]">
								<img src={item?.thumbnailImage} alt={item?.title} />
							</div>

							<div className="lg:w-[450px] h-full">
								<div className="min-h-[340px] bg-[#61CE70]/20 backdrop-blur-lg border border-white/20 shadow-lg p-6 rounded-lg">
									<h1 className="text-4xl">{item?.title}</h1>
									<p className="text-lg mt-5">{item?.description}</p>
								</div>
								<div className="flex justify-between">
									<Link to={item?.clintLink} className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]">
										<FaGithub /> Client side
									</Link>

									{/* Conditionally render the Server side button */}
									{item?.serverLink && (
										<Link to={item?.serverLink} className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]">
											<FaGithub /> Server side
										</Link>
									)}

									<Link to={item?.LiveLInk} className="btn hover:bg-[#4CAB58] flex-1 rounded-none text-black bg-[#61CE70]">
										<FaExternalLinkAlt /> Visit website
									</Link>
								</div>
							</div>
						</div>
					))
				}

			</div>





		</div>
	);
};

export default Projects;