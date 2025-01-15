import { landing } from "@/constants"
import { Button } from "../ui/button"
import BlogCard from "./BlogCard"
import Image from "next/image"
import { cn } from "@/lib/utils"

const About = () => {
    return (
      <div id='about' className='md:mb-8'>
        <section className='md:mt-0 w-full relative text-dark flex flex-col items-center justify-start'>
            <div  className='md:w-2/3 h-auto mt-4 mx-auto mb-4 '>
              <p className='text-sm md:text-base font-medium'>
                {landing.about.subtitle}
              </p> 
              <h2 className='text-lg md:text-2xl font-semibold md:w-full'>
                {landing.about.title}
              </h2>
            </div>
  
            <div className='flex flex-col md:flex-row items-center justify-center'>
              <div className="w-[90%] md:w-full flex justify-center md:items-center">
                <div className='w-2/6 mt-28 md:mt-0'>
                  <h5 className='text-lg md:text-xl font-medium'>
                    {landing.about.founding.title}
                  </h5>
                  <h1 className='text-3xl md:text-4xl font-bold my-3'>
                    {landing.about.founding.year}
                  </h1>
                  <p className='text-sm md:text-base'> 
                    {landing.about.founding.text}
                  </p>
                </div>
                
                <div className={`relative w-[350px] h-[500px] overflow-hidden`}>
                  <Image 
                    alt='' 
                    src="/images/aboutpic.jpg" 
                    className='absolute inset-0 rounded-2xl 
                    w-full h-full object-cover object-center' 
                    width={350}
                    height={500}
                  />
                </div>
  
              </div>
  
              <div className='w-[90%] px-[5%] md:px-0 md:w-4/5 md:ml-2 '>
                <Image 
                  src="/icons/streamline_insurance-hand.png" 
                  alt="" 
                  width={40}
                  height={40}
                  className=' md:w-[60px] md:h-[60px]'
                />
                <h3 className='md:text-xl font-semibold mt-2 md:mt-3'>
                  {landing.about.header}
                </h3>
                <p className='text-sm md:text-base font-normal my-2 md:my-5'>
                  {landing.about.body}
                </p>
                <Button 
                  variant="outline"
                  className='border border-dark flex flex-row items-center justify-between 
                  rounded-3xl hover:text-accent hover:border-accent hover:shadow-md 
                  p-2 w-[120px] h-[40px]'
                > 
                  {landing.about.button.text}
                  <landing.about.button.icon/> 
                </Button>
              </div>
            </div>
        </section>
        <section className='mt-3 md:mt-[-30px]'>
          <div className='h-[350px]
            bg-secondary w-full 
            flex flex-col md:flex-row justify-center md:pt-16 '
          >
            <div className='w-[90%] mx-auto md:mx-0 md:w-1/3 md:mr-52'>
              <p className='text-sm md:text-base 
                text-accent
                font-medium'
              >
                {landing.awareness.subtitle}
              </p>
              <h1 className='text-lg md:text-2xl text-dark 
                font-semibold'
              >
                {landing.awareness.title}
              </h1>
            </div>
            <div className='w-[90%] mx-auto md:mx-0 md:w-1/3 text-sm md:text-base'>
              {landing.awareness.body}
              <div className='flex flex-row'>
                {
                  landing.awareness.buttons.map(
                    (button, index) => {
                    return(
                      <Button
                        key={index} 
                        className={cn(`mt-3  hover:shadow-md`, `${button.style}`)}
                      >
                        {button.text}
                      </Button>
                    )
                  })
                }
              </div>
            </div>
          </div>
          <div className='w-1/2 md:w-full md:py-8 mt-[-60px] md:mt-[-90px] flex flex-col md:flex-row justify-center  '>
            {
              landing.awareness.cards.map(
                (card, index) => {
                  return(
                    <BlogCard 
                      type='card'
                      key={index}
                      buttonText={card.buttonText}
                      content={card.description}
                      imageSrc={card.image}
                      title={card.title}
                    />
                  )
                }
              )
            }
          </div>
          </section>
      </div>
    )
  }
  
  export default About
  