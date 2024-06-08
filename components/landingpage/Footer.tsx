import { landing } from "@/constants"
import Image from "next/image"
import Link from "next/link"

const Footer = () => {
    return (
      <section className='w-full flex flex-col h-[400px] '>
        <div 
          className='w-full h-[375px] px-5 md:px-20 flex 
            flex-col md:flex-row items-center md:justify-between 
            bg-green-4 text-white
          '>
          <div className='md:w-3/6 text-[12px] md:text-base'>
            <Image 
              src={landing.footer.logo} 
              alt=""
              width={120}
              height={40}
            />
            <p>
              {landing.footer.content}
            </p>
            <div className='flex flex-row mt-4 w-2/6'>
              {
                landing.footer.socials.map((socialMedia, index) => {
                  return(
                    <span key={index} className='mr-4'>
                      <Link href={socialMedia.link}>
                        <Image 
                          alt=""
                          width={24}
                          height={24}
                          src={socialMedia.icon} 
                          className="w-full h-full object-cover" 
                        />
                      </Link>
                    </span>
                  )
                })
              }
            </div>
          </div>
          <div className='w-[80%] h-[50%] md:w-[300px] md:h-[250px] pr-20 bg-green-1 p-2 text-green-4 rounded-xl'>
            Contact us on
          </div>
        </div>
        <div className='md:h-[25px] bg-white text-green-4 text-[12px] md:text-sm text-center pt-2 opacity-50'>
          {landing.footer.copyright}
        </div>
      </section>
    )
  }
  
  export default Footer
  