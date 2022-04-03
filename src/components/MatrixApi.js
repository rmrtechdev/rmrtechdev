import React from 'react';
import MatrixCard from 'matrix-card';
import GetEm from './GetEm';
import { ArrowCircleLeftIcon } from "@heroicons/react/solid";
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';


export default function MatrixApi() {
    return (
        <LazyLoad>
        <div style={{
            position: "fixed",
            display: "",
            flexDirection: "column",
            alignItems: "center",
        }}>
        <div className="container bg-scroll h-screen w-screen overscroll-auto">
  
                <MatrixCard className="object-center overscroll-auto"
                id={"my-id-2"}
                matrixText={"APPLICATION PROTOCOL INTERFACES CONNECT 2 DIFFERENT PROGRAMS TOGETHER"}
                delay={100}
                backgroundColor={"rgba(0, 40, 0, 0.1)"}
                textFontSize={"16"}
                textMainColor={"#00FF00"}
                textAlternateColorRatio={0.1}
                textAlternateColorList={["#00F000", "#00EA00", "#00E000", "#00D600"]}
                styleOverrideForCanvas={{ backgroundColor: "#00FF00" }}
                styleOverrideForContainerDiv={{ backgroundColor: "rgba(0, 40, 0)", }}
                
            >
            <div className="text-white">
                <nav>
                    <Link to="/" >
                        <ArrowCircleLeftIcon className="w-4 h-4 item-center text-center oject-center" />
                    </Link>
                Below is NASA's 'Astronomy Picture of the Day' displayed utilizing the free API: Application Program Interface...
                
               <GetEm className="object-fill" />
               
               </nav>

            </div>
            
            </MatrixCard>
       
            </div>
     </div>
</LazyLoad>
    );
}
