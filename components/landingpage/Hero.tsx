import { landing } from "@/constants"
import HeroCard from "./HeroCard"

const Hero = () => {
    return (
      <div className={` w-full text-blackish-green  h-[350px] bg-center bg-[url('/assets/images/herobg.jpg')]   bg-no-repeat bg-cover mb-6`}  id='home'
      >
        <div className="w-full h-full relative"> 
        <div className="absolute inset-0 bg-blackish-green bg-opacity-50"></div>
          
          <div className="content w-4/5 md:w-2/5 absolute text-white top-6 md:top-12 right-10 md:right-48">
            <h5 className='text-sm md:text-lg font-medium text-start'>
              {landing.hero.subtitle}
            </h5>
            <h1 className='font-semibold text-start my-2 text-2xl md:text-4xl capitalize'>
              {landing.hero.title}
            </h1>
            <p className='font-medium text-base'>
              {landing.hero.body}
            </p>
          </div>
  
          <div className="
            w-full card-section flex flex-row 
            items-center justify-center  flex-wrap
            absolute bottom-[-150px] md:bottom-[-80px]  
          ">
            {
              landing.hero.cards.map((card, index) =>
                {
                  return(
                    <HeroCard 
                      key={index}
                      title={card.title}
                      icon={card.icon}
                      text={card.text}
                      color={card.color}
                    />
                  )
                }
              )
            }
          </div>
  
        </div>
      </div>
    )
  }
  
  export default Hero
  