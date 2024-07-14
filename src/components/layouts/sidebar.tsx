import React, { useState, useEffect } from "react";
import Image from "next/image";
import recshomelogo from "../../../public/recsherologo.png";
import admindashboard from "../../../public/img/project/admindashboard.svg"
import adminblog from "../../../public/img/project/adminblog.svg"
import adminproject from "../../../public/img/project/adminproject.svg"
import admingallery from "../../../public/img/project/admingallery.svg"
import Link from "next/link";
import { useRouter } from "next/router";

const Sidebar: React.FC = () => {
    const router = useRouter(); 


    const isActive = (route: string) => {
      return router.pathname === route ? "bg-neutral-600" : "";
    };
  
  return (
    <div className=" w-[250px] bg-black text-white h-full fixed top-0 left-0">
      <div className="flex justify-center items-center h-[150px]">
        <Image src={recshomelogo} alt={""} height={100} width={120} />
      </div>

      <div className="h-[300p]  flex flex-col ">
        
        <Link href="/admin"  className={`h-[65px] flex items-center hover:bg-neutral-600 cursor-pointer gap-2 pl-[65px] ${isActive("/admin")}`}>
            <Image src={admindashboard} alt={""} className="h-[18px]"/>
          <h1 className=" text-white ">Dashboard </h1>
        </Link>
        <Link href="/project"  className={`h-[65px] flex items-center hover:bg-neutral-600 cursor-pointer gap-2 pl-[65px] ${isActive("/project")}`}>
        <Image src={adminproject} alt={""} className="h-[18px]"/>
          <h1 className=" text-white ">Projects </h1>
        </Link>
        <Link href="/gallery"  className={`h-[65px] flex items-center hover:bg-neutral-600 cursor-pointer gap-2 pl-[65px] ${isActive("/gallery")}`}>
        <Image src={admingallery} alt={""} className="h-[18px]"/>
          <h1 className=" text-white ">Gallery </h1>
        </Link>
        <Link href="/blog"  className={`h-[65px] flex items-center hover:bg-neutral-600 cursor-pointer gap-2 pl-[65px] ${isActive("/blog")}`}>
        <Image src={adminblog} alt={""} className="h-[18px]"/>
          <h1 className=" text-white ">Blog </h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
