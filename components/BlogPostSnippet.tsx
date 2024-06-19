import Image from 'next/image';
import React from 'react'
import { BiComment } from 'react-icons/bi';
import { BsCalendarDate } from 'react-icons/bs';
import { MdOutlinePerson, MdPublish } from 'react-icons/md';

interface BlogPostSnippetProps {
    authorImg: string;
    title: string;
    datePublished: Date;
    comments: number,
    author: string
}

const BlogPostSnippet = ({authorImg, author, title, datePublished, comments}: BlogPostSnippetProps) => {
  return (
    <div className='flex'>
      <Image
        src={authorImg}
        alt={author+' image'}
        width={60}
        height={60}
        className='w-[60px] object-cover h-[60px] rounded-full'
      />
      <div className="ml-3">
        <h2 className="text-lg font-medium leading-[22px]">
            {title}
        </h2>
        <div className="mt-2 flex flex-between opacity-75">
            <span className="text-sm font-semibold 
            flex flex-center"> <MdOutlinePerson className='mr-[2px]'/> {author}</span>
            <span className="text-sm flex 
            flex-center"> <BsCalendarDate className='mr-[2px]'/> {datePublished.toLocaleDateString()}</span>
            <span className="text-sm flex 
            flex-center"><BiComment className='mr-[2px]'/> {comments}</span>
        </div>
      </div>
    </div>
  )
}

export default BlogPostSnippet
