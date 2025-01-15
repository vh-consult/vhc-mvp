import { landing } from "@/constants"
import FaqCard from "./FaqCard"

const Faqs = () => {
    return (
      <section id='faqs' className="w-[95%] md:w-4/6 mb-8 mt-[-30px] md:mt-[-50px] md:shadow-md z-50 mx-auto rounded-2xl border bg-white py-5 text-center  ">
        <div className="mx-auto w-[90%] ">
          <h3 className="w-full bg-accent p-3 rounded-md text-white font-medium">{landing.faqs.title}</h3>
          <div>
            {
              landing.faqs.inquiries.map((faq, index) => {
                return(
                  <FaqCard 
                    key={index}
                    question={faq.question}
                    answer={faq.response}
                  />
                )
              })
            }
          </div>
        </div>
      </section>
    )
  }
  
  export default Faqs
  