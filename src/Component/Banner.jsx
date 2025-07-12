import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaStar } from "react-icons/fa6";
import pdf from "../assets/TejasResume.pdf";

import "./banner.css";
import founder from "../assets/founder.jpeg";

const Banner = () => {
  const [isPreparing, setIsPreparing] = useState(false); // Loading state

  const handleDownload = () => {
    setIsPreparing(true); // Set loading state
    // Simulate a small delay for "preparing" (optional)
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = pdf;
      link.download = "TejasResume.pdf";
      link.click();
      setIsPreparing(false); // Reset loading state
    }, 1000); // Adjust delay as needed
  };

  return (
    <div id="home">
      <div className="w-full bg-transparent p-5 h-screen max-h-[700px] flex flex-col-reverse md:flex-row items-center justify-center gap-28 md:gap-20">
        <div className="md:w-1/2 space-y-8">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Hi there, I'm Tejas Mehar
          </h1>

          <TypeAnimation
            sequence={[
              "MERN Stack Developer",
              1000,
              "Front end Developer",
              2000,
              " MERN Stack Developer",
              () => {
                console.log("Sequence completed");
              },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-3xl md:text-4xl lg:text-5xl text-[#61CE70] block line"
          />
          <p className="text-justify pb-5">
          I’m a dedicated MERN Stack Developer with expertise in MongoDB, Express.js, React, and Node.js. I build scalable, full-stack web applications that deliver seamless performance and intuitive user experiences. With a blend of creativity and clean code, I strive to bring every project to life — from concept to deployment.


          </p>

          <button
            onClick={handleDownload}
            data-aos="zoom-in"
            className="btn mt-5 btn-outline text-[#61CE70] hover:bg-[#61CE70] hover:text-black "
          >
            {isPreparing ? "Preparing to download..." : "Download Resume"}
          </button>
        </div>
        <div className="mt-24 lg:mt-0">
          <div
            data-aos="zoom-in"
            className="border-8 hover:translate-y-10 duration-150 p-4 border-[#61CE70] rounded-full w-80 h-80"
          >
            <img
              className="rounded-full h-full object-cover w-full"
              src={founder}
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
