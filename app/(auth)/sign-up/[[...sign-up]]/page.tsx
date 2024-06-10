import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <main className='flex bg-dark-2 w-full h-full flex-center'>
      <SignUp/>
    </main>
  )
}

export default SignUpPage
