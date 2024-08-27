import React from 'react'
import AllBlogs from '@/components/blog/AllBlogs'

const BlogsHomePage = () => {
  return (
    <section className='w-full flex flex-col '>
      <div className="w-full h-1/2 relative p-10 text-white bg-hero bg-cover z-0 bg-no-repeat">
        <div className="absolute bg-dark-3 opacity-35 w-full h-full left-0 top-0 z-10"></div>
        <h1 className="text-3xl w-[60%] mx-auto text-center z-30 capitalize font-semibold">
          Explore A Vast Library of health related articles and information that will greatly benefit you
        </h1>
        <p className="text-base opacity-75 w-[75%] text-center my-2 mx-auto">
          We have gathered the most helpful tips, expert knowledge and guidance you may need to live a healthy life. With over 1000+ contributors, we can boast of a robust network of people who really care about helping you live a healthy life.
        </p>
      </div>
      <div className="">
        <span className="text-lg text-center font-medium">
        Recent Blogs
        </span>
      <AllBlogs/>

      </div>
    </section>
  )
}

export default BlogsHomePage
