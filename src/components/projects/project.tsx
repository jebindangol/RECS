import PageCover from "../page-cover/page-cover";
import GridComponent from './PhotoCard';

const Project1 = () => {
  return (
      <div className="w-full">
        <div className='fixed left-0 w-full z-10 h-full'>
          <PageCover cover = "/CoverimageC.png" />
        </div>
        <GridComponent />
      </div>
    
  )
}
export default Project1
