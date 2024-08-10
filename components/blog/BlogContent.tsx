import Image from 'next/image'
import React from 'react'

interface BlogContentProps {
    content: string;
    title: string;
    introduction?: string;
    conclusion?: string;
    datePublished: Date;
    authorImg: string;
    author: string;
    coverImg: string;
}

const BlogContent = ({
    content, title, datePublished, introduction,
    author, authorImg, coverImg, conclusion
}: BlogContentProps) => {
  return (
    <div className='w-[90%]'>
      <span className="opacity-75">Date Published: {new Date(datePublished).toLocaleDateString()}</span>
      <h1 className="text-4xl font font-semibold my-2">{title}</h1>
      <span className="flex items-center text-sm mb-4 font-medium opacity-75">
      Posted by: 
        <Image
          src={authorImg}
          alt=''
          width={20}
          height={20}
          className='w-[24px] h-[24px] object-cover ml-2 mr-1 rounded-full'
        />
        <span className="">{author}</span>
      </span>
      <div className="mb-3">
        <Image 
            src={coverImg}
            alt=''
            width={500}
            height={300}
            className='w-full h-[40%] object-cover'
        />
      </div>
      <div>
        {
          introduction 
          && 
          <>
          <h2 className="text-3xl font-semibold">Introduction</h2>
          {introduction}
          </>
        }
      </div>
      <div>
        {content}
      </div>
      <div>
        {
          conclusion && 
          <>
          <h2 className="text-3xl font-semibold mt-5">Conclusion</h2>
          {conclusion}
          </>        
        }
      </div>
    </div>
  )
}

export default BlogContent
