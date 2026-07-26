import React, { useEffect, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../config/firebase'
import { useAuth } from '../../providers/AuthProvider'
import { signOutAndClear } from '../../lib/signOut'

interface AutoLogoutProps {
  children: React.ReactNode
}

export const AutoLogout: React.FC<AutoLogoutProps> = ({ children }) => {
  const navigate = useNavigate()
  const timerId = useRef<ReturnType<typeof setTimeout> | null>(null)
  const isLoggingOut = useRef(false)
  const { user } = useAuth()
  
  // 15 minutes in milliseconds
  const inactivityTime = 15 * 60 * 1000 

  const resetTimer = useCallback(() => {
    if (!user) return
    if (timerId.current) clearTimeout(timerId.current)
    
    timerId.current = setTimeout(() => {
      if (auth.currentUser && !isLoggingOut.current) {
        isLoggingOut.current = true
        ;(async () => {
          try {
            await signOutAndClear()
            navigate('/partners/login', { replace: true })
          } catch {
          } finally {
            isLoggingOut.current = false
          }
        })()
      }
    }, inactivityTime)
  }, [inactivityTime, navigate, user])

  useEffect(() => {
    if (!user) return
    
    const events = ['mousemove', 'mousedown', 'keydown', 'touchstart']
    events.forEach((event) => window.addEventListener(event, resetTimer))
    resetTimer()
    
    return () => {
      events.forEach((event) => window.removeEventListener(event, resetTimer))
      if (timerId.current) clearTimeout(timerId.current)
    }
  }, [resetTimer, user])

  return <>{children}</>
}

export default AutoLogout
