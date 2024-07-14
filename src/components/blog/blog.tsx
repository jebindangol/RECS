import React from 'react'
import BlogPage from './blogpage'
import PageCover from '../page-cover/page-cover'

const Blog = () => {
return (
    <div className='w-full'>
        <div className='fixed left-0 w-full z-10 h-full'>
            <PageCover cover = "/CoverimageC.png" />
        </div>
        <BlogPage />
    </div>
)
}
export default Blog;