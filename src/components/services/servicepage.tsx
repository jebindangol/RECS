import React, { useEffect, useState } from "react";
import MasterLayout from "../masterlayout/masterlayout";
import Image from "next/image";
import construction from "../../../public/img/project/construction.png";
import interior from "../../../public/img/project/interior.png";
import maintanance from "../../../public/img/project/maintanance.png";
import supervision from "../../../public/img/project/supervision.png";
import servicepagecover from "../../../public/img/project/servicepagecover.png";

interface Props {
  showFooter?: boolean;
}

const Servicepage: React.FC<Props> = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 868);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const backgroundStyle: React.CSSProperties = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: isMobile ? "none" : `url("./img/project/servicepagecover.png")`,
  };

  return (
    <MasterLayout>
      <div
        className="flex flex-col items-center justify-around md:h-screen "
        style={backgroundStyle}
      >
        <div className="md:hidden flex">
          <Image
            src={servicepagecover}
            alt={""}
            className="h-[380px] w-screen object-cover"
          />
        </div>
        <div className=" flex flex-col gap-2 md:mt-10 mt-5 justify-center items-center ">
          <p className="md:text-[35px] text-[20px] w-[250px] md:w-[450px] text-center text-black md:text-white uppercase font-bold md:font-semibold border-b border-black md:border-white pb-2">
            everybody deserves a better home
          </p>
          <p className="uppercase md:text-[22px] text-[16px] text-black md:text-white">
            services we offer
          </p>
        </div>
        <div className="md:flex grid grid-cols-2 md:gap-5 gap-5 md:p-0 py-10 px-5">
          <div
            className="md:h-[180px] md:w-[200px] h-[125px] w-[155px]  rounded-sm bord border-gray-300 shadow-lg bg-white flex flex-col justify-end items-center md:py-4 py-1"
            style={{
              backgroundImage: "url('./img/project/housedesign.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <h1 className=" uppercase  font-bold  md:text-[16px] text-[14px] ">
              House design
            </h1>
          </div>
          <div className="md:h-[180px] md:w-[200px] h-[125px] w-[155px]  rounded-sm border-2 border-gray-300 shadow-lg bg-white flex flex-col justify-around items-center ">
            <Image
              src={construction}
              alt={""}
              className="md:h-[95px] md:w-[70px] w-[60px]"
            />
            <h1 className=" font-bold  uppercase  md:text-[16px] text-[14px] ">
              consrtuction{" "}
            </h1>
          </div>
          <div className="md:h-[180px] md:w-[200px] h-[125px] w-[155px] rounded-sm border-2 border-gray-300 shadow-lg bg-white flex flex-col justify-around items-center ">
            <Image
              src={interior}
              alt={""}
              className="md:h-[110px] h-[90px] w-[100px] md:w-[130px]"
            />
            <h1 className=" font-bold  uppercase   md:text-[16px] text-[14px]">
              interior{" "}
            </h1>
          </div>
          <div className="md:h-[180px] md:w-[200px] h-[125px] w-[155px]  rounded-sm border-2 border-gray-300 shadow-lg bg-white flex flex-col justify-around items-center ">
            <Image
              src={supervision}
              alt={""}
              className="md:h-[110px] h-[90px] w-[100px] md:w-[130px]"
            />
            <h1 className=" font-bold uppercase  md:text-[16px] text-[14px]">
              supervision{" "}
            </h1>
          </div>
          <div className="md:h-[180px] md:w-[200px] h-[125px] w-[155px] rounded-sm border-2 border-gray-300 shadow-lg bg-white flex flex-col justify-around items-center ">
            <Image
              src={maintanance}
              alt={""}
              className="md:h-[100px] h-[90px] w-[100px] md:w-[110px]"
            />
            <h1 className=" font-bold uppercase  md:text-[16px] text-[14px]">
              Maintainance{" "}
            </h1>
          </div>
        </div>
      </div>
    </MasterLayout>
  );
};

export default Servicepage;
