import React from 'react';
import LogoTwo from "../assets/logo/HomePagelogo2.jpeg";

const AboutMe = () => {
    return (
        <div id="About" className="py-20 lg:py-10 px-4 lg:px-10">
        
            {/* Title Section */}
            <div className="text-center mb-10">
                <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 text-white">
                    About Me
                </h1>
                <p className="text-2xl md:text-4xl lg:text-5xl text-[#61CE70]">
                    ----- Who I Am ------
                </p>
            </div>

            {/* Content Section */}
            <div className="flex flex-col-reverse md:flex-row-reverse items-center justify-center gap-10 lg:gap-28">
                {/* Text Block */}
                <div data-aos="fade-up" className="text-xl leading-relaxed text-white text-justify space-y-5 md:w-1/2">
                    <p>
                        Hey there! I'm <strong>Tejas Mehar</strong>, a passionate web developer with a mission to transform ideas into engaging digital experiences. I specialize in creating captivating user interfaces using HTML, CSS, and JavaScript, with a focus on dynamic applications using React.
                    </p>
                    <p>
                        On the backend, I wield the power of <strong>Node.js</strong> and <strong>Express.js</strong> to build scalable server-side logic, and I use <strong>MongoDB</strong> for efficient data storage and management.
                    </p>
                </div>

                {/* Image Block */}
                <div data-aos="zoom-in">
                   <div className="border-8 border-[#61CE60] p-4 rounded-full w-80 h-80 hover:translate-y-3 duration-300 transition-transform bg-black">
                     <img
                       className="rounded-full h-full w-full object-contain"
                        src={LogoTwo}
                       alt="Tejas Mehar"
                     />
                </div>

                </div>
            </div>
        </div>
    );
};

export default AboutMe;
