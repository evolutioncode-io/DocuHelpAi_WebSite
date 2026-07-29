import React, { createContext, useState, useEffect, useContext } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import type { User } from 'firebase/auth'
import { auth } from '@/config/firebase'
import { getCurrentPartner } from '@/service/partners.service'
import type { PartnerProfile } from '@/service/partners.service'

interface AuthContextValue {
  user: User | null
  partner: PartnerProfile | null
  loading: boolean
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  partner: null,
  loading: true,
})

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const [partner, setPartner] = useState<PartnerProfile | null>(null)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser)

      if (currentUser) {
        try {
          await currentUser.getIdToken()
          const profile = await getCurrentPartner()
          setPartner(profile)
        } catch {
          setPartner(null)
        }
      } else {
        setPartner(null)
      }

      setLoading(false)
    })

    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{ user, partner, loading }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
