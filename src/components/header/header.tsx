import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import menubar from "../../../public/menubar.svg";
import recslogo from "../../../public/recshomelogo.svg";
import NavbarLinks from "./headerlink";
import {motion} from "framer-motion";

interface NavbarLinksProps {}

const Navbar: React.FC<NavbarLinksProps> = () => {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [animationComplete,setAnimationComplete] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div 
    initial={{ scale: 2, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 0.8, ease: "anticipate" }}
    onAnimationComplete={() => setAnimationComplete(true)} // Add this line
    className={`${animationComplete ? 'fixed top-0 z-20' : ''} w-full`} // Moved the fixed positioning here
    >
    <div className= "flex flex-row justify-between py-2 px-5 bg-white z-20">
      <div>
        {/* logo  */}
        <Link href="./" className="flex items-center">
          <Image src={recslogo} alt={""} className="h-[70px] w-[100px]" />
        </Link>
      </div>

      {/* menu items  */}
      <div className="hidden md:flex md:w-[600px] md:justify-around items-center">
        <Link
          href="/project"
          className={`text-black uppercase   config pull.rebase trueercase  ${
            router.pathname === "/project" ||
            router.pathname.startsWith("/project/")
              ? " font-bold "
              : ""
          }`}
        >
          Projects
          {router.pathname.startsWith("/project") && (
            <div className="absolute top-[68px] w-[88px] h-[2px] bg-black"></div>
          )}
        </Link>

        <Link
          href="/service"
          className={`text-black   uppercase  ${
            router.pathname === "/service" ||
            router.pathname.startsWith("/service/")
              ? " font-bold "
              : ""
          }`}
        >
          services
          {router.pathname.startsWith("/service") && (
            <div className="absolute top-[68px] w-[85px] h-[2px] bg-black"></div>
          )}
        </Link>

        <Link
          href="/gallery"
          className={`text-black   uppercase  ${
            router.pathname === "/gallery" ||
            router.pathname.startsWith("/gallery/")
              ? " font-bold "
              : ""
          }`}
        >
          gallery
          {router.pathname.startsWith("/gallery") && (
            <div className="absolute top-[68px] w-[80px] h-[2px] bg-black"></div>
          )}
        </Link>

        <Link
          href="/blog"
          className={`text-black   uppercase  ${
            router.pathname === "/blog" || router.pathname.startsWith("/blog/")
              ? " font-bold "
              : ""
          }`}
        >
          blog
          {router.pathname.startsWith("/blog") && (
            <div className="absolute top-[68px] w-[50px] h-[2px] bg-black"></div>
          )}
        </Link>
      </div>

      {/* mobile view  */}
      <div className="md:hidden flex items-center">
        <button
          className="outline-none mobile-menu-button"
          onClick={toggleMenu}
        >
          <Image src={menubar} alt={""} className="h-[25px] w-[25px]" />
        </button>
      </div>

      {/* login sign up  */}
      <div className="hidden md:block">
        {/* <div className="items-center md:flex hidden flex-row gap-4"> */}
          {/* <Link href="./login" className="text-[12px]">
            LOG IN
          </Link>
          <div className="h-[13px] w-[1px] bg-black"></div>
          <Link href="./signup" className="text-[12px]">
            SIGN UP
          </Link> */}
        {/* </div> */}
      </div>

      {isOpen && (
        <NavbarLinks
          isOpen={isOpen}
          onClose={toggleMenu}
          toggleMenu={toggleMenu}
        />
      )}
    </div>
    </motion.div>
  );
};
export default Navbar;
