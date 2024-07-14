import Link from "next/link";
import React from "react";

interface CTAProps {
    link:string;
}
const HeroCTA: React.FC<CTAProps> = ({link}) => {
    return (
        <Link href={link} >
            <button className="md:text-gray-200 border border-white py-[8px] text-[16px]  w-[180px] md:bg-black text-sm font-thin bg-white text-black">
                EXPLORE
            </button>
        </Link>
    )
}

export default HeroCTA