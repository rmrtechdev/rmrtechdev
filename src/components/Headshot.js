import React from "react";
import { ParallaxWrapper } from "react-parallax-button";

export default function Headshot() {
    return (
//div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
    <div>
            <ParallaxWrapper parallaxScale={1}>
    <img
        className="rounded-full h-96 w-96 object-cover mx-auto"
        alt="hero"
        src="./crown.jpeg"
    />
    </ParallaxWrapper>
    </div>
    );

//div>

}