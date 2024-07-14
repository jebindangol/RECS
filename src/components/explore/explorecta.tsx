import React from "react";
import Image from "next/image";
import logo from "../../../public/quotaion.svg"

interface Props {}

const ExploreCTA: React.FC<Props> = ({})=>{
    return(
        <div className="flex md:gap-3 gap-2">
            <div className="md:h-[52px] h-[40px] text-end w-[100px] md:w-[135px] md:text-lg text-[13px] font-semibold ">
            Get a
            QUOTATION
            </div>
            <div>
                <Image src={logo} width={50} height={60} alt="image" className="md:h-[50px] md:w-[40px] h-[40px] w-[35px]"/>
            </div>
        </div>
    )
}

export default ExploreCTA;