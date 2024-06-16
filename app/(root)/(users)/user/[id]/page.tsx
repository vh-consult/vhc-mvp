import React from 'react'

const HomePage = ({ params }: { params: { id: string } }) => {

  return (
    <main className='size-full bg-dark-2'>
      {params.id}
    </main>
  )
}

export default HomePage