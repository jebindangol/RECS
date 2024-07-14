import React, { useState } from "react";
import Image from "next/image";
import ExploreCard from "./explorecard";
import Link from "next/link";
import ExploreCTA from "./explorecta";
import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

interface Props {}

const Explore: React.FC<Props> = ({}) => {
  const router = useRouter();
  const [selectedCard, setSelectedCard] = useState<string | null>(null);

  const handleCardClick = (link: string, title: string) => {
    setSelectedCard(title);
    setTimeout(() => {
      router.push(link);
    }, 100);
  };

  return (
    <div className="h-screen w-screen relative md:space-y-0 space-y-3 container">
      <div className="md:px-[40px] md:pb-[35px] md:mb-0 mb-8 flex md:justify-between justify-center">
        <div className="h-[18vh] px-6 pt-5 md:w-[13vw] bg-white">
          <Link href="/">
            <Image
              alt="logo"
              src="./recshomelogo.svg"
              width={20}
              height={20}
              className="h-[17vh] md:w-[20vw] w-[40vw] pb-2"
            />
          </Link>
        </div>
        <div className="font-bold text-xl md:flex hidden justify-center items-center">
          ABOUT US
        </div>
      </div>
        <div className="">
          <AnimatePresence mode="wait">
          <div className="md:flex md:flex-row flex flex-col md:gap-2 gap-5 justify-center items-center w-[100vw]">
          <motion.div
            initial={{ scale: 1 }}
            animate={selectedCard === 'PROJECTS' ? { scaleX: 20, scaleY: 10, opacity:0, zIndex: 1 } 
            : { scaleX: 1, scaleY: 1, opacity:1, zIndex: 0 }}
            transition={{ duration: 1 }}
            style={{ transformOrigin: "center center" }}
          >
            <ExploreCard
              source="/img/project/projects.png"
              title="PROJECTS"
              link="/project"
              onClick={() => handleCardClick('/project', 'PROJECTS')}
            />
          </motion.div>
            <motion.div 
              initial={{ scale: 1 }}
              animate={selectedCard === 'SERVICES' ? { scaleX: 20, scaleY: 20, x: '0%', opacity:0, zIndex: 1 } 
              : { scaleX: 1, scaleY: 1, opacity:1, zIndex: 0 }}
              transition={{ duration: 1 }}
              style={{ transformOrigin: "center center" }}
            >
              <ExploreCard
                  source="/img/project/services.png"
                  title="SERVICES"
                  link="/service"
                  onClick={() => handleCardClick('/service', 'SERVICES')}
              />
            </motion.div>
            <motion.div 
              initial={{ scale: 1 }}
              animate={selectedCard === 'GALLERY' ? { scaleX: 20, scaleY: 20, x: '0%', opacity:0, zIndex: 1 } 
              : { scaleX: 1, scaleY: 1, opacity:1, zIndex: 0 }}
              transition={{ duration: 1 }}
              style={{ transformOrigin: "center center" }}
            >
              <ExploreCard
                  source="/img/project/gallery.png"
                  title="GALLERY"
                  link="/gallery"
                  onClick={() => handleCardClick('/gallery', 'GALLERY')}
              />
            </motion.div>
            <motion.div 
              initial={{ scale: 1 }}
              animate={selectedCard === 'BLOG'? { scaleX: 20, scaleY: 20, x: '0%', opacity:0, zIndex: 1 } 
              : { scaleX: 1, scaleY: 1, opacity:1, zIndex: 0 }}
              transition={{ duration: 1 }}
              style={{ transformOrigin: "center center" }}
            >
              <ExploreCard
                  source="/img/project/blog.png"
                  title="BLOG"
                  link="/blog"
                  onClick={() => handleCardClick('/blog', 'BLOG')}
              />
            </motion.div>
            </div>
          </AnimatePresence>
        </div>
        <div className="absolute bottom-0 md:bottom-5 md:right-[40px] right-6">
          <ExploreCTA />
        </div>
        <div className="font-medium text-sm flex md:hidden items-center pt-4 pl-5">
          ABOUT US
        </div>
      </div>
  );
};

export default Explore;

