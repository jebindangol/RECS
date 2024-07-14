import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
    source: string;
    title: string;
    description: string;
    link: string;
}

const BlogCard: React.FC<Props> = ({ source, title, description, link }) => {
    return (
        <div className="mb-10">
            <Link href={link}>
                <div>
                    <Image 
                    src={source} 
                    height={343} 
                    width={270} 
                    alt="blog-card-img" 
                    className="w-[81vw]" 
                    />
                </div>
                <div className="w-[80vw] md:w-[20vw] ">
                    <div className="text-lg font-semibold py-5">{title}</div>
                    <div className="text-sm">{description}</div>
                </div>
                <div className="font-semibold pt-5 block md:hidden">
                    <Link href= {link}>Read More...</Link>
                </div>
            </Link>
        </div>
    );
};

export default BlogCard;
