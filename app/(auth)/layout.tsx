import React from 'react'

const layout = ({children} : {children: React.ReactNode}) => {
  return (
    <main className='min-h-screen flex flex-center w-full bg-green-3'>
      {children}
    </main>
  )
}

export default layout
