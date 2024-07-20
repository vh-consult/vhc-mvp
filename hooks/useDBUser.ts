import { getAdminCompany } from '@/lib/actions/company.actions'
import { getUser } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

const useDBUser = () => {
    const {user} = useUser()
    const [companyId, setCompanyId] = useState<string>('')
    const clerkId = user?.id as string
    const [role, setRole] = useState<
    "Doctor"|"Patient"|
    "HospitalAdmin"|"PharmacyAdmin">()
    useEffect(() => {        
        if(!user) return;

        async function getUserFromDB() {
            const userFromDB:UserParams = await getUser(clerkId)
            return setRole(userFromDB.userRole);
        }
        getUserFromDB()
    }, [user])
  return {role, clerkId, companyId}
}

export default useDBUser

