import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BlogCard from "./blogcard";
import BlogCardBottom from "./blogcardbottom";
import BlogCardTop from "./blogcardtop";
import { BlogData } from "@/data/projectGrid";
interface Props {}
const slideUp: Variants = {
    offscreen: {
        y: 200,
        opacity: 0,
    },
    onscreen: {
        y: 0,
        opacity: 1,
        transition: {
            type: "tween",
            duration: 0.8,
            ease: "anticipate"
        }
    }
};

const BlogItem: React.FC<{ blog: typeof BlogData[0] }> = ({ blog }) => {
    const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
    const MotionDiv = motion.div;

    let content;
    if (blog.type === "card") {
        content = <BlogCard source={blog.source} title={blog.title} description={blog.description} link={`/blog/${blog.id}?title=${encodeURIComponent(blog.title)}`} />;
    } else if (blog.type === "top" || blog.type === "bottom") {
        content = blog.type === "top"
            ? <BlogCardTop source={blog.source} title={blog.title} description={blog.description} link={`/blog/${blog.id}?title=${encodeURIComponent(blog.title)}`} />
            : <BlogCardBottom source={blog.source} title={blog.title} description={blog.description} link={`/blog/${blog.id}?title=${encodeURIComponent(blog.title)}`} />;
    }

    return (
        <div className={(blog.type === "top" || blog.type === "bottom") ? "col-span-2" : ""}>
            <MotionDiv ref={ref} initial="offscreen" animate={inView ? "onscreen" : "offscreen"} variants={slideUp}>
                {content}
            </MotionDiv>
        </div>
    );
};


const BlogPage: React.FC<Props> = () => {
    const [numToShow, setNumToShow] = useState(10);
    const handleViewMore = () => {
        const increment = 3;
        setNumToShow(numToShow + increment);
    };

    const handleViewLess = () => {
        const decrement = 3;
        setNumToShow(numToShow - decrement);
    };
    return (
        <>
            <div className="bg-transparent h-[40vh] md:h-[70vh]"></div>
            <div className="relative w-full bg-white z-50">
            <div className="flex flex-col px-0 md:px-20 py-0 md:py-10">
            <h1 className="text-2xl font-bold  md:hidden uppercase items-start  mt-10 ml-12">News & Article</h1>
            <div className="flex flex-col items-center mt-10">
                <div className="md:grid flex flex-col md:grid-cols-4 gap-5">
                    {BlogData?.slice(0, 10).map((blog, index) => (
                        <BlogItem key={index} blog={blog} />
                    ))}
                </div>
            </div>
            {/*  */}
            {/*  */}
            {/* Load more button */}
            <div className="flex justify-center py-20">
                <div className="flex items-center justify-center border border-gray-500 w-[310px] h-[51px]">
                    {numToShow < BlogData?.length ? (
                        <button 
                            onClick={handleViewMore} 
                            className="font-medium text-gray-500 uppercase">
                            Load More
                        </button>
                    ) : (
                    <button 
                    onClick={handleViewLess}
                    className="font-medium text-gray-500 uppercase">
                        Load Less
                    </button>
                    )}
                </div>
            </div>
            {/* end of load more button */}
        </div>
        </div>
        </>
    );
}

export default BlogPage;
