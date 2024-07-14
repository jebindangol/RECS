import Link from "next/link";
import { useState } from "react";
import { ImageGrid } from "../../data/projectGrid";
import ProjectList from "./projectlist";

interface Project {
  id: number;
  title: string;
  img: string;
  description: string;
  land: number;
  plinth: number;
  specs: string;
}

const PhotoCard: React.FC = () => {
  const [numToShow, setNumToShow] = useState<number>(4);
  const [showButton, setShowButton] = useState<boolean>(true);

  const handleViewMore = () => {
    const increment: number = 4;
    setNumToShow(numToShow + increment);

    setShowButton(false);
  };

  const totalItems = ImageGrid?.length || 0;
  const isShowButtonVisible = numToShow < totalItems;

  return (
    <>
      <div className="bg-transparent h-[40vh] md:h-[70vh] "></div>
      <div className="relative bg-gray-100 w-full z-50">
        {/* Project Category view*/}
        <div className="flex flex-wrap justify-center gap-3 uppercase pt-10 text-xs md:text-base">
          <div className="flex gap-3">
            <Link href="">All</Link>
            <p>|</p>
          </div>
          <div className="flex gap-3">
            <Link href="">House Design</Link>
            <p>|</p>
          </div>
          <div className="flex gap-3">
            <Link href="">interior design</Link>
          </div>
        </div>

        {/* GridComponent */}
        <div className="w-[100vw]">
          <div className="flex flex-col items-center px-10 pt-10">
            <div className="grid grid-cols-1 gap-10">
              {ImageGrid?.slice(0, numToShow).map((data, index) => (
                <Link
                  href={`/project/${data.id}?title=${encodeURIComponent(
                    data.title
                  )}`}
                  key={index}
                  passHref
                  legacyBehavior
                >
                  <ProjectList
                    source={data.img}
                    title={data.title}
                    description={data.description}
                    link={`/project/${data.id}?title=${encodeURIComponent(
                      data.title
                    )}`}
                    land={data.land}
                    plinth={data.plinth}
                    specs={data.specs}
                  />
                </Link>
              ))}
            </div>
          </div>
          <div className="flex justify-center py-20">
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

export default PhotoCard;
