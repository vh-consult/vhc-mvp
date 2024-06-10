import Navbar from '@/components/consultation/Navbar'
import Sidebar from '@/components/consultation/Sidebar'
import React, { ReactNode } from 'react'

const ConsultationLayout = ({children}:{children:ReactNode}) => {
  return (
    <main className='relative bg-dark-2'>
        <Navbar />
        <div className="flex">
            <Sidebar />

            <section className="flex w-[80vw] min-h-screen flex-1 flex-col px-6 pb-6 pt-24 max-md:pb-14 sm:px-14">
                <div className="w-full">
                    {children}
                </div>
            </section>
        </div>
    </main>
  )
}

export default ConsultationLayout
