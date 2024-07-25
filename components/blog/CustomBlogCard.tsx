import React from 'react'
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import { GoDot } from 'react-icons/go';

interface CustomBlogProps {
    author: string;
    datePublished: Date;
    title: string;
    snippet: string;
    coverImage: string;
}

const CustomBlogCard = ({author, datePublished, title, snippet, coverImage}: CustomBlogProps) => {
  return (
    <div className='bg-dark-1 md:w-[300px] md:h-[325px] rounded-none border-none my-2'>
      <div className="w-full h-2/3">
        <Image 
            src={coverImage}
            alt={`cover image`}
            width={300}
            height={150}
            className='w-full h-full object-cover'
        />
      </div>
      <div className="p-2">
        <div className="flex flex-between items-center text-sm font-medium text-green-2">
            <span className="">{author}</span>
            <GoDot className='mx-1'/>
            <>{new Date(datePublished).toLocaleDateString()}</>
        </div>
        <div className="w-full flex my-1">
            <span className="text-base w-[95%] font-medium">{title}</span>
            <ArrowUpRight className='w-5 h-5'/>
        </div>
        <span className="w-full text-sm">
            {snippet.slice(0,42)}...
        </span>
      </div>
    </div>
  )
}

export default CustomBlogCard
