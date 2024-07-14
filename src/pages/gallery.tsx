import Image from "next/image";
import React from "react";
import MasterLayout from "@/components/masterlayout/masterlayout";
import Gallerypage from "@/components/gallery/gallerypage";
import PageCover from "@/components/page-cover/page-cover";

interface Props {
}

const Gallery: React.FC<Props> = ({  }) => {
    return (
            <MasterLayout>
            <div className='fixed left-0 w-full z-10 h-full'>
                <PageCover cover= "/gallerypagecover.png" />
            </div>
                <Gallerypage />
            </MasterLayout>
)
}
export default Gallery