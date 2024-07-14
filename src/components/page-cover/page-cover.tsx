import React, { useState, useEffect } from "react";
import Image from "next/image";

interface CoverProps {
    cover: string;
}
const PageCover: React.FC<CoverProps> = ({ cover }) => {
    const [brightness, setBrightness] = useState(1);  // Starting at normal brightness

useEffect(() => {
    const handleScroll = () => {
        let calculatedBrightness = 1 - window.scrollY / 500;
        if (calculatedBrightness < 0.2) calculatedBrightness = 0.2;  // don't go too dark
        setBrightness(calculatedBrightness);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


    return (
        <>
        <div className="w-full bg-transparent z-10 h-[vh] "></div>
        <div className="relative w-full h-[70vh] z-10" style={{ filter: `brightness(${brightness})` }}>
            <Image 
                src={cover} 
                alt='coverImage' 
                fill
                className="absolute object-cover" 

            />
        </div>
        </>
    )
}
export default PageCover;
