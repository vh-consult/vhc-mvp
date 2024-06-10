import { landing } from "@/constants"
import StoryCard from "./StoryCard"

const Stories = () => {
  return (
    <section 
      id='reactions' 
      className={`relative w-full h-[80vh] md:h-[400px] -z-10 flex flex-row items-start justify-around pt-8 bg-center 
        bg-story bg-no-repeat bg-cover`
      }
    >
      <div className="absolute inset-0 bg-green-4 bg-opacity-80"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start md:justify-around w-full">
        <h3 
          className='md:w-1/6 font-medium text-lg md:text-2xl 
          text-green-2'
        >
            {landing.stories.title}
        </h3>
        <div className='w-[80%] md:w-3/6'>
          {
              landing.stories.posts.map((story, index) => {
                  return (
                      <StoryCard
                          key={index}
                          image={story.image}
                          name={story.author}
                          role={story.role}
                          content={story.texts}
                      /> 
                  )
              })
          }
        </div>
      </div>
    </section>
  )
}

export default Stories

