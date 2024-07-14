import React from "react";
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
import Image from "next/image";
import BlogCard from "./blogcard";
import { useRouter } from "next/router";
interface BlogDeatailprops {}
const blogData = [
    {
        id: 1,
        type: "card",
        source: "/img/project/blogc.png",
        title: "The new rules for the setback will be in act from Ashoj 01, 2080",
        description: "Lorem ipsum dolor sit amet consectetur. Vitae habitasse nulla quis lorem aliquam sit turpis. Luctus sed ac suspendisse urna felis urna sit scelerisque ante."
    },
    {
        id: 2,
        type: "card",
        source: "/img/project/blogc.png",
        title: "The future of Kathmandu",
        description: "Lorem ipsum dolor sit amet consectetur. Vitae habitasse nulla quis lorem aliquam sit turpis. Luctus sed ac suspendisse urna felis urna sit scelerisque ante."
    },

]
const BlogDetail:React.FC <BlogDeatailprops> = () => {
    const router = useRouter();
    const title = router.query.title;
    return(
        <>
            <div className="bg-transparent h-[60vh]"></div>
            <div className="relative z-50 bg-white">
                <div className="flex flex-col md:flex-row md:justify-center gap-20 p-10 mt-10 md:px-[100px]">
                    {/*  */}
                    {/*  */}
                    {/* main article part  */}
                    <div className="md:w-[100vw] w-full">
                        <h1 className="text-2xl md:text-3xl md:w-[50vw] w-full font-semibold">{title}</h1>
                        <p className="text-medium text-gray-400 py-5">Published on :  Sep 6 2023</p>
                        <div className="flex flex-row gap-5">
                            Share: 
                            <div className="flex flex-row gap-5">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaInstagram />
                            </div>
                        </div>
                        <div className="py-10">
                        <p className="pb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                            been the industrys standard dummy text ever since the 1500s, when an unknown printer took 
                            a galley of type and scrambled it to make a type specimen book. It has survived not only 
                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className="pb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                            been the industrys standard dummy text ever since the 1500s, when an unknown printer took 
                            a galley of type and scrambled it to make a type specimen book. It has survived not only 
                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className="pb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                            been the industrys standard dummy text ever since the 1500s, when an unknown printer took 
                            a galley of type and scrambled it to make a type specimen book. It has survived not only 
                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div className="w-full h-auto pb-5">
                            <Image src = "/blogcover.png" alt="blogcover" width={1000} height={700}  className="h-[30vw] md:h-[20vw] "/>
                        </div>
                        <p className="pb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                            been the industrys standard dummy text ever since the 1500s, when an unknown printer took 
                            a galley of type and scrambled it to make a type specimen book. It has survived not only 
                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <p className="pb-5">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has 
                            been the industrys standard dummy text ever since the 1500s, when an unknown printer took 
                            a galley of type and scrambled it to make a type specimen book. It has survived not only 
                            five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <div className="flex flex-row gap-5">
                            Share: 
                            <div className="flex flex-row gap-5">
                                <FaFacebookF />
                                <FaTwitter />
                                <FaInstagram />
                            </div>
                        </div>
                        </div>
                    </div>
                    {/* end of main article */}
                    {/*  */}
                    {/*  */}
            {/* suggestions  */}
                    <div className="flex flex-col items-center md:items-start md:w-[18vw]">
                        <h1 className="text-2xl font-semibold pb-10">Suggestions</h1>
                        <div>
                        {blogData.map((blog, index) => {
                            if (blog.type === "card") {
                                return <BlogCard key={index} source={blog.source} title={blog.title} description={blog.description} link = {`/blog/${blog.id}?title=${encodeURIComponent(blog.title)}`} />;
                            } 
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BlogDetail;