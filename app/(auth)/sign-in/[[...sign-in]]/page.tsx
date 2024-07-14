import { SignIn } from '@clerk/nextjs'
import React from 'react'

const SignInPage = () => {
  return (
    <SignIn fallbackRedirectUrl={'/user/landing'}/>
  )
}

export default SignInPage
