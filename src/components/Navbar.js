// src/components/Navbar.js

import { ArrowDownIcon } from "@heroicons/react/solid";
import React from "react";
import { Parallax } from "react-scroll-parallax";
import { IconContext } from 'react-icons';
import { FaPython, FaReact, FaHtml5, FaCss3, FaJs } from 'react-icons/fa';
import {DiDjango } from 'react-icons/di';
import { SiThreedotjs } from 'react-icons/si';

export default function Navbar() {
    return (
        <Parallax>
        <header className="bg-gray-800 md:sticky top-0 z-10">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <div className="title-font font-medium text-white mb-4 md:mb-0">
                    <a href="#about" className="ml-3 text-xl">
                        RMR | Web Developer
                    </a>
                </div>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700 flex flex-wrap items-center text-base justify-center">
                    <a href="#projects" className="mr-5 hover:text-white">
                        Past Work
                    </a>
                    <a href="#skills" className="mr-5 hover:text-white">
                        Skills
                    </a>
                    <a href="https://www.linkedin.com/in/raymond-r-972804aa/" target="_blank" rel="noopener noreferrer" className="mr-5 hover:text-white">
                        LinkedIn
                    </a>
                    <a href="https://github.com/heikojan2010" target="_blank" rel="noopener noreferrer" className="mr-5 hover:text-white">
                        GitHub
                    </a>
                    <a href="https://www.upwork.com/freelancers/rmrtech?" target="_blank" rel="noopener noreferrer" className="mr-5 hover:text-white">
                        Upwork
                    </a>
                    

                    
                
                
                    <IconContext.Provider value={{ className: "flex", attr: "p-11", size: "1.6em", color: "hotpink", style: { marginLeft: '6px', } }}>
                        <div >
                            <FaPython />
                        </div>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ className: "flex", size: "2.6em", color: "hotpink", style: { marginLeft: '6px', } }}>
                        <div >
                            <DiDjango />
                        </div>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ className: "flex", attr: "p-11", size: "1.6em", color: "hotpink", style: { marginLeft: '6px', } }}>
                        <div >
                            <FaHtml5 />
                        </div>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ className: "flex", attr: "p-11", size: "1.6em", color: "hotpink", style: { marginLeft: '6px', } }}>
                        <div >
                            <FaCss3 />
                        </div>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ className: "flex", attr: "p-11", size: "1.6em", color: "hotpink", style: { marginLeft: '6px', } }}>
                        <div >
                            <FaJs />
                        </div>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ className: "flex", attr: "p-11", size: "1.6em", color: "hotpink", style: { marginLeft: '6px', } }}>
                        <div >
                            <FaReact />
                        </div>
                    </IconContext.Provider>

                    <IconContext.Provider value={{ className: "flex", attr: "p-11", size: "1.6em", color: "hotpink", style: { marginLeft: '6px', } }}>
                        <div >
                            <SiThreedotjs />
                        </div>
                    </IconContext.Provider>
                
                </nav>


                <a
                    href="#contact"
                    className="animate-bounce inline-flex text-white text-lg items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 text-base mt-4 md:mt-0">
                    Hire Me
                    <ArrowDownIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    </Parallax>
    );
}

