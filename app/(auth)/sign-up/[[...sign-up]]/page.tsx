import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <SignUp fallbackRedirectUrl={'/user/activate-account'}/>
  )
}

export default SignUpPage
