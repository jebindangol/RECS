import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  source: string;
  title: string;
  link:string;
  onClick?: () => void;
}

const ExploreCard: React.FC<Props> = ({ source, title, link,onClick }) => {
  return (
    <div className="md:p-2" onClick={onClick}>
      <Link href={link} className="" >
        <div className="md:h-[50vh] h-[15vh] w-[70vw] lg:[100vw] md:w-[15vw] shadow-md flex md:flex-col md:gap-0 gap-10 bg-white rounded-sm hover:shadow-lg hover:scale-110">
          <div className="md:h-[140vh] h-[15vh] w-[25vw] md:w-[18vw] ">
            <Image src={source} height={270} width={240} alt="explore-card-img" className="md:h-[35vh]  h-[15vh] w-[25vw] md:w-[15vw]" />
          </div>
          <div className="md:text-lg text-md font-medium flex justify-center items-center md:py-[20px]">
          {title}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ExploreCard;
