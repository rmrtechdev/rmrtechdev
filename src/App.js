// src/App.js

import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { ParallaxBanner } from 'react-scroll-parallax';
import bggrid from './bggrid.jpg'
import Headshot from "./components/Headshot";



export default function App() {

  return (

   
      <ParallaxBanner
        className="text-gray-400 body-font full-height"
        layers={[

          {
            image: bggrid,
            amount: 0,
            slowerScrollRate: false
          }]
        }
        style={{
          height: '100',
          width: '100'
        }}>

        <Navbar />

        <div className="container">

          <div className="container flex px-10 py-20 md:flex-row flex-col items-center">

            <About />

            <Headshot className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6" />
          </div>
          <Projects />
          <Skills />
          <Contact />
        </div>
      </ParallaxBanner>


  )
}






