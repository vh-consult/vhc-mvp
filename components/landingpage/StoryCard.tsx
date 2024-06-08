import Image from "next/image";

interface StoryProps {
    image: string;
    name: string;
    role: string;
    content: string;
  }
  
  const StoryCard = ({image, name, role, content}: StoryProps) => {
    return (
      <div className="mb-4 md:mb-8 text-white flex flex-col-reverse md:flex-row items-center justify-center">
        <div className="w-full md:w-4/6 md:mx-8 text-center md:text-start text-sm md:text-base font-normal">
          {content}
        </div>
        <div className="flex flex-col items-center justify-center">
          <Image 
            alt=""
            src={image} 
            width={100}
            height={100}
            className="w-[60px] h-[60px] rounded-full
             object-cover object-center" 
          />
          <div className="text-center">
            <h4 className="text-base font-medium">{name}</h4>
            <p className="text-xs md:text-sm font-semibold opacity-60">{role}</p>
          </div>
        </div>
      </div>
    )
  }
  
  export default StoryCard
  