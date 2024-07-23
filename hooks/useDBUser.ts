// import { getUser } from '@/lib/actions/user.actions'
// import { useUser } from '@clerk/nextjs'
// import React, { useEffect, useState } from 'react'

// const useDBUser = () => {
//     const {user} = useUser()
//     const [companyId, setCompanyId] = useState<string>('')
//     const [bookings, setBookings] = useState([])
//     const clerkId = user?.id as string
//     const [role, setRole] = useState<
//     "Doctor"|"Patient"|
//     "HospitalAdmin"|"PharmacyAdmin">()
//     useEffect(() => {        
//         if(!user) return;
//         async function getUserFromDB() {
//             const userData:UserParams = await getUser(clerkId)
//             setRole(userData.userRole)
//             setCompanyId(userData.company as string)
//             setBookings(userData.bookings as any)
//         }
//         getUserFromDB()
//     }, [user])

//   return {role, clerkId, companyId, bookings}
// }

// export default useDBUser


import { getUser } from '@/lib/actions/user.actions'
import { useUser } from '@clerk/nextjs'
import React, { useEffect, useState } from 'react'

const useDBUser = () => {
    const { user } = useUser()
    const [companyId, setCompanyId] = useState<string>('')
    const [bookings, setBookings] = useState([])
    const clerkId = user?.id as string
    const [role, setRole] = useState<"Doctor"|"Patient"|
    "HospitalAdmin"|"PharmacyAdmin">()
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        if (!user) {
            setIsLoading(false)
            return
        }

        const timeout = 3000 // 3 seconds timeout

        async function getUserFromDB() {
            try {
                const timeoutPromise = new Promise((_, reject) => 
                    setTimeout(() => reject(new Error('Timeout: User data fetch took too long')), timeout)
                )
                const userDataPromise = getUser(clerkId)

                const userData: UserParams = await Promise.race([userDataPromise, timeoutPromise]) as UserParams

                setRole(userData.userRole)
                setCompanyId(userData.company as string)
                setBookings(userData.bookings as any)
                setIsLoading(false)
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An unknown error occurred')
                setIsLoading(false)
            }
        } 

        getUserFromDB()
    }, [user, clerkId])

    return { role, clerkId, companyId, bookings, isLoading, error }
}

export default useDBUser