import { getAllBlogs } from '@/lib/actions/blog.actions'
import React from 'react'
import CustomBlogCard from './CustomBlogCard'
import { BlogParams } from '@/lib/database/models/blog.model'
import Link from 'next/link'

const AllBlogs =async () => {
    const blogs = await getAllBlogs()
  return (
    <div className="w-full grid grid-cols-4 ">
        {
            blogs.map((blog:BlogParams|any, index:number) => (
              <Link key={index} href={`/blogs/${blog?._id}`}>
                <CustomBlogCard
                  snippet={blog?.content.slice(0, 60)} 
                  coverImage={blog?.coverImage}
                  title= {blog?.title}
                  author={blog?.author.firstName + ' ' + blog?.author.lastName}
                  datePublished={blog?.createdAt}
                />
              </Link>
            ))
        }
  </div>
  )
}

export default AllBlogs
