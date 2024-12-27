import React from 'react'
import { Button } from '../ui/button'
import { redirect } from 'next/navigation'

const Logout = () => {
  return (
    <div className='fixed z-50 top-0 left-0 w-[100vw] h-[100vh] flex items-center justify-center bg-slate-900  '>
        <div className="w-[350px] h-[225px] flex flex-col items-center justify-center bg-white rounded-xl p-2">
            <span className="text-xl font-medium">
                Are you sure you want to log out?
            </span>
            <Button onClick={()=>{}} className='w-full h-[40px] border hover:bg-green-400 hover:text-white font-medium border-green-400 text-green-400 rounded-lg my-3'>
                No, cancel
            </Button>
            <Button onClick={()=>{redirect('/')}} >
                Yes, proceed
            </Button>
        </div>
    </div>
  )
}

export default Logout