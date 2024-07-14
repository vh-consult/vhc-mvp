import React from 'react'
import AllBlogs from '@/components/blog/AllBlogs'

const BlogsHomePage = () => {
  return (
    <section className='w-full flex flex-col pt-6'>
      <div className="w-full pb-4">
        <h1 className="text-3xl w-[60%] mx-auto text-center capitalize font-semibold">
          Explore A Vast Library of health related articles and information that will greatly benefit you
        </h1>
        <p className="text-base opacity-75 w-[75%] text-center my-2 mx-auto">
          We have gathered the most helpful tips, expert knowledge and guidance you may need to live a healthy life. With over 1000+ contributors, we can boast of a robust network of people who really care about helping you live a healthy life.
        </p>
        <div className="w-full">
          <span className="text-lg font-medium">
          Recent Blogs
          </span>
        </div>
      </div>
      <AllBlogs/>
    </section>
  )
}

export default BlogsHomePage
