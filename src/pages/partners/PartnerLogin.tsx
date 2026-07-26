import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../config/firebase'
import { getCurrentPartner } from '../../service/partners.service'

function PartnerLogin() {
  const { t } = useTranslation('partners-portal')
  const notPartnerError = t('login.errors.notPartner')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      await signInWithEmailAndPassword(auth, email, password)

      // Validate the user has a partner role before accessing the portal
      try {
        await getCurrentPartner()
      } catch {
        await signOut(auth)
        setError(notPartnerError || 'Unexpected error check your credentials and try again')
        setLoading(false)
        return
      }

      navigate('/partners/portal', { replace: true })
    } catch (err: any) {
      const messages: Record<string, string> = {
        'auth/invalid-credential': t('login.errors.invalidCredential'),
        'auth/user-not-found': t('login.errors.userNotFound'),
        'auth/too-many-requests': t('login.errors.tooManyRequests'),
      }
      setError(messages[err.code] || err.message)
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-app px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-heading mb-2">
            {t('login.title')}
          </h1>
          <p className="text-body">
            {t('login.subtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-ui p-8 shadow-card">
          {error && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-sm text-red-700">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-sm font-medium text-heading mb-1">
              {t('login.email')}
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2.5 border border-ui rounded-lg text-body focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent-500)]"
              placeholder={t('login.emailPlaceholder')}
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-heading mb-1">
              {t('login.password')}
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2.5 border border-ui rounded-lg text-body focus:outline-none focus:ring-2 focus:ring-[color:var(--color-accent-500)]"
              placeholder={t('login.passwordPlaceholder')}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full btn-primary py-3 font-semibold hover:shadow-lg transition-all"
          >
            {loading ? t('login.submitting') : t('login.submit')}
          </button>

          <div className="mt-6 text-center">
            <Link
              to="/partners"
              className="text-sm text-[color:var(--color-accent-700)] hover:underline"
            >
              {t('login.backToPartners')}
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}

export default PartnerLogin