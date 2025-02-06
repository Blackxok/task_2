'use client'

import { createContext, useContext } from 'react'
import { AuthContextType } from '../types/authContext'

export const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuth AuthProvider ichida ishlatilishi kerak')
    }
    return context
}