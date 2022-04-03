// src/components/Projects.js

import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";
import { Parallax } from "react-scroll-parallax";
import { ParallaxWrapper } from "react-parallax-button";

export default function Projects() {
    return (
        <Parallax>
            <section id="projects" className="container">
            <div className="container px-5 py-10 mx-auto text-center leading-relaxed font-semibold lg:px-40">
                <div className="flex flex-col w-full mb-20">
                    
                    <ParallaxWrapper parallaxScale={1}>
                    <CodeIcon className="mx-auto inline-flex w-10 mb-4 text-white" />
                    <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-white">
                        Apps I've Built
                    </h1>
                        <p className="lg:w-2/3 mx-auto  text-white">
                        A modest collection of programming experiences to exhibit software development capabilities.
                    </p>
                    </ParallaxWrapper>
                </div>
                
                <div className="flex flex-wrap -m-4 items-center">
                    {projects.map((project) => (
                        <a
                            href={project.link}
                            key={project.video}
                            className="sm:w-1/2 w-100 p-4">
                            <div className="flex relative">
                                <video autoPlay muted
                                    alt="gallery"
                                    className="object-center absolute w-full h-full object-contain "
                                    src={project.video} />
                                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                                    <h2 className="tracking-widset text-sm title-font font-medium text-green-400 mb-1">
                                        {project.subtitle}
                                    </h2>
                                    <h1 className="title-font text-lg font-medium text-white mb-3">
                                        {project.title}
                                    </h1>
                                    <p className="leading-relaxed">{project.description}</p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
        </Parallax>
    );
}