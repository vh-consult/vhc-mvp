import BlogContent from '@/components/BlogContent'
import BlogPostSnippet from '@/components/BlogPostSnippet'
import NewsLetterSubscription from '@/components/NewsLetterSubscription'
import React from 'react'

const BlogPage = () => {
  return (
    <div className='w-full py-8 min-h-screen flex justify-center'>
      <div className="w-[60%]">
        <BlogContent
          author='NY Ayisi'
          authorImg='/images/doc-4.jpg'
          content='
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
        Accusamus quis quia quibusdam, quasi eligendi neque error 
        corrupti iure maxime beatae laudantium, animi rem distinctio 
        fugiat culpa! A nemo quod repellat temporibus obcaecati molestiae 
        doloremque. Sed aspernatur rerum unde dolores perspiciatis dolor,
         veniam totam magni amet. Adipisci at debitis accusantium animi? T
         otam perferendis dolore animi, nemo quibusdam blanditiis esse nobis i
         psam. Esse ratione veritatis rem perspiciatis totam quibusdam, laborum 
         tempore ex similique cum accusantium temporibus quis consequatur sunt of
         iciis, explicabo minus vel provident praesentium doloribus expedita harum
          est! Doloremque similique possimus consequatur assumenda corrupti cumque
           quisquam culpa nam, modi, dolorum tempore sunt voluptates, nesciunt rep
           rehenderit ipsum fugiat asperiores impedit deserunt enim laudantium exp
           licabo deleniti! Cumque eligendi amet optio et iusto ipsam vero repelle
           ndus dolorum facilis iste, doloribus beatae illo, excepturi praesentiu
           m fugiat nulla architecto. Fuga, recusandae? Modi laborum nostrum praes
           entium quaerat dolore tempora sequi suscipit consequatur facilis ullam 
           molestias omnis debitis temporibus, fugiat quam atque animi ducimus ali
           quid? Dignissimos inventore voluptas est voluptatibus minima error quam
           ! Dolorem autem quod quas consequuntur commodi magni corrupti sunt exc
           epturi, odio ab atque consectetur perspiciatis magnam, odit officia quib
           usdam pariatur sit dolore suscipit nobis obcaecati numquam corporis? Dist
           inctio consequatur consectetur quas obcaecati, voluptas assumenda hic en
           im exercitationem vel blanditiis voluptatem, voluptatibus molestiae a
           nimi nulla laborum itaque dignissimos sint, perspiciatis atque vitae
            maiores alias ullam minima! Perferendis assumenda dolorum ex, esse i
            psum facilis magni, repudiandae aliquid aperiam modi facere, ab ipsa!
             Dicta delectus, neque sit eius doloribus nesciunt consequatur consec
             tetur qui nisi perferendis, assumenda natus odit recusandae obcaecati 
             atque a quibusdam eligendi, libero exercitationem excepturi consequuntur 
             repellat! Maiores debitis explicabo, fugiat dolorem vitae dicta laborum l
             aboriosam accusamus! Nesciunt sint nemo ab veritatis ducimus blanditiis p
             rovident doloremque necessitatibus vel molestias voluptate magnam, itaque 
             similique ut nihil enim repellendus impedit quos perferendis fugiat commodi
              dignissimos vitae mollitia! Et, esse numquam quam sint quibusdam qui u
              llam doloribus eum, molestias similique tempora, fugit iusto dolorum? 
              Eum earum vel reiciendis nostrum animi vero beatae veritatis quam quas
              i eveniet pariatur cum aspernatur natus, eos asperiores laudantium 
              nde sint ullam itaque corrupti ratione quidem nisi. Harum provident e
              ius ducimus consequuntur voluptatibus qui ad, laborum, veniam sint rer
              um facilis tempora amet totam dolores ut temporibus in possimus ab, qua
              erat blanditiis corporis repellendus animi. Totam iste, possimus inventor
              e qui aliquam unde, ratione similique velit fugit in ex et sint laboriosa
              m beatae. Cum culpa esse architecto ipsum nobis sint odit placeat consequuntur 
              tempore excepturi quos, quis, recusandae maiores dolorem nesciunt. Vel quidem
               minima repudiandae beatae nam corrupti dolorum cum, similique nulla fuga re
               prehenderit placeat ut velit, quasi porro maxime veritatis deleniti maiore
               s, quos facilis aperiam sunt consectetur voluptas! Error fugit similique
               , quaerat, officiis eveniet excepturi consequatur aut sit reprehenderit i
               psam assumenda sapiente perspiciatis, placeat at aliquid eos nihil itaqu
               e enim? Magni minus temporibus iusto repudiandae rem amet possimus. Sun
               t, natus laudantium dolorum aliquid ab facere hic nisi, quis, maxime m
               olestias necessitatibus repellat voluptate doloremque magnam fuga ve
               lit. Eligendi odit aperiam officia, natus a eius est ipsum culpa non
                ullam labore in dolorem cumque libero totam reprehenderit iure, animi nec
                essitatibus nam voluptatem at, illo harum numquam! Eveniet, distinctio! At in q
                am incidunt animi voluptatum tenetur, quas quaerat eaque qui quae architecto
                 corporis impedit officia veniam sunt nobis odio laudantium? Dolor asperior
                 s modi nam, amet corporis vel quia magnam ratione facere odit commodi saep
                 e dolore vitae eum quae? Mollitia iste obcaecati laboriosam nulla iure ni
                 si. Neque aut, numquam repudiandae commodi corrupti architecto! Non nemo,
                  porro reprehenderit similique commodi qui ipsa id, accusantium temporibu
                  s delectus ratione nisi! In, necessitatibus, debitis aperiam praesentium perf
                  erendis corporis a itaque, obcaecati doloribus fugit provident! Ab dolorum e
                  ligendi aspernatur fuga, laudantium reiciendis? Dolore, consequatur.
          
          '
          coverImg='/images/telemed.jpeg'
          datePublished={new Date()}
          title='Navigating the depths of cancerous cells and how they are formed in living human systems.'
        />
      </div>
      <div className="w-[30%] flex flex-col">
        <NewsLetterSubscription/>
        <div className="">
          <h2 className='text-xl font-medium mb-2'>Trending</h2>
          <BlogPostSnippet
            authorImg='/images/doc-3.jpg'
            comments={1232}
            datePublished={new Date()}
            title='Good days are good for your health too. 
            Finding joy in your worst health conditions'
            author='NY Ayisi'
          />
                    <BlogPostSnippet
            authorImg='/images/doc-3.jpg'
            comments={1232}
            datePublished={new Date()}
            title='Good days are good for your health too. 
            Finding joy in your worst health conditions'
            author='NY Ayisi'
          />
                    <BlogPostSnippet
            authorImg='/images/doc-3.jpg'
            comments={1232}
            datePublished={new Date()}
            title='Good days are good for your health too. 
            Finding joy in your worst health conditions'
            author='NY Ayisi'
          />
        </div>
      </div>
    </div>
  )
}

export default BlogPage
