import { landing } from "@/constants"

const Footer = () => {
    return (
      <div className='w-full flex flex-col h-[400px] '>
        <div 
          className='w-full h-[375px] px-5 md:px-20 flex 
            flex-col md:flex-row items-center md:justify-between 
            bg-blackish-green text-white
          '>
          <div className='md:w-3/6 text-[12px] md:text-base'>
            <img src={landing.footer.logo} alt=""/>
            <p>
              {landing.footer.content}
            </p>
            <div className='flex flex-row mt-4 w-2/6'>
              {
                landing.footer.socials.map((socialMedia, index) => {
                  return(
                    <span key={index} className='mr-4'>
                      <a href={socialMedia.link}>
                        <img 
                          src={socialMedia.icon} 
                          className="w-[24px] h-[24px]" 
                        />
                      </a>
                    </span>
                  )
                })
              }
            </div>
          </div>
          <div className='w-[80%] h-[50%] md:w-[300px] md:h-[250px] pr-20 bg-light-green p-2 text-blackish-green rounded-xl'>
            Contact us on
          </div>
        </div>
        <div className='md:h-[25px] bg-white text-blackish-green text-[12px] md:text-sm text-center pt-2 opacity-50'>
          {landing.footer.copyright}
        </div>
      </div>
    )
  }
  
  export default Footer
  