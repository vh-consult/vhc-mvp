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
      <span className="opacity-75">Date Published: {datePublished.toLocaleDateString()}</span>
      <h1 className="text-4xl font font-semibold my-2">{title}</h1>
      <span className="flex text-sm font-medium opacity-75">
      Posted by: 
        <Image
          src={authorImg}
          alt=''
          width={30}
          height={30}
          className='w-[24px] h-[24px] object-cover ml-2 mr-[2px] rounded-full mb-3'
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
      <p>
        {
          introduction 
          && 
          <>
          <h2 className="text-3xl font-semibold">Introduction</h2>
          {introduction}
          </>
        }
      </p>
      <p>
        {content}
      </p>
      <p>
        {
          conclusion && 
          <>
          <h2 className="text-3xl font-semibold">Conclusion</h2>
          {conclusion}
          </>        }
      </p>
    </div>
  )
}

export default BlogContent
