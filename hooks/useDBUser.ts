import { getUser } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

const useDBUser = () => {
    const {user} = useUser()
    const [companyId, setCompanyId] = useState<string>('')
    const [bookings, setBookings] = useState([])
    const [dbUser, setDbUser] = useState([])
    const clerkId = user?.id as string
    const [role, setRole] = useState<
    "Doctor"|"Patient"|
    "HospitalAdmin"|"PharmacyAdmin">()
    useEffect(() => {        
        if(!user) return;
        async function getUserFromDB() {
            const userData:any = await getUser(clerkId)
            setDbUser(userData)
            setRole(userData.userRole)
            setCompanyId(userData.company as string)
            setBookings(userData.bookings as any)
        }
        getUserFromDB()
    }, [user])

  return {role, clerkId, companyId, bookings}
}

export default useDBUser
