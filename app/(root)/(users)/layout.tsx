import React from 'react'

const UserLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <main className='w-full min-h-screen bg-dark-2 text-sky-2'>
      {children}
    </main>
  )
}

export default UserLayout
