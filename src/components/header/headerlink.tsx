import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import close from "../../../public/closemenu.svg";
import recslogo from "../../../public/recshomelogo.svg";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  toggleMenu: () => void;
}

const HeaderLinks: React.FC<Props> = ({ isOpen, onClose }) => {
  const links = [
    { label: "projects", href: "/project" },
    { label: "services", href: "/service" },
    { label: "gallery", href: "/gallery" },
    { label: "blog", href: "/blog" },
  ];

  const router = useRouter();

  const handleLinkClick = (label: string) => {
    onClose();
  };

  const handlecloseClick = () => {
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-screen z-10">
      {isOpen && (
        <div>
          <div className="flex justify-between items-center px-5 py-2 border-b shadow-lg border-gray-200 bg-white ">
            <Link href="./" className="flex items-center">
              <Image src={recslogo} alt={""} className="h-[70px] w-[100px]" />
            </Link>
            <div onClick={handlecloseClick}>
              <Image src={close} alt={""} className="h-[17px] w-[20px]" />
            </div>
          </div>
          <ul className="flex flex-col justify-center items-center gap-12 py-10 bg-gray-50 opacity-95">
            {links.map(({ label, href }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={`text-black text-xl  hover:text-blue-500 transition-colors uppercase ${
                    router.asPath.includes(href)
                      ? "pb-2 border-b-2 border-black font-bold "
                      : ""
                  }`}
                  onClick={() => handleLinkClick(label)}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default HeaderLinks;
