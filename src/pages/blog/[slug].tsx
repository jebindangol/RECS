import MasterLayout from '@/components/masterlayout/masterlayout'
import React from 'react'
import BlogDetailPage from '@/components/blog/blogdetailpage'

const blog = () => {
    return (
    <div>
        <MasterLayout>
            <BlogDetailPage />
        </MasterLayout>
    </div>
)
}

export default blog