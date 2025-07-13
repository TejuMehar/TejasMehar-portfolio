import React from 'react';
import { FiCheckCircle } from 'react-icons/fi';
import octanetLogo from "../assets/logo/Octanet.jpg"; // Replace with real
import bizonanceLogo from "../assets/logo/Bizonance.png"; // Replace with real
import fiverrLogo from "../assets//logo/Fiver.png"; // Replace with real

const Experience = () => {
    const experiences = [
        {
            logo: bizonanceLogo,
            role: "Web Development Intern",
            company: "Bizonance India Pvt Ltd",
            duration: "March 2025 – May 2025 (2 months)",
            shortDuration: "Aug 24 - Sep 24",
            learnings: [
                 "Improved React.js fundamentals by working on component-based architecture.",
                "Learned effective collaboration using GitHub and daily standups.",
                "Learned how backend and frontend communicate using REST APIs.",
                
            ]
        },
        {
            logo: octanetLogo,
            role: "Web Development Intern",
            company: "OctaNet Services Pvt Ltd",
            duration: "June 2024 – July 2024 (2 months)",
            shortDuration: "Jun 24 - Jul 24",
            learnings: [
                "Improved React.js fundamentals by working on component-based architecture.",
                "Learned effective collaboration using GitHub and daily standups.",
                "Enhanced problem-solving with mini project-based learning.",
                "Practiced deploying full stack apps using services like Render and Netlify."
            ]
        },
        {
            logo: fiverrLogo,
            role: "Freelancer (Ongoing)",
            company: "Fiverr",
            duration: "January 2025 – Present",
            shortDuration: "Jan 25 - Present",
            learnings: [
                "Gained client communication and requirement gathering skills.",
                "Worked on real-world client projects involving custom frontend designs.",
                "Improved time management and client satisfaction skills."
            ]
        },
    ];

    return (
        <div className='p-10' id='experience'>
            <div className="text-center ">
                <h1 className="text-2xl md:text-4xl lg:text-5xl mb-4 text-white">My Experience</h1>
                <p className="text-2xl md:text-3xl lg:text-5xl text-[#61CE70]">----- What I’ve Done ------</p>
            </div>

            {experiences.map((exp, index) => (
                <div key={index} className="flex flex-col md:flex-row justify-center gap-5 lg:gap-10 my-10">
                    <div className='w-full md:w-1/4 flex justify-center lg:justify-end items-center lg:w-1/3 p-10 md:p-5 lg:p-10'>
                        <img src={exp.logo} className='rounded-3xl w-[300px] hover:scale-105 transition-transform duration-300' alt={`${exp.company} Logo`} />
                    </div>
                    <div className='w-full md:w-3/4 lg:w-2/3 md:p-5 lg:p-10 max-w-3xl rounded-3xl shadow-lg'>
                        <h1 className='text-2xl md:text-3xl font-extrabold text-white'>{exp.role}</h1>
                        <h2 className='text-lg hidden md:block my-3 font-medium text-gray-300'>{exp.company} | {exp.duration}</h2>
                        <h2 className='my-2 lg:hidden text-lg'>{exp.company} | {exp.shortDuration}</h2>

                        <ul className='list-disc mt-5 md:ml-5 space-y-3 md:pl-5'>
                            {exp.learnings.map((point, idx) => (
                                <li key={idx} className='flex items-start gap-3 leading-relaxed'>
                                    <div className='w-5 h-5 mt-2 flex-shrink-0'>
                                        <FiCheckCircle className="text-primaryColor" />
                                    </div>
                                    <span className='flex-grow'>{point}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Experience;
