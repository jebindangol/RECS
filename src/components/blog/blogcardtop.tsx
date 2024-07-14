import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    source: string;
    title: string;
    description: string;
    link: string;
}

const BlogCardTop: React.FC<Props> = ({ source, title, description, link }) => {
return (
    <div className="col-span-2 pb-10">
        <Link href={link}>
        <div className="flex flex-row justify-center md:justify-start">
            <Image
                src={source}
                alt="blog-card-top-img"
                height={343}
                width={260}
                className="h-[70vw] w-[32vw] md:h-auto md:w-[18vw]"
            />
            <div className="px-4 md:px-10 w-[50vw] md:w-[25vw] flex flex-col justify-center border-y-2 border-r-2">
                <p className="font-semibold text-sm md:text-lg pb-5 md:pb-0">{title}</p>
                <p className="text-sm py-5 hidden md:block">{description}</p>
                <Link href={link}>
                <div className="w-[100px] md:w-[180px] h-[30px] md:h-[50px] border border-gray-400 flex items-center justify-center">
                    <button 
                    className="font-medium text-xs md:text-sm text-gray-400">
                        READ MORE
                    </button>
                </div>
                </Link>
            </div>
        </div>
        </Link>
    </div>
);
};

export default BlogCardTop;
