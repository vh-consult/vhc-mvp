"use client"
import { getAllBlogs } from '@/lib/actions/blog.actions'
import { revalidatePath } from 'next/cache'
import React, {useState, useEffect} from 'react'
import CustomBlogCard from './CustomBlogCard'
import { BlogParams } from '@/lib/database/models/blog.model'

const AllBlogs = () => {
  const [blogs, setBlogs] = useState<BlogParams[] | any[]>([])
  const fetchBlogs = async () => {
    const allBlogs = await getAllBlogs()
    setBlogs(allBlogs)
    revalidatePath('/blogs/home')
  }
  useEffect(()=> {
    fetchBlogs()
  })
  return (
    <div className="w-full grid grid-cols-4 ">
        {
            blogs.map((blog, index) => (
                <CustomBlogCard
                  snippet={blog.content.slice(0, 60)}
                  coverImage={blog.coverImage}
                  title= {blog.title}
                  author={blog.author as string}
                  datePublished={blog.createdAt}
                />
            ))
        }
  </div>
  )
}

export default AllBlogs
