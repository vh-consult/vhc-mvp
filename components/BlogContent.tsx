import Image from 'next/image'
import React from 'react'

interface BlogContentProps {
    content: string;
    title: string;
    datePublished: Date;
    authorImg: string;
    author: string;
    coverImg: string;
}

const BlogContent = ({
    content, title, datePublished, 
    author, authorImg, coverImg
}: BlogContentProps) => {
  return (
    <div className='w-full'>
      <span className="">{datePublished.toDateString()}</span>
      <h1 className="text-4xl">{title}</h1>
      <span className="">
        <Image
          src={authorImg}
          alt=''
          width={30}
          height={30}
        />
        <span className="">{author}</span>
      </span>
      <div className="">
        <Image 
            src={coverImg}
            alt=''
            width={30}
            height={30}
        />
      </div>
      <p>
        {content}
      </p>
    </div>
  )
}

export default BlogContent
