import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <main className='min-h-screen flex flex-center w-screen bg-dark-2'>
      {children}
    </main>
  )
}

export default layout
