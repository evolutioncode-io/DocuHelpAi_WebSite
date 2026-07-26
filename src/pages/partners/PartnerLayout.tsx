import { useState, useEffect, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { auth } from '../../config/firebase'
import { signOutAndClear } from '../../lib/signOut'
import LanguageSelectorWrapper from './LanguageSelectorWrapper'
import ResourceCenter from './ResourceCenter'
import PartnerDashboard from './PartnerDashboard'
import AcademyView from './AcademyView'
import AutoLogout from './AutoLogout'
import { useAuth } from '../../providers/AuthProvider'

export default function PartnerLayout(): ReactNode {
  const { t } = useTranslation('partners-portal')
  const { user, partner, loading } = useAuth()
  const [view, setView] = useState<'resources' | 'dashboard' | 'academy'>('resources')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [section, setSection] = useState('all')
  const navigate = useNavigate()

  // Route guard: if Firebase user exists but no partner profile, redirect to login
  useEffect(() => {
    if (!loading && user && !partner) {
      signOutAndClear()
      navigate('/partners/login', { replace: true })
    }
  }, [user, partner, loading, navigate])

  if (loading) return null
  if (!user || !partner) return null

  const handleBackToHome = async () => {
    try {
      await signOutAndClear()
      navigate('/', { replace: true })
    } catch {
    }
  }

  return (
    <AutoLogout>
      <div className="min-h-screen font-['Plus_Jakarta_Sans',sans-serif] bg-[#F8FAFC] text-[#1E293B]">
        <aside id="sidebar" className={mobileOpen ? 'open' : ''} aria-label="Portal navigation">
          <div className="px-4 pt-6 pb-5 border-b border-[#EEEEEE]">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-[#FEC930] flex-shrink-0">
                <i className="fa-solid fa-file-circle-check text-black text-sm"></i>
              </div>
              <div>
                <div className="font-['Bricolage_Grotesque',sans-serif] font-bold text-black text-sm leading-none">{t('sidebar.documentoIQ')}</div>
                <div className="text-[#4a5568] text-xs mt-0.5">{t('sidebar.partnerPortal')}</div>
              </div>
            </div>
          </div>

          <nav className="flex-1 overflow-y-auto px-3 py-3" aria-label="Main navigation">
            <p className="nav-section-label">{t('sidebar.menu')}</p>
            <button className={`nav-item w-full text-left ${view === 'dashboard' ? 'active' : ''}`}
              onClick={() => { setView('dashboard'); setMobileOpen(false) }}>
              <span className="ic"><i className="fa-solid fa-chart-line"></i></span>
              {t('sidebar.dashboard')}
            </button>
            <button className={`nav-item w-full text-left ${view === 'resources' && section === 'all' ? 'active' : ''}`}
              onClick={() => { setView('resources'); setSection('all'); setMobileOpen(false) }}>
              <span className="ic"><i className="fa-solid fa-folder-open"></i></span>
              {t('sidebar.resourceCenter')}
            </button>
            <button className={`nav-item w-full text-left ${view === 'academy' ? 'active' : ''}`}
              onClick={() => { setView('academy'); setMobileOpen(false) }}>
              <span className="ic"><i className="fa-solid fa-graduation-cap"></i></span>
              {t('sidebar.academy')}
            </button>

          </nav>

          <div className="px-3 py-3 border-t border-[#EEEEEE]">
            <div className="flex items-center gap-2.5 px-2 pb-3 mb-3 border-b border-[#EEEEEE]">
              <div className="w-8 h-8 rounded-full bg-[#E2E8F0] flex items-center justify-center flex-shrink-0 text-xs font-bold">
                {auth.currentUser?.displayName?.charAt(0)?.toUpperCase() || 'P'}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[#1E293B] text-xs font-semibold truncate">{auth.currentUser?.displayName || 'Partner'}</div>
                <div className="text-[#4a5568] text-xs truncate">{auth.currentUser?.email || 'partner@email.com'}</div>
              </div>
            </div>
            <LanguageSelectorWrapper />
            <button onClick={handleBackToHome} className="mt-3 flex items-center gap-2 px-2 py-2 text-xs text-[#64748B] hover:text-[#1E293B] rounded-lg hover:bg-[#F1F5F9] transition-all font-medium w-full text-left border-none bg-transparent cursor-pointer">
              {t('sidebar.backToHome')}
            </button>
          </div>
        </aside>

        {mobileOpen && <div id="sidebar-overlay" onClick={() => setMobileOpen(false)} />}

        <main id="main">
          <div className="lg:hidden flex items-center justify-between px-4 py-3 bg-white border-b border-[#E2E8F0]">
            <button onClick={() => setMobileOpen(true)} className="text-xl p-1">
              <i className="fa-solid fa-bars"></i>
            </button>
            <div className="flex items-center gap-2">
              <i className="fa-solid fa-file-circle-check text-[#FEC930]"></i>
              <span className="font-bold text-sm">{t('sidebar.partnerPortal')}</span>
            </div>
            <LanguageSelectorWrapper />
          </div>

          {view === 'resources' && <ResourceCenter section={section} />}
          {view === 'dashboard' && <PartnerDashboard />}
          {view === 'academy' && <AcademyView />}
        </main>
      </div>
    </AutoLogout>
  )
}