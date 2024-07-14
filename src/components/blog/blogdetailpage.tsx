import React from 'react'
import BlogDetail from './blogdetail'
import PageCover from '../page-cover/page-cover'

const BlogDetailPage = () => {
return (
    <div className='w-full'>
        <div className="fixed left-0 w-full z-10 h-full">
            <PageCover cover= "/blogcover.png" />
        </div>
        <BlogDetail />
    </div>
)
}
export default BlogDetailPage;
