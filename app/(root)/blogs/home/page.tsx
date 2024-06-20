import CustomBlogCard from '@/components/blog/CustomBlogCard'
import React from 'react'

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
          <span className="text-lg font-medium"></span>
          Recent Blogs
        </div>
      </div>
      <div className="w-full grid grid-cols-4 ">
        <CustomBlogCard
          snippet='In recent times, the wide spread of the virus which had'
          coverImage='/images/doc-1.jpg'
          title='Combating HIV/AIDS With Advances In Technology'
          author='NY Ayisi'
          datePublished={new Date(2024, 5, 23)}
        />
        <CustomBlogCard
          snippet='In recent times, the wide spread of the virus which had'
          coverImage='/images/doc-1.jpg'
          title='Combating HIV/AIDS With Advances In Technology'
          author='NY Ayisi'
          datePublished={new Date(2024, 5, 23)}
        />
        <CustomBlogCard
          snippet='In recent times, the wide spread of the virus which had'
          coverImage='/images/doc-1.jpg'
          title='Combating HIV/AIDS With Advances In Technology'
          author='NY Ayisi'
          datePublished={new Date(2024, 5, 23)}
        />
        <CustomBlogCard
          snippet='In recent times, the wide spread of the virus which had'
          coverImage='/images/doc-1.jpg'
          title='Combating HIV/AIDS With Advances In Technology'
          author='NY Ayisi'
          datePublished={new Date(2024, 5, 23)}
        />
      </div>
      
    </section>
  )
}

export default BlogsHomePage
