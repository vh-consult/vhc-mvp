import { useState } from "react"

export const useUser = () => {
    const [role, setRole] = useState('')
    const [companyId, setCompanyId] = useState('')
    const user = {
        id: ''
    }
    return {
        role,
        companyId,
        user
    }
}