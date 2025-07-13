import React, { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { FaStar } from "react-icons/fa6";
import pdf from "../assets/TejasResume.pdf";
import founder from "../assets/founder.jpeg";
import "./banner.css";

const Banner = () => {
  const [isPreparing, setIsPreparing] = useState(false);

  const handleDownload = () => {
    setIsPreparing(true);
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = pdf;
      link.download = "TejasResume.pdf";
      link.click();
      setIsPreparing(false);
    }, 1000);
  };

  return (
    <div id="home" className="w-full bg-transparent px-4 py-10 md:py-20">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center gap-10 md:gap-20">
        {/* Text Section */}
        <div className="md:w-1/2 text-center md:text-left space-y-6 lg:pl-10 xl:pl-20">
  <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
    Hi there, I'm Tejas Mehar
  </h1>

  <TypeAnimation
    sequence={[
      "MERN Stack Developer", 1000,
      "Frontend Developer", 2000,
      "MERN Stack Developer"
    ]}
    wrapper="span"
    cursor={true}
    repeat={Infinity}
    className="text-2xl md:text-3xl lg:text-4xl text-[#61CE70] block"
  />

  <p className="text-white text-base md:text-lg text-justify md:text-left">
    I’m a dedicated MERN Stack Developer with expertise in MongoDB, Express.js,
    React, and Node.js. I build scalable, full-stack web applications that deliver
    seamless performance and intuitive user experiences.
  </p>

  <button
    onClick={handleDownload}
    data-aos="zoom-in"
    className="btn btn-outline text-[#61CE70] hover:bg-[#61CE70] hover:text-black mt-4"
  >
    {isPreparing ? "Preparing to download..." : "Download Resume"}
  </button>
</div>


        {/* Image Section */}
        <div data-aos="zoom-in" className="w-64 sm:w-80 mx-auto">
          <div className="border-8 border-[#61CE70] p-4 rounded-full hover:translate-y-2 transition-transform duration-300">
            <img
              className="rounded-full w-full h-full object-cover"
              src={founder}
              alt="Tejas Mehar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
