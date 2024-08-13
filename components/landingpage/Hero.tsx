import { landing } from "@/constants"
import HeroCard from "./HeroCard"
import { SignedIn } from "@clerk/nextjs"
import { Button } from "../ui/button"
import Link from "next/link"

const Hero = () => {
    return (
      <section className={` w-full text-green-1 flex flex-center  h-[calc(100vh-64px)] bg-center bg-landingHero  bg-no-repeat bg-cover mb-2`}  id='home'
      >
        <div className="w-full h-full relative"> 
        <div className="absolute inset-0 bg-green-4 bg-opacity-50"></div>
          
          <div className=" w-3/5 h-1/2 absolute left-[20%] top-[22%] md:text-center text-white">
            <h5 className='text-sm md:text-2xl font-medium '>
              {landing.hero.subtitle}
            </h5>
            <h1 className='font-semibold my-2 md:text-6xl leading-tight capitalize'>
              {landing.hero.title}
            </h1>
            <p className='font-medium text-lg'>
              {landing.hero.body}
            </p>

          </div>
  
          <div className="
            w-full card-section flex flex-row 
            items-center justify-center  flex-wrap text-green-4
            absolute bottom-[5px]  
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
      </section>
    )
  }
  
  export default Hero
  