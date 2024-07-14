import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GalleryGrid } from "../../data/projectGrid";
import { motion, Variants } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TfiAngleLeft, TfiAngleRight, TfiClose } from "react-icons/tfi";
import Modal from "react-modal";

interface GalleryProps {
  imageUrl: string;
  isOpen: boolean;
  onClose: () => void;
}

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    transform: "translate(-50%, -50%)",
    overflow: "hidden",
    width: "900px", // Width of the square
    height: "700px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(20,20,20,.7)", // This sets 50% transparency to the black background
    zIndex: 50,
  },
};

const slideUp: Variants = {
  offscreen: {
    y: 200,
  },
  onscreen: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.8,
    },
  },
};
const GalleryItem: React.FC<{
  data: (typeof GalleryGrid)[0];
  index: number;
}> = ({ data, index }) => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [isImageOpen, setImageOpen] = useState(false);
  const [clickedImage, setClickedImage] = useState<string | null>(null);

  const handleImageClick = (imageUrl: string) => {
    setClickedImage(imageUrl);
    setImageOpen(!isImageOpen);
  };
  const onCloseModal = () => {
    console.log("Closing modal");
    setImageOpen(false);
  };
  const ImageModal: React.FC<GalleryProps & { currentIndex: number }> = ({
    isOpen,
    onClose,
    currentIndex,
  }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);

    const handlePrev = () => {
      if (currentImageIndex > 0) {
        setCurrentImageIndex(currentImageIndex - 1);
      }
    };

    const handleNext = () => {
      if (currentImageIndex < GalleryGrid.length - 1) {
        setCurrentImageIndex(currentImageIndex + 1);
      }
    };
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
            className="absolute top-6 right-10 text-white text-2xl focus:outline-none"
          >
            <TfiClose />
          </button>
          <div className="w-full h-full">
            <div className="text-white py-4 md:px-20 px-8 uppercase">
              Gallery Images
            </div>
            <div className="flex items-center justify-center relative flex-col">
              {GalleryGrid[currentImageIndex].img.endsWith(".mp4") ? (
                <video
                  src={GalleryGrid[currentImageIndex].img}
                  autoPlay
                  loop
                  muted
                  className="max-w-[81%] h-auto"
                ></video>
              ) : (
                <img
                  src={GalleryGrid[currentImageIndex].img}
                  alt="Product"
                  className="max-w-[81%] h-auto"
                />
              )}
              <button
                onClick={handlePrev}
                className="absolute left-[-30px] top-1/2 transform -translate-y-1/2 text-white text-4xl focus:outline-none"
              >
                <TfiAngleLeft />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-[-30px] top-1/2 transform -translate-y-1/2 text-white text-4xl focus:outline-none"
              >
                <TfiAngleRight />
              </button>
            </div>
            <div className="text-center p-4 text-white">
              {currentImageIndex + 1} of {GalleryGrid.length}
            </div>
          </div>
        </Modal>
      </div>
    );
  };

  return (
    <motion.div
      ref={ref}
      initial="offscreen"
      animate={inView ? "onscreen" : "offscreen"}
      variants={slideUp}
      className={
        (index === 10 || index === 20) && data.img.endsWith(".mp4")
          ? "col-span-2"
          : ""
      }
    >
      {data.img.endsWith(".mp4") ? (
        <div>
          <video
            src={data.img}
            autoPlay
            loop
            muted
            className="md:h-[210px] h-[150px] md:w-[515px] object-cover"
            onClick={() => handleImageClick(data.img)}
          />
          {clickedImage && (
            <ImageModal
              imageUrl={clickedImage}
              isOpen={isImageOpen}
              onClose={onCloseModal}
              currentIndex={index}
            />
          )}
        </div>
      ) : (
        <div>
          <Image
            src={data.img}
            height={200}
            width={200}
            alt="img"
            className="md:h-[210px] h-[150px] w-[250px]"
            onClick={() => handleImageClick(data.img)}
          />
          {clickedImage && (
            <ImageModal
              imageUrl={clickedImage}
              isOpen={isImageOpen}
              onClose={onCloseModal}
              currentIndex={index}
            />
          )}
        </div>
      )}
    </motion.div>
  );
};
const Gallerypage: React.FC<GalleryProps> = ({}) => {
  const [numToShow, setNumToShow] = useState(14);

  const handleViewMore = () => {
    const increment = 5;
    setNumToShow(numToShow + increment);
  };

  const totalItems = GalleryGrid?.length || 0;
  const isShowButtonVisible = numToShow < totalItems;

  return (
    <>
      <div className="bg-transparent h-[40vh] md:h-[50vh] "></div>
      <div className="relative w-full z-50 bg-white">
        {/* Project Category view*/}
        <div className="flex justify-center md:gap-5 gap-2 uppercase pt-10 md:px-0 px-5">
          <div className="flex md:gap-5 gap-2">
            <Link href="">
              <span className="font-bold md:text-[16px] text-[13px]">All</span>
            </Link>
            <p>|</p>
          </div>
          <div className="flex md:gap-5 gap-2">
            <Link href="">
              <span className="uppercase md:text-[16px] text-[13px]">
                Modern
              </span>
            </Link>
            <p>|</p>
          </div>
          <div className="flex md:gap-5 gap-2">
            <Link href="">
              <span className="uppercase md:text-[16px] text-[13px]">
                neo-classsical
              </span>
            </Link>
            <p>|</p>
          </div>
          <div className="">
            <Link href="">
              <span className="uppercase md:text-[16px] text-[13px]">
                interior
              </span>
            </Link>
          </div>
        </div>

        <div>
          <div className="flex justify-center pt-10">
            <div className="grid md:grid-cols-5 grid-cols-3 md:gap-4">
              {GalleryGrid?.slice(0, numToShow).map((data, index) => (
                <GalleryItem key={data.id} data={data} index={index} />
              ))}
            </div>
          </div>

          <div className="flex justify-center py-14">
            {isShowButtonVisible && (
              <div
                onClick={handleViewMore}
                className="flex items-center hover:cursor-pointer justify-center border border-gray-500 w-[310px] h-[51px]"
              >
                <button className="font-medium text-gray-500 uppercase">
                  More
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
export default Gallerypage;
