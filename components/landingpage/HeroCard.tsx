import Image from "next/image";

interface HeroCardProps {
    title: string;
    icon: string;
    text: string;
    color: string;
  }
  
  const HeroCard = ({title, icon, text, color}:HeroCardProps) => {
    return (
      <div className={`w-64 h-32 text-start p-4 m-2 ${color === 'green'? 'bg-green-2 text-white': 'bg-white'} shadow-md rounded-lg`}>
        <div className='w-full mb-2 flex flex-row items-center justify-start'>
          <Image 
            src={icon} 
            alt=""  
            className=' object-cover mr-3'
            height={24}
            width={24}
          />
          <p className='font-semibold text-base'>{title}</p>
        </div>
        <div>
          {text}
        </div>
      </div>
    )
  }
  
  export default HeroCard