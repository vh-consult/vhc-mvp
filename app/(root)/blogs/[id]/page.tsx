import BlogContent from '@/components/blog/BlogContent'
import BlogPostSnippet from '@/components/blog/BlogPostSnippet'
import NewsLetterSubscription from '@/components/general/NewsLetterSubscription'
import { getBlogById } from '@/lib/actions/blog.actions'
import { BlogParams } from '@/lib/database/models/blog.model'
import { currentUser } from "@clerk/nextjs/server";
import React from 'react'

const BlogPage = async ({params}: {params: {id: string}}) => {
  // const user = await currentUser();
  const blog:BlogParams|any = await getBlogById(params.id)

  return (
    <div className='w-full py-8 min-h-screen flex justify-center'>
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
      <div className="w-[30%] flex flex-col">
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
