import React, { useRef } from "react";
import Logo from "../../../public/recsherologo.png";
import Image from "next/image";
import Herotitle from "./hero-title";
import HeroCTA from "./hero-cta";

interface Props {}

const Homepage: React.FC<Props> = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleWheel = (e: React.WheelEvent<HTMLVideoElement>) => {
    const video = videoRef.current;
    if (video) {
      const delta = e.deltaY < 0 ? -0.5 : 0.5;
      video.currentTime += delta;
    }
  };

  return (
    <div className="relative h-screen w-screen">
      <div className="flex absolute left-[110px] top-14 md:top-4 md:left-[35px] md:file:right-[35px] z-10">
        <div className="flex items-center w-full">
          <Image
            src={Logo}
            alt="recshome logo"
            width={100}
            height={70}
            className="md:h-[50px] md:w-[125px] h-[55px] w-[150px]"
          />
        </div>
      </div>

      <div className="h-screen w-screen bg-black relative">
        <video
          ref={videoRef}
          onWheel={handleWheel}
          className="h-screen w-screen object-cover opacity-50" // Only the video has reduced opacity
        >
          <source src="./Homedesign.mp4" type="video/mp4" />
        </video>
        <div className="absolute top-[38%] text-white md:text-[40px] font-bold md:left-[35%] md:w-[450px] text-center flex flex-col items-center gap-5 ">
          <Herotitle />
          <HeroCTA link="./explore" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
