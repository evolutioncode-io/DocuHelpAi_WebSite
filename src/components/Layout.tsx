import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { LanguageSelector } from './LanguageSelector'
import { useLanguage } from '../hooks/useLanguage'

import logoBlack from '../assets/logos/Documento_IQ_black.png'
import logoWhite from '../assets/logos/Documento_IQ_white.png'

const baseNavLinkClasses = 'text-body hover:text-[color:var(--color-accent-500)] font-medium transition-colors cursor-pointer'

const mobileNavLinkClasses =
  'block text-body hover:text-[color:var(--color-accent-500)] font-medium transition-colors py-2'

function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const location = useLocation()
  const { t } = useTranslation('common')
  const { getLocalizedRoute } = useLanguage()

  useEffect(() => {
    setMobileMenuOpen(false)
  }, [location.pathname])

  const year = new Date().getFullYear()

  const navItems = [
    { labelKey: 'nav.notary', pathKey: 'legalHelpAiNotaries' as const },
    { labelKey: 'nav.banking', pathKey: 'legalHelpAiBanking' as const },
    { labelKey: 'nav.useCases', pathKey: 'useCases' as const },
    { labelKey: 'nav.blog', pathKey: 'blog' as const },
    { labelKey: 'nav.about', pathKey: 'about' as const },
    { labelKey: 'nav.contact', pathKey: 'contact' as const },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-app">
      <div className="bg-[#FEC930] text-black text-center py-2 px-4 text-sm font-semibold">
        <span>{t('footer.banner')}</span>
      </div>

      <header className="bg-surface shadow-md sticky top-0 z-50 border-b border-[color:var(--color-neutral-400)]/40">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              to={getLocalizedRoute('home')}
              className="flex items-center cursor-pointer"
            >
              <img src={logoBlack} alt="DocumentoIQ Logo" className="h-8 w-auto" />
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.pathKey}
                  to={getLocalizedRoute(item.pathKey)}
                  className={({ isActive }) =>
                    `${baseNavLinkClasses} ${isActive ? 'text-[color:var(--color-accent-700)]' : ''}`
                  }
                >
                  {t(item.labelKey)}
                </NavLink>
              ))}

              {/* Partners dropdown */}
              <div className="relative group">
                <NavLink
                  to={getLocalizedRoute('partners')}
                  className={({ isActive }) =>
                    `${baseNavLinkClasses} flex items-center gap-1 ${isActive ? 'text-[color:var(--color-accent-700)]' : ''}`
                  }
                >
                  {t('nav.partners')}
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </NavLink>

                <div className="absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-ui py-2 z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <NavLink
                      to={getLocalizedRoute('partners')}
                      className="block px-4 py-2 text-sm text-body hover:bg-surface-muted transition-colors"
                    >
                      {t('nav.partnersProgram')}
                    </NavLink>
                    <Link
                      to="/partners/login"
                      className="block px-4 py-2 text-sm text-body hover:bg-surface-muted transition-colors"
                    >
                      {t('nav.partnersLogin')}
                    </Link>
                  </div>
              </div>
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <LanguageSelector />
              <a href="https://meetings.hubspot.com/hpensado3" target="_blank" rel="noopener noreferrer">
                <button className="btn-primary px-6 py-3 font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  {t('cta.startFree')}
                </button>
              </a>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-surface-muted transition-colors"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={t('nav.menu')}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6 text-body" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div id="mobile-menu" className="lg:hidden mt-4 pb-4 border-t border-[color:var(--color-neutral-400)]/40 pt-4" role="menu">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.pathKey}
                    to={getLocalizedRoute(item.pathKey)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `${mobileNavLinkClasses} ${isActive ? 'text-[color:var(--color-accent-700)]' : ''}`
                    }
                  >
                    {t(item.labelKey)}
                  </NavLink>
                ))}
                <NavLink
                  to={getLocalizedRoute('partners')}
                  onClick={() => setMobileMenuOpen(false)}
                  className={mobileNavLinkClasses}
                >
                  {t('nav.partnersProgram')}
                </NavLink>
                <Link
                  to="/partners/login"
                  className={mobileNavLinkClasses}
                >
                  {t('nav.partnersLogin')}
                </Link>
                <div className="flex items-center justify-between mt-2">
                  <LanguageSelector />
                  <a href="https://meetings.hubspot.com/hpensado3" target="_blank" rel="noopener noreferrer">
                    <button className="btn-primary px-6 py-3 font-semibold">
                      {t('cta.startFree')}
                    </button>
                  </a>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="mb-6">
                <img src={logoWhite} alt="DocumentoIQ Logo" className="h-10 w-auto" />
              </div>
              <p className="text-white/75 leading-relaxed mb-4">{t('footer.description')}</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/company/documentoiq/" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
                <a href="https://www.youtube.com/@DocumentoIQ_Official" target="_blank" rel="noopener noreferrer" className="text-white/75 hover:text-white transition-colors" aria-label="YouTube">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.163a3.003 3.003 0 0 0-2.11-2.11C19.517 3.545 12 3.545 12 3.545s-7.517 0-9.388.508a3.003 3.003 0 0 0-2.11 2.11C0 8.033 0 12 0 12s0 3.967.502 5.837a3.003 3.003 0 0 0 2.11 2.11c1.871.508 9.388.508 9.388.508s7.517 0 9.388-.508a3.003 3.003 0 0 0 2.11-2.11C24 15.967 24 12 24 12s0-3.967-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t('footer.product')}</h4>
              <ul className="space-y-3">
                <li>
                  <NavLink to={getLocalizedRoute('product')} className={baseNavLinkClasses}>
                    {t('footer.howItWorks')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to={getLocalizedRoute('useCases')} className={baseNavLinkClasses}>
                    {t('footer.useCases')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to={getLocalizedRoute('security')} className={baseNavLinkClasses}>
                    {t('footer.security')}
                  </NavLink>
                </li>

              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t('footer.company')}</h4>
              <ul className="space-y-3">
                <li>
                  <NavLink to={getLocalizedRoute('about')} className={baseNavLinkClasses}>
                    {t('footer.about')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to={getLocalizedRoute('blog')} className={baseNavLinkClasses}>
                    {t('footer.blog')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to={getLocalizedRoute('contact')} className={baseNavLinkClasses}>
                    {t('footer.contact')}
                  </NavLink>
                </li>
                <li>
                  <NavLink to={getLocalizedRoute('partners')} className={baseNavLinkClasses}>
                    {t('nav.partners')}
                  </NavLink>
                </li>

              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t('footer.legal')}</h4>
              <ul className="space-y-3">
                <li>
                  <Link to={getLocalizedRoute('privacy')} className="text-white/75 hover:text-white transition-colors">
                    {t('footer.privacy')}
                  </Link>
                </li>
                <li>
                  <Link to={getLocalizedRoute('terms')} className="text-white/75 hover:text-white transition-colors">
                    {t('footer.terms')}
                  </Link>
                </li>
                <li>
                  <Link to={getLocalizedRoute('cookies')} className="text-white/75 hover:text-white transition-colors">
                    {t('footer.cookies')}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/15 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/75 text-sm">
              © {year} DocumentoIQ • {t('footer.rightsReserved')}
            </p>
            <div className="flex items-center gap-2 text-white/75 text-sm">
              <span>{t('footer.madeWith')}</span>
              <svg className="w-4 h-4 text-[color:var(--color-error)]" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{t('footer.inLatinAmerica')}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Layout
