import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ImageGrid } from "../../data/projectGrid";

const Gallerytype = () => {
  const [numToShow, setNumToShow] = useState(10);

  const handleViewMore = () => {
    const increment = 5;
    setNumToShow(numToShow + increment);
  };

  const handleViewLess = () => {
    const decrement = 5;
    setNumToShow(numToShow - decrement);
  };
  
  return (
    <div>
      {/* Project Category view*/}
      <div className="flex justify-center gap-5 uppercase pt-10">
        <div className="flex gap-5">
          <Link href="">
            <span>All</span>
          </Link>
          <p>|</p>
        </div>
        <div className="flex gap-5">
          <Link href="">
            <span className="uppercase">Images</span>
          </Link>
          <p>|</p>
        </div>
        <div className="flex gap-5">
          <Link href="">
            <span className="uppercase">videos</span>
          </Link>
          <p>|</p>
        </div>
        <div className="flex gap-5">
          <Link href="">
            <span className="uppercase">social media</span>
          </Link>
          
        </div>
      </div>

      <div>
        <div className="flex justify-center pt-10">
          <div className="grid grid-cols-5 gap-8">
            {ImageGrid?.slice(0, numToShow).map((data, index) => (
            <div key={index}>
              <Image 
              src={data.img} 
              height={200} 
              width={200} 
              alt="img" 
              className="h-[210px] w-[200px]"
            />
            </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center py-14">
          {numToShow < ImageGrid?.length ? (
            <button
              onClick={handleViewMore}
              className="border px-12 py-2 font-semibold text-white bg-black"
            >
              View More
            </button>
          ) : (
            <button
              onClick={handleViewLess}
              className="border px-12 py-2 font-semibold text-white bg-black"
            >
              View Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallerytype;
