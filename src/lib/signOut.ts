import { signOut } from 'firebase/auth'
import { auth } from '@/config/firebase'

export const signOutAndClear = async (): Promise<void> => {
  await signOut(auth)
}
