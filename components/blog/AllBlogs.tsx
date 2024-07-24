// "use client"
import { getAllBlogs } from '@/lib/actions/blog.actions'
import React from 'react'
import CustomBlogCard from './CustomBlogCard'
import { BlogParams } from '@/lib/database/models/blog.model'

const AllBlogs =async () => {
  // const [blogs, setBlogs] = useState<BlogParams[] | any[]>([])
  // const fetchBlogs = async () => {
    const blogs = await getAllBlogs()
  //   setBlogs(blogs)
  // }
  // useEffect(()=> {
  //   fetchBlogs()
  // }, [blogs])
  return (
    <div className="w-full grid grid-cols-4 px-10">
        {
            blogs.map((blog:BlogParams|any, index:number) => (
                <CustomBlogCard
                  key={index}
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
