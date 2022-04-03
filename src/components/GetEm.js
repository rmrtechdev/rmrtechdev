import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function GetEm() {
    const url = ' https://api.nasa.gov/planetary/apod?api_key=rgkT3fy7C7asJc1uG1zAYqWFFZDoehnDRwMHBHvY';
    const [images, setImages] = useState([]);
    const getImages = () => {
        Axios.get(url).then((res) => {
            console.log(res);
            setImages([res.data]);
        });
    };

    useEffect(() => {
        getImages();
    }, []);

    if (!images) {
        return <h1>Loading...</h1>
    }
    return (
            
        
        <div className="GetEm rounded-lg">
            {images.map((image) => {
                return (
                    <img
                        src={image.hdurl}
                        alt={image.title}
                        key={image.date}
                        
                    />
                );
            })}
        </div>

        
    );
}

export default GetEm;
