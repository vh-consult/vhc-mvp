import { AiOutlineArrowRight } from "react-icons/ai"
import { Button } from "../ui/button";
import Image from "next/image";

type BlogCardProps = {
  imageSrc: string;
  title: string;
  author?: string;
  date?: string;
  type: string;
  content: string;
  buttonType: string;
  buttonText: string;
  
}

const BlogCard = ({
  imageSrc, 
  title, 
  author, 
  date,
  type,
  content,
  buttonText,
}:BlogCardProps) => {
  return (
    <div className={`
        relative  md:w-[300px]  
    ${type==='blog'? 'md:h-[440px] ' : type === 'card'? 'md:h-[350px]': ''}
    hover:shadow-lg border rounded-lg bg-white mx-4
    `}>
      <Image 
        alt='' 
        src={imageSrc} 
        width={100}
        height={50}
        className='h-1/2 w-full rounded-lg object-cover' 
      />
      <div className='px-2'>
        <div className='w-full text-[12px] flex flex-row justify-between pt-2'>
          <span>{author}</span>
          <span>{date}</span>
        </div>
        <h3 className='text-base font-medium'>{title}</h3>
        <p className='text-sm font-normal'>{content}</p>
        <div className='absolute bottom-1 left-0'>
          <Button className='flex flex-row items-center justify-between hover:text-green-2 w-[98px] h-[30px] ml-2 ' >{buttonText} <AiOutlineArrowRight/> </Button>
        </div>
      </div>
    </div>
  )
}

export default BlogCard