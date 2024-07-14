import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

interface Props{
    source: string;
    title: string;
    description: string;
    link: string;
    land: string;
    plinth: string;
    specs: string;
}

const ProjectList : React.FC<Props> = ({source, title, description, link, land, plinth, specs}) => {

    const [refTitle, inViewTitle] = useInView({ triggerOnce: true, rootMargin: '-100px 0px' });
    const [refDescription, inViewDescription] = useInView({ triggerOnce: true, rootMargin: '-100px 0px' });
    const [refLand, inViewLand] = useInView({ triggerOnce: true, rootMargin: '-100px 0px' });
    const [refView, inViewView] = useInView({ triggerOnce: true, rootMargin: '-110px 0px' });

    const [hoveredImage, setHoveredImage] = useState<string | null>(null);
    const [zoomOrigin, setZoomOrigin] = useState({ x: 0, y: 0 });
    const [isHovered, setIsHovered] = useState(false);

    const slideUp = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 }
    };

    const handleHoverImage = (image: string) => {
        setHoveredImage(image);
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
        const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
        const offsetX = (e.clientX - left) / width;
        const offsetY = (e.clientY - top) / height;
        setZoomOrigin({ x: offsetX, y: offsetY });
    };
    
    const handleMouseLeave = () => {
        setIsHovered(false);
        setZoomOrigin({ x: 0, y: 0 });
    };

    const imageStyles = {
        transform: isHovered ? 'scale(1.2)' : 'scale(1)',
        transformOrigin: `${zoomOrigin.x * 100}% ${zoomOrigin.y * 100}%`,
        transition: 'transform 0.3s',
        cursor: isHovered ? "zoom-in" : "default"
    };


    return (
        <div className="col-span-2">
            <div className="flex flex-col md:flex-row">
                <div className="overflow-hidden">
                <Image 
                src={source} 
                alt="blog-card-top-img" 
                height={663} 
                width={644}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                onMouseEnter={() => {
                    setIsHovered(true);
                    handleHoverImage(source);
                }}
                style={imageStyles}
                />
                </div>
                <div className="px-0 md:px-10 w-1/1.5 md:w-[480px] h-auto flex flex-col justify-center">
                    <motion.p 
                        className="font-semibold text-2xl md:text-4xl pt-7"
                        initial="hidden"
                        animate={inViewTitle ? 'visible' : 'hidden'}
                        variants={slideUp}
                        transition={{ duration: 0.5 }}
                        ref={refTitle}
                    >
                        {title}
                    </motion.p>
                    <motion.p 
                        className="text-sm font-light py-7"
                        initial="hidden"
                        animate={inViewDescription ? 'visible' : 'hidden'}
                        variants={slideUp}
                        transition={{ duration: 0.7 }}
                        ref={refDescription}
                    >
                        {description}
                    </motion.p>
                    <motion.p 
                        initial="hidden"
                        animate={inViewLand ? 'visible' : 'hidden'}
                        variants={slideUp}
                        transition={{ duration: 0.9 }}
                        ref={refLand}
                    >
                        Land Area: {land}<br/>
                        Plinth Area: {plinth}<br/>
                        Specs: {specs}
                    </motion.p>
                    
                    <motion.div 
                        className="py-10"
                        initial="hidden"
                        animate={inViewView ? 'visible' : 'hidden'}
                        variants={slideUp}
                        transition={{ duration: 1.1 }}
                        ref={refView}
                    >
                        <Link href={link}>
                            <div className="w-[210px] h-[51px] bg-white flex items-center justify-center drop-shadow-lg">
                                <button className="font-medium sm:text-xs md:text-sm text-gray-400">
                                    VIEW
                                </button>
                            </div>
                        </Link>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ProjectList;
