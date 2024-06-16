"use client"
import { getUserById } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs'
import React, { useEffect } from 'react'

const UserRoleProvider = ({children}: {children:React.ReactNode}) => {
    const {user} = useUser()

    useEffect(() => {        
        if(!user) return;

        async function getUserRole() {
            const userFromDB:UserParams = await getUserById(user?.id as string)
            return userFromDB.role;
        }
        getUserRole()
    }, [user])
  return (
    <>
      {children}
    </>
  )
}

export default UserRoleProvider
