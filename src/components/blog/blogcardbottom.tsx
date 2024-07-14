import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props{
    source:string;
    title:string;
    description:string;
    link: string;
}

const BlogCardBottom : React.FC<Props>=({source,title,description, link})=>{
    return(
        <div className="col-span-2 pb-10">
            <Link href={link}>
            <div className="flex flex-col items-center">
                <Image src={source} height={325} width={600} className="w-[82vw] md:w-[43vw]" alt="blog-card-bottom-img"/>
            
            <div className="h-auto w-[82vw] md:w-[43vw] md:py-10 py-5 flex flex-col justify-center border-2">
                <p className="md:text-xl text-lg font-semibold px-5">{title}</p>
                <p className="md:text-sm p-5 hidden md:block">{description}</p>
            </div>
            </div>
            </Link>
        </div>
    )
}

export default BlogCardBottom;