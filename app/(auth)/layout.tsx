import React from 'react'

const layout = ({children}: {children:React.ReactNode}) => {
  return (
    <div className='min-h-sreen w-full bg-green-3 '>
        {children}
    </div>
  )
}

export default layout