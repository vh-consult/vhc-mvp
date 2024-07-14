import { SignUp } from '@clerk/nextjs'
import React from 'react'

const SignUpPage = () => {
  return (
    <SignUp fallbackRedirectUrl={'/account-activation'}/>
  )
}

export default SignUpPage
