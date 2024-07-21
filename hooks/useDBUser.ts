import { BookingParams } from '@/lib/actions/appointment.actions'
import { getAdminCompany } from '@/lib/actions/company.actions'
import { getUser } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

const useDBUser = () => {
    const {user} = useUser()
    const [companyId, setCompanyId] = useState<string>('')
    const [bookings, setBookings] = useState([])
    const clerkId = user?.id as string
    const [role, setRole] = useState<
    "Doctor"|"Patient"|
    "HospitalAdmin"|"PharmacyAdmin">()
    useEffect(() => {        
        if(!user) return;
        async function getUserFromDB() {
            const userData:UserParams = await getUser(clerkId)
            setRole(userData.userRole)
            setCompanyId(userData.company as string)
            setBookings(userData.bookings as any)
        }
        getUserFromDB()
    }, [user])

  return {role, clerkId, companyId, bookings}
}

export default useDBUser

