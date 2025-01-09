import React from 'react'
import ConsultationTypeList from '@/components/consultation/ConsultationTypeList'

const Home = () => {
  return (
    <section className='flex justify-center size-full flex-col gap-10 text-secondary'>
      <ConsultationTypeList/>
    </section>
  )
}

export default Home
