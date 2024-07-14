import React from "react";
import Link from "next/link";
import Logo from "../../../public/recshomelogo.svg";
import Image from "next/image";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <div className="relative bottom-0 md:mt-0 z-50">
      <div className="md:h-[250px] bg-lightgray md:flex justify-center items-center md:justify-around md:py-0 py-10">
        <div className="md:flex md:flex-row flex flex-col justify-center items-center md:gap-7 gap-10">
          {/*  */}
          {/*  */}
          {/* logo  */}
          <Image
            src={Logo}
            alt="logo"
            width={197}
            height={70}
            className="md:h-[75px] md:w-[190px] h-[65px] w-[170px]"
          />
          {/*  */}
          {/*  */}
          {/* about us  */}
          <div className="h-[107px] w-[2px] bg-gray-300 md:flex hidden"></div>
          <div className="flex flex-col md:w-[415px] w-[300px] gap-3 md:gap-4 justify-center md:items-start items-center">
            <h1 className="md:font-medium font-bold">ABOUT US</h1>
            <p className="text-center md:text-start">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat.
            </p>
          </div>
          <div className="h-[107px] w-[2px] bg-gray-300 md:flex hidden"></div>
          <div className="flex flex-col gap-4 ">
            {/* <div className="md:flex  hidden justify-center items-center gap-[15px] ">
              <Link href="./login" className="text-[16px]">
                LOG IN
              </Link>
              <div className="h-[13px] w-[1px] bg-black"></div>
              <Link href="./signup" className="text-[16px]">
                SIGN UP
              </Link>
            </div> */}
            {/*  */}
            {/*  */}
            {/* quotation  */}
            <Link
              href="./quotation"
              className="text-[16px] md:font-normal font-semibold md:border-none border-b border-gray-400 md:w-[152px] w-[250px] md:text-center text-center md:py-0 py-2"
            >
              GET A QUOTATION
            </Link>
            <Link
              href="./contact"
              className="text-[16px] md:text-start text-center"
            >
              CONTACT US
            </Link>
          </div>
        </div>
        {/*  */}
        {/*  */}
        {/* social media  */}
        <div className="flex flex-row md:w-[188px] gap-6 justify-center items-center md:mt-0 mt-10">
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
      {/* end of upper footer  */}
      {/*  */}
      {/*  */}
      {/* copyright section  */}
      <div className="flex bg-gray-700 md:bg-gray-900 text-white justify-center md:py-4 py-3">
        <p className="md:text-[16px] text-[13px]">
          Copyright 2023 - RECSHomes | Zero Logic Space
        </p>
      </div>
    </div>
  );
};
export default Footer;
