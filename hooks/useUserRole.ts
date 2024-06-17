import { getUserById } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

const useUserRole = () => {
    const {user} = useUser()
    const [userRole, setUserRole] = useState<
    "doctor"|"patient"|
    "hospitalAdmin"|"pharmacyAdmin">()
    useEffect(() => {        
        if(!user) return;

        async function getUserRole() {
            const userFromDB:UserParams = await getUserById(user?.id as string)
            return setUserRole(userFromDB.role);
        }
        getUserRole()
    }, [user])
  return {userRole}
}

export default useUserRole
