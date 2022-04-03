// src/components/About.js

import React from "react";
import { ParallaxWrapper } from "react-parallax-button";
import { IconContext } from "react-icons";
//import { FaLaptopCode } from 'react-icons/fa';
import { FaExternalLinkAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { AiOutlineApi } from 'react-icons/ai';
import { SiThreedotjs } from 'react-icons/si';




var ReactRotatingText = require('react-rotating-text');



export default function About() {
    return (
       
      
            <section id="about" className="">
               

                <ParallaxWrapper parallaxScale={0.23}>
                    <div className="container inline-flex mx-auto px-10 py-6 md:grid-flow ">
                        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex-col md:items-start md:text-left mb-16 md:mb-0  font-extrabold text-center">
                           

                            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                                
                               Raymond M. Roman
                            <br></br>
                                <br></br>
                                <ReactRotatingText items={['Web Developer', 'Python, Django Specialist', 'Data Analyst', 'UX Designer', 'Problem-Solver', 'Tech Guru']} />
                            </h1>
                            <br></br>
                           
                           
                       

                          

                          

                            <div className="inline-flex content-center">

                                <nav>
                                    <Link to="matrixapi" className="ml-4 flex text-gray-600 bg-yellow-300 border-0 py-2 px-4 focus:outline-none hover:bg-yellow-500 hover:text-gray-800 rounded text-md">
                                        React API Integration
                                        <IconContext.Provider value={{ className: "flex", attr: "p-9", size: "2.1em", color: "blue", style: { marginLeft: '6px', bold: 'true' } }}>
                                            <div >
                                                <AiOutlineApi />
                                            </div>
                                        </IconContext.Provider>
                                    </Link>
                                </nav>
                                <a href="https://enigmatic-wildwood-18901.herokuapp.com/api/snippets/" target="_blank" rel="noopener noreferrer" className="ml-4 flex text-gray-700 bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-800 hover:text-white rounded text-md">
                                    REST.API DEMO
                                    <IconContext.Provider value={{ className: "flex", attr: "p-11", size: "1.66em", color: "gold", style: { marginLeft: '6px', } }}>
                                        <div >
                                            <FaExternalLinkAlt />
                                        </div>
                                    </IconContext.Provider>
                                </a>
                            </div>
                            <div className="inline-flex content-center ">
                                <a href="https://heikojan2010.github.io/jsx3/" target="_blank" rel="noopener noreferrer" className="mt-4 ml-4 flex place-content-stretch rounded text-md text-gray-700 bg-blue-500 border-0 py-2 px-10 focus:outline-none hover:bg-blue-800 hover:text-white ">
                                    THREE.js DEMO
                                    <IconContext.Provider value={{ className: "flex", attr: "p-11", size: "1.99em", color: "gold", style: { marginLeft: '6px', bold: 'true' } }}>
                                        <div >
                                            <SiThreedotjs />
                                        </div>
                                    </IconContext.Provider>
                                </a>
                            </div>

                        </div>
                    </div>
                </ParallaxWrapper>
            </section>
      
      
    );
} 