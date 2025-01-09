import { landing } from "@/constants"
import InsuranceCard from "./InsuranceCard"
import { Button } from "../ui/button"
import { AiOutlineCheck } from "react-icons/ai"
import Image from "next/image"

const WhyUs = () => {
    return (
      <div id='why-us' className='md:mb-8'>
        <section className='w-full relative mb-8 flex flex-col-reverse md:flex-row items-center justify-center h-[450px]'>
          <div 
            className='bg-accent
            absolute bottom-0 left-0 md:w-3/5 h-[90%] flex 
            items-center justify-center '
          >
            <div className="w-2/3 text-white">
                <h2 className='font-semibold md:text-xl w-full mb-2'>
                  {landing.whyUs.title}
                </h2>
                <p className='font-normal text-sm md:text-base mb-2 w-full'>
                  {landing.whyUs.body}
                </p>
                <div className='flex flex-row flex-wrap mb-4
                  md:w-[80%]'
                >
                  {
                    landing.whyUs.list.texts.map((item, index) => {
                      return(
                        <span className='flex text-sm flex-row mr-4 items-center capitalize justify-center' key={index}>
                          <AiOutlineCheck className='mr-2'/>
                          {item}
                        </span>
                      )
                    })
                  }
                </div>
                <Button 
                  className='bg-white text-accent p-2 rounded-md font-medium hover:opacity-90 hover:shadow-lg'
                > 
                  {landing.whyUs.buttonText} 
                </Button>
            </div>
  
          </div>
          <div className='w-4/5 md:w-2/5 absolute md:right-0 h-2/3 md:h-full shadow-xl md:bottom-0'>
            <Image 
              src={landing.whyUs.image} 
              alt=""
              width={100}
              height={100}
              className=" rounded-t-2xl w-full 
              object-cover  h-full" 
            />
          </div>
        </section>
        <section className='mb-4 md:mb-8'>
          <div className='text-center w-[90%] md:w-1/2 mx-auto mb-4'>
            <h2 className='text-lg md:text-xl font-semibold'>
              {landing.insurance.title}
            </h2>
            <p className='text-sm md:text-base '>
              {landing.insurance.content}
            </p>
          </div>
          <div className='flex flex-col md:flex-row items-center justify-center'>
            {
              landing.insurance.cards.map((card, index)=>{
                return (
                  <InsuranceCard 
                    className='w-1/2  md:w-[300px] h-[350px] my-2'
                    buttonStyles={card.buttonStyle}
                    buttonText={card.buttonText}
                    description={card.description}
                    options={card.listTexts}
                    price={card.price}
                    dominant={card.isDominant}
                    priceSuper={card.priceSuperscript}
                    title={card.title}
                    key={index}
                  />
                )
              })
            }
          </div>
        </section>
      </div>
    )
  }
  
  export default WhyUs
  