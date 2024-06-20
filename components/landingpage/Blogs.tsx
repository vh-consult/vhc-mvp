import { landing } from "@/constants"
import BlogCard from "./BlogCard"

const Blogs = () => {
    return (
      <section id="blogs" className="md:mb-8 w-full">
        <div className="text-center mb-4">
          <h2 className="text-xl font-semibold">{landing.blogs.title}</h2>
          <p className="text-base font-normal">{landing.blogs.content}</p>
        </div>
        <div className="w-full  flex flex-row items-center justify-center">
          {
            landing.blogs.cards.map((card, index) => {
              return(
                <BlogCard 
                  type="blog"
                  key={index}
                  buttonText={card.buttonText}
                  content={card.description}
                  imageSrc={card.image}
                  title={card.title}
                  author={card.author}
                  date={card.date}
              />
              )
            })
          }
        </div>
      </section>
    )
  }
  
  export default Blogs