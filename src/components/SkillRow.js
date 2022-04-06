
import { CheckIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";
import { Parallax } from "react-scroll-parallax";




export default function SkillsRow() {
    return (
        <Parallax>
        <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {skills.map((skill) => (
                <div key={skill} className="p-2 sm:w-1/2 w-full" >
                    <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                        <CheckIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                        <span className="title-font font-medium text-white">
                            {skill}
                        </span>
                    </div>
                </div>
            ))}
        </div>
        </Parallax>
    );
}