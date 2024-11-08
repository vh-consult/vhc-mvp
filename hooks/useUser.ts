import { useState } from "react"

export const useUser = () => {
    const [role, setRole] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    const [companyId, setCompanyId] = useState('')
    const user = {
        id: '',
        firstName: '',
        lastName: '',
        emailAddress: '',
        phoneNumber: '',
        imageUrl: ''
    }
    return {
        role,
        companyId,
        user,
        isLoaded
    }
}