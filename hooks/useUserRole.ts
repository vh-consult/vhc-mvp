import { getUserById } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

const useUserRole = () => {
    const {user} = useUser()
    const clerkId = user?.id as string
    const [role, setRole] = useState<
    "Doctor"|"Patient"|
    "HospitalAdmin"|"PharmacyAdmin">()
    useEffect(() => {        
        if(!user) return;

        async function getUserRole() {
            const userFromDB:UserParams = await getUserById(clerkId)
            return setRole(userFromDB.userRole);
        }
        getUserRole()
    }, [user])
  return {role, clerkId}
}

export default useUserRole
