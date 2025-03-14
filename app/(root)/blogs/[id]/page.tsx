"use client"
import BlogContent from '@/components/blog/BlogContent'
import BlogPostSnippet from '@/components/blog/BlogPostSnippet'
import NewsLetterSubscription from '@/components/general/NewsLetterSubscription'
import { getBlogById } from '@/lib/actions/blog.actions'
import { BlogParams } from '@/lib/database/models/blog.model'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const BlogPage =  () => {
  const router = useRouter()
  const [blog, setBlog] = useState<BlogParams|any>()
  useEffect(()=>{
    const fetch = async () => {
      const blog:BlogParams|any = await getBlogById(router.query.id as string)
      setBlog(blog)
    }
    fetch()
  })
  return (
    <div className='relative w-full py-8 min-h-screen flex justify-center'>
      <div className="w-[60%]">
        <BlogContent
          author={blog?.authorName}
          authorImg={blog?.authorImage}
          title={blog?.title}
          introduction={blog?.introduction}
          content= {blog?.content}
          conclusion={blog?.conclusion}
          coverImg={blog?.coverImg}
          datePublished={blog?.datePublished}
        />
      </div>
      <div className="w-[30%] flex flex-col sticky top-[24px] right-0">
        <NewsLetterSubscription/>
        <div className="">
          <h2 className='text-xl font-medium mb-2'>Trending</h2>
          <BlogPostSnippet
            authorImg='/images/doc-3.jpg'
            comments={1232}
            datePublished={new Date()}
            title='Good days are good for your health too. 
            Finding joy in your worst health conditions'
            author='NY Ayisi'
          />
            <BlogPostSnippet
            authorImg='/images/doc-3.jpg'
            comments={1232}
            datePublished={new Date()}
            title='Good days are good for your health too. 
            Finding joy in your worst health conditions'
            author='NY Ayisi'
          />
                    <BlogPostSnippet
            authorImg='/images/doc-3.jpg'
            comments={1232}
            datePublished={new Date()}
            title='Good days are good for your health too. 
            Finding joy in your worst health conditions'
            author='NY Ayisi'
          />
        </div>
      </div>
    </div>
  )
}

export default BlogPage
