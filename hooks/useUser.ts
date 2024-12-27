import { useState } from "react"

export const useUser = () => {
    const [role, setRole] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    const [companyId, setCompanyId] = useState('')
    const user = {
        id: '67334b3fc5e9d73666a5e79b',
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