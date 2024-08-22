import { getUser } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

const useDBUser = () => {
    const {user} = useUser()
    const [companyId, setCompanyId] = useState<string>('')
    const [dbUser, setDbUser] = useState<any>([])
    const clerkId = user?.id as string
    const [role, setRole] = useState<
    "Doctor"|"Patient"|
    "HospitalAdmin"|"PharmacyAdmin">()
    useEffect(() => {        
        if(!user) return;
        async function getUserFromDB() {
            const userData:any = await getUser(clerkId)
            setDbUser(userData)
            setRole(userData.type)
            setCompanyId(userData.company as string)
        }
        getUserFromDB()
    }, [clerkId])

  return {role, clerkId, companyId, dbUser}
}

export default useDBUser
