import BlogContent from '@/components/BlogContent'
import BlogPostSnippet from '@/components/BlogPostSnippet'
import NewsLetterSubscription from '@/components/NewsLetterSubscription'
import React from 'react'

const BlogPage = () => {
  return (
    <div className='w-full pt-8 min-h-screen flex justify-center'>
      <div className="w-[60%]">
        <BlogContent/>
      </div>
      <div className="w-[30%] flex flex-col">
        <NewsLetterSubscription/>
        <div className="">
          <h2>Trending</h2>
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
