import React from 'react'
import ProjectDetailpage from './detailpage'
import PageCover from '@/components/page-cover/page-cover'

interface Props {
    imageUrl: string;
    isOpen: boolean;
    onClose: () => void;
    currentIndex: number;
    setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  }
  
const ProjectDetail = () => {
return (
    <div className='w-full'>
        <div className='fixed left-0 w-full z-10 h-full'>
            <PageCover cover = "/CoverimageC.png" />
        </div>
        <ProjectDetailpage />
    </div>
)
}
export default ProjectDetail;