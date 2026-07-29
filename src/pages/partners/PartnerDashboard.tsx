import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { axiosInstance } from '../../service/axiosInstance'
import { useAuth } from '../../providers/AuthProvider'

function PartnerDashboard() {
  const { t } = useTranslation('partners-portal')
  const { user } = useAuth()
  const [companiesCount, setCompaniesCount] = useState(0)
  const [trainingsCount, setTrainingsCount] = useState(0)

  useEffect(() => {
    if (!user) return
    const abort = new AbortController()
    let active = true

    const fetchWithRetry = (url: string, retries = 2, delay = 2000): Promise<any> =>
      axiosInstance.get(url, { signal: abort.signal, timeout: 5000 })
        .catch(err => {
          if (!active) throw err
          if (retries > 0) {
            return new Promise(r => setTimeout(r, delay))
              .then(() => active ? fetchWithRetry(url, retries - 1, delay) : Promise.reject(err))
          }
          throw err
        })

    fetchWithRetry(`/partners/companies/${user.uid}`)
      .then(res => active && setCompaniesCount(res?.data?.count ?? 0))
      .catch(() => active && setCompaniesCount(0))
    fetchWithRetry(`/partners/get-badges/${user.uid}`)
      .then(res => active && setTrainingsCount(res?.data?.length ?? 0))
      .catch(() => active && setTrainingsCount(0))

    return () => { active = false; abort.abort() }
  }, [user])

  return (
    <div className="flex-1 p-6 md:p-10">
      <h1 className="font-['Bricolage_Grotesque',sans-serif] text-2xl font-bold mb-2">{t('dashboard.title')}</h1>
      <p className="text-sm text-[#64748B] mb-6">{t('dashboard.subtitle')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-5">
          <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1">{t('dashboard.activeClients')}</p>
          <p className="text-2xl font-bold">{companiesCount}</p>
        </div>
        <div className="bg-white border border-[#E2E8F0] rounded-xl p-5">
          <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wider mb-1">{t('dashboard.trainingsCompleted')}</p>
          <p className="text-2xl font-bold">{trainingsCount}</p>
        </div>
      </div>
    </div>
  )
}

export default PartnerDashboard