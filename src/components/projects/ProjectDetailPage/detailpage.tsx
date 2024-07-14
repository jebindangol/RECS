import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { LivingImage } from "@/data/projectGrid";
import { useRouter } from "next/router";
import { motion, Variants } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import {TfiAngleLeft, TfiAngleRight, TfiClose} from 'react-icons/tfi'
import Modal from "react-modal";


interface Props {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
}

const slideUp: Variants = {
  offscreen: {
    y: 200
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
      ease: "anticipate"
    }
  }
};
Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    transform: 'translate(-50%, -50%)',
    overflow: 'hidden',
    width: '700px', // Width of the square
    height: '700px', 
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    border: 'none',
  },
  overlay: {
    backgroundColor: 'rgba(20,20,20,0.7)', // This sets 50% transparency to the black background
    zIndex: 50,
  },
};


const ProjectDetailpage: React.FC<Props> = () => {
  const router = useRouter();
  const title = router.query.title;
  const [aboutRef, aboutInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [floorRef, floorInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [aboutImage, aboutImageView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [blueprintRef, blueprintInView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [blueprintImage, blueprintImageView] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refTitle, inViewTitle] = useInView({ threshold: 0.2, triggerOnce: true });
  const [reffloor, inViewFloor] = useInView({ threshold: 0.2, triggerOnce: true });
  const [refMore, inViewMore] = useInView({ threshold: 0.2, triggerOnce: true });
  const [isImageOpen, setImageOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState<string | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);


  const MotionDiv = motion.div;
  const slide = {
    hidden: { y: 20, opacity: 0 },
      visible: { y: 0, opacity: 1 }
  };
  const handleImageClick = (imageUrl: string) => {
    setClickedImage(imageUrl);
    setImageOpen(!isImageOpen);
  };
  const onCloseModal = () => {
    console.log("Closing modal");
    setImageOpen(false);
  };

  const ImageModal: React.FC<Props> = ({ isOpen, onClose, imageUrl, currentIndex, setCurrentIndex }) => {
  //   const handlePrev = () => {
  //     if (currentIndex > 0) {
  //         setCurrentIndex(currentIndex - 1);
  //     }
  // };

  // const handleNext = () => {
  //     if (currentIndex < length - 1) {
  //         setCurrentIndex(currentIndex + 1);
  //     }
  // };
    return (
      <div className="relative">
            <Modal
                isOpen={isOpen}
                onRequestClose={onClose}
                contentLabel="Image Modal"
                style={customStyles}
            >
              <button 
                onClick={onClose} 
                className="absolute top-6 right-10 text-white text-2xl focus:outline-none">
                  <TfiClose />
              </button>
                <div className="w-full h-full">
                <div className="text-white py-4 uppercase">Project Details Images</div>
                    <div className="flex items-center justify-center relative flex-col">
                    {imageUrl && (
                      <img src={imageUrl} alt="Product" className="w-full h-full" />
                    )}
                        {/* <button onClick={handlePrev} className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 text-white text-4xl focus:outline-none">
                            <TfiAngleLeft />
                        </button>
                        <button onClick={handleNext} className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-white text-4xl focus:outline-none">
                            <TfiAngleRight />
                        </button> */}
                    </div>
                </div>
            </Modal>
        </div>
    );
  };
  return (
    <>
    <div className="bg-transparent h-[40vh] md:h-[70vh] "></div>
    <div className="relative bg-white w-full z-50 pb-10">
      {/*  */}
      {/*  */}
      {/* category  */}
      <div className="p-10">
        <div className="flex justify-center gap-3 uppercase text-base md:text-xl">
          <div className="flex gap-3">
            <Link href="/project">
              <span className="font-bold">PROJECTS</span>
            </Link>
            <p>|</p>
          </div>
          <div className="flex gap-3">
            <Link href="/">
              <span className="line-clamp-1">{title}</span>
            </Link>
          </div>
        </div>
      </div>
      {/* //
      // */}
      {/* main div */}
      <div className=" min-h-screen px-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid">
            {/*  */}
            {/*  */}
            {/* about  */}
            <div className="col-span-2 pb-20">
              <MotionDiv 
                ref={aboutRef} 
                initial="offscreen" 
                animate={aboutInView ? 'onscreen' : 'offscreen'} 
                variants={slideUp} 
                className="flex flex-col md:flex-row items-start"
              >
                <div className="flex-none">
                  <Image 
                  src="/img2.png" 
                  alt="about" 
                  width={500} 
                  height={600} 
                  className="w-[80vw] md:w-[30vw]"
                  onClick={() => handleImageClick('/img2.png')}
                  />
                  {clickedImage && 
                    <ImageModal 
                    imageUrl={clickedImage} 
                    isOpen={isImageOpen} 
                    onClose={onCloseModal} 
                    currentIndex={currentImageIndex}
                    setCurrentIndex={setCurrentImageIndex} 
                    />
                  }
                </div>
                <div className="md:p-10 pt-5 w-[80vw] md:h-[60vh]">
                  <div className="md:pl-5 space-y-5 md:w-[30vw] md:h-[55vh]">
                    <h1 className="text-2xl md:text-4xl font-semibold uppercase">ABOUT</h1>
                    <p className=" text-xs md:text-base">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                      accusantium vitae necessitatibus ut, deserunt maxime eaque
                      velit debitis facilis.
                    </p>
                    <p className=" text-xs md:text-base line-clamp-2">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                      accusantium vitae necessitatibus ut, deserunt maxime eaque
                      velit debitis facilis.
                    </p>
                    <div className="text-xs md:text-base">
                      <h5>Land Area : 5 Aana</h5>
                      <h5>Plinth Area : 600 Sq. Ft.</h5>
                      <h5>Specs :4 BHK</h5>
                    </div>
                  </div>
                </div>
              </MotionDiv>
              <MotionDiv 
                ref={aboutImage} 
                initial="offscreen" 
                animate={aboutImageView ? 'onscreen' : 'offscreen'} 
                variants={slideUp} 
                className="flex flex-row gap-3 md:gap-10 pt-10 overflow-x-auto md:overflow-hidden">
                <div className="flex-none">
                  <Image 
                  src="/5.png" 
                  alt="img" 
                  width={500} 
                  height={600} 
                  className="w-[70vw] md:w-[30vw] md:h-[60vh]" 
                  onClick={() => handleImageClick('/5.png')}
                  />
                  {clickedImage && 
                    <ImageModal 
                    imageUrl={clickedImage} 
                    isOpen={isImageOpen} 
                    onClose={onCloseModal}  
                    currentIndex={currentImageIndex}
                    setCurrentIndex={setCurrentImageIndex}  
                    />
                  }
                </div>
                <div className="flex-none">
                  <Image 
                  src="/5.png" 
                  alt="img"
                  width={500} 
                  height={600} 
                  className="w-[70vw] md:w-[30vw] md:h-[60vh]"  
                  onClick={() => handleImageClick('/5.png')}
                  />
                  {clickedImage && 
                    <ImageModal 
                    imageUrl={clickedImage} 
                    isOpen={isImageOpen} 
                    onClose={onCloseModal}  
                    currentIndex={currentImageIndex}
                    setCurrentIndex={setCurrentImageIndex}  
                    />
                  }                   
                </div>
              </MotionDiv>
            </div>
            {/* end of about  */}
            {/*  */}
            {/*  */}
            {/* BLUEPRINT  */}
            <div className="pb-20">
              <MotionDiv 
                ref={blueprintRef} 
                initial="offscreen" 
                animate={blueprintInView ? 'onscreen' : 'offscreen'} 
                variants={slideUp} 
                className="flex flex-col items-center md:flex-row drop-shadow-md bg-white"
              >
                <div className="flex-none">
                  <Image 
                  src="/6.png" 
                  alt="blueprint" 
                  width={500} 
                  height={600} 
                  className="w-[80vw] md:w-[30vw] "  
                  onClick={() => handleImageClick('/6.png')}
                  />
                  {clickedImage && 
                    <ImageModal 
                    imageUrl={clickedImage} 
                    isOpen={isImageOpen} 
                    onClose={onCloseModal}  
                    currentIndex={currentImageIndex}
                    setCurrentIndex={setCurrentImageIndex}  
                    />
                  }                </div>
                <div className="md:p-10 pt-5 w-[80vw] md:w-[46vw] md:h-[60vh]">
                  <div className="md:pl-5 space-y-5 md:w-[25vw] md:h-[55vh]">
                    <h1 className="text-2xl md:text-4xl font-semibold uppercase">Blueprint</h1>
                    <p className=" text-xs md:text-base">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                      accusantium vitae necessitatibus ut, deserunt maxime eaque
                      velit debitis facilis. Alias, totam? Accusantium ea ratione
                      odit.
                    </p>
                    <div className=" text-xs md:text-base">
                      <h5>Land Area : 5 Aana</h5>
                      <h5>Plinth Area : 600 Sq. Ft.</h5>
                      <h5>Specs :4 BHK</h5>
                    </div>
                  </div>
                </div>
              </MotionDiv>
              <MotionDiv 
                ref={blueprintImage} 
                initial="offscreen" 
                animate={blueprintImageView ? 'onscreen' : 'offscreen'} 
                variants={slideUp} 
                className="flex flex-row gap-3 md:gap-10 pt-10 overflow-x-auto md:overflow-hidden"
              >
                <div className="flex-none">
                  <Image 
                  src= "/7.png"  
                  alt="img" 
                  width={500} 
                  height={600} 
                  className="w-[70vw] md:w-[30vw] md:h-[60vh] " 
                  onClick={() => handleImageClick('/7.png')}
                  />
                  {clickedImage && 
                    <ImageModal 
                    imageUrl={clickedImage} 
                    isOpen={isImageOpen} 
                    onClose={onCloseModal}  
                    currentIndex={currentImageIndex}
                    setCurrentIndex={setCurrentImageIndex}  
                    />
                  }                </div>
                <div className="flex-none">
                  <Image 
                  src="/8.png" 
                  alt="img"
                  width={500} 
                  height={600} 
                  className="w-[70vw] md:w-[30vw] md:h-[60vh] "
                  onClick={() => handleImageClick('/8.png')}
                  />
                  {clickedImage && 
                    <ImageModal 
                    imageUrl={clickedImage} 
                    isOpen={isImageOpen} 
                    onClose={onCloseModal}  
                    currentIndex={currentImageIndex}
                    setCurrentIndex={setCurrentImageIndex}  
                    />
                  }                </div>
              </MotionDiv>
            </div>
            {/* end of blueprint  */}
            {/*  */}
            {/*  */}
            {/* more details  */}
            <div className="pb-20 col-span-2">
              <div className="md:w-[600px] w-[300px] flex flex-col gap-5">
                <motion.p 
                  initial="hidden"
                  animate={inViewTitle ? 'visible' : 'hidden'}
                  variants={slide}
                  transition={{ duration: 0.7 }}
                  ref={refTitle} 
                  className="text-2xl md:text-4xl font-semibold uppercase"
                >
                  More Details
                </motion.p>
                <motion.p 
                  initial="hidden"
                  animate={inViewMore ? 'visible' : 'hidden'}
                  variants={slide}
                  transition={{ duration: 1.1 }}
                  ref={refMore} 
                >
                  Lorem ipsum dolor s a Lorem, ipsum dolor sit amet consectetur 
                  adipisicing elit. Iusto soluta saepe commodi cupiditate ex atque dolore in velit mollitia 
                  ut illum natus quod sapiente consequuntur est asperiores, quas nobis fugiat, voluptas numquam 
                  facere. Beatae earum quam, fugiat ut dolore tempora?
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* end of more details  */}
            {/*  */}
            {/*  */}
            {/* video  */}
            <div>
              <video 
              autoPlay 
              loop 
              muted>
                <source src="/Homedesign.mp4" type="video/mp4" />
              </video>
            </div>
            {/* end of video  */}
      {/*  */}
      {/*  */}
      {/* floor plan  */}
      <div className="p-10">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid md:grid-cols-2">
            <div className="col-span-2">
            <motion.p 
              initial="hidden"
              animate={inViewFloor ? 'visible' : 'hidden'}
              variants={slide}
              transition={{ duration: 0.7 }}
              ref={reffloor} 
              className="text-2xl md:text-4xl font-semibold uppercase py-5 md:py-10"
            >
              Floor Plan
            </motion.p>
                <MotionDiv 
                  ref={floorRef} 
                  initial="offscreen" 
                  animate={floorInView ? 'onscreen' : 'offscreen'} 
                  variants={slideUp} 
                  className="flex flex-col md:flex-row"
                >
                  <div className="flex flex-col md:flex-shrink-0">
                    <div>
                    <Image 
                    src="/44.png" 
                    alt="about" 
                    width={500} 
                    height={700} 
                    className="w-[80vw] md:w-[35vw] md:h-[50vh]"  
                    onClick={() => handleImageClick('/44.png')}
                    />
                    {clickedImage && 
                      <ImageModal 
                      imageUrl={clickedImage} 
                      isOpen={isImageOpen} 
                      onClose={onCloseModal}  
                      currentIndex={currentImageIndex}
                      setCurrentIndex={setCurrentImageIndex}  
                      />
                    }                   
                  </div>
                    <div className="flex flex-row gap-2 pt-5 overflow-scroll md:overflow-hidden">
                      {LivingImage.map((data,index)=> (
                        <div key={index}>
                          <Image 
                            src={data.img} 
                            width={64} 
                            height={64} 
                            alt= "floor plan" 
                            className="w-[30vw] h-[7vh] md:w-[4.5vw] md:h-[9vh]"
                            onClick={() => handleImageClick(data.img)}
                            />
                          {clickedImage && 
                            <ImageModal 
                            imageUrl={clickedImage} 
                            isOpen={isImageOpen} 
                            onClose={onCloseModal}  
                            currentIndex={currentImageIndex}
                            setCurrentIndex={setCurrentImageIndex}  
                            />
                          }                        
                  </div>
                      ))}
                    </div>
                  </div>
                  <div className="md:p-10 pt-5 w-[80vw] md:w-[46vw] md:h-[60vh]">
                    <div className="md:pl-5 space-y-5 md:w-[25vw] md:h-[55vh]">
                      <h1 className="text-xl md:text-2xl font-semibold uppercase">Living Room</h1>
                      <p className="text-xs md:text-sm">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. A
                        accusantium vitae necessitatibus ut, deserunt maxime eaque
                        velit debitis facilis. Alias, totam? Accusantium ea ratione
                        odit.
                      </p>
                      <div className="flex flex-col gap-2 md:pt-5 pt-0">
                        <p className="text-xs md:text-sm">o Lorem, ipsum dolor.</p>
                        <p className="text-xs md:text-sm">o Lorem, ipsum dolor.</p>
                        <p className="text-xs md:text-sm">o Lorem, ipsum dolor.</p>
                      </div>
                    </div>
                  </div>
                </MotionDiv>
              </div>
            </div>
          </div>
        </div>
        {/* end of floor plan  */}
        {/*  */}
    </div>
    </>
  );
};

export default ProjectDetailpage;
