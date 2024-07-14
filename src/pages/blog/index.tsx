import MasterLayout from '@/components/masterlayout/masterlayout'
import React from 'react'
import Blog from '@/components/blog/blog'
import {motion} from "framer-motion";

const blog = () => {
  return (
      <MasterLayout>
        <Blog />
      </MasterLayout>
  )
}

export default blog