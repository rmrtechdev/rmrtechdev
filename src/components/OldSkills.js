// src/components/Skills.js

import { CheckIcon, AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import { Parallax } from "react-scroll-parallax";
import  { ParallaxWrapper }  from "react-parallax-button";

export default function Skills() {
    return (
        <Parallax>
        <section id="skills">z
                <div className="container leading-relaxed px-10 py-10 mx-auto">
                <div className="text-center mb-20">
                        <ParallaxWrapper parallaxScale={1}>
                    <AcademicCapIcon className="w-10 inline-block mb-4 text-white" />
                    <h1 className="sm:text-4xl text-3xl font-semibold title-font text-white mb-4">
                        Skills &amp; Technologies
                    </h1>
                    <p className="text-white font-bold xl:w-2/4 lg:w-2/3 mx-auto">
                        I'm a writer at heart ~ now I write code. How might I be of service?
                    </p>
                    </ParallaxWrapper>
                </div>

                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
                    {skills.map((skill) => (
                        <div key={skill} className="p-2 sm:w-1/2 w-full">
                            <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                                <CheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                                <span className="title-font font-medium text-white">
                                    {skill}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
                
            </div>
        </section>
        </Parallax>
    );
}