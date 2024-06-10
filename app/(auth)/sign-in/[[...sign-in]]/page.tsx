import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <main className='flex bg-dark-2 h-screen w-full flex-center'>
      <SignIn />
    </main>
  )
}

export default SignInPage
