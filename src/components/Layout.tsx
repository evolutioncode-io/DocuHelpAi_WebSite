import { useEffect, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { LanguageSelector } from './LanguageSelector'
import { useLanguage } from '../hooks/useLanguage'

const baseNavLinkClasses =
  'text-gray-700 hover:text-blue-600 font-medium transition-colors cursor-pointer'

const mobileNavLinkClasses =
  'block text-gray-700 hover:text-blue-600 font-medium transition-colors py-2'

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
    { labelKey: 'nav.product', pathKey: 'product' as const },
    { labelKey: 'nav.useCases', pathKey: 'useCases' as const },
    { labelKey: 'nav.pricing', pathKey: 'pricing' as const },
    { labelKey: 'nav.blog', pathKey: 'blog' as const },
    { labelKey: 'nav.about', pathKey: 'about' as const },
    { labelKey: 'nav.contact', pathKey: 'contact' as const },
  ]

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center py-2 px-4 text-sm">
        <span>{t('footer.banner')}</span>
      </div>

      <header className="bg-white shadow-md sticky top-0 z-50 border-b border-gray-100">
        <nav className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <Link
              to={getLocalizedRoute('home')}
              className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent cursor-pointer hover:from-blue-700 hover:to-purple-700 transition-all"
            >
              DocumentoIQ
            </Link>

            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <NavLink
                  key={item.pathKey}
                  to={getLocalizedRoute(item.pathKey)}
                  className={({ isActive }) =>
                    `${baseNavLinkClasses} ${isActive ? 'text-blue-600' : ''}`
                  }
                >
                  {t(item.labelKey)}
                </NavLink>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-4">
              <LanguageSelector />
              <Link to={getLocalizedRoute('contact')}>
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
                  {t('cta.startFree')}
                </button>
              </Link>
            </div>

            <button
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              aria-label={t('nav.menu')}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {mobileMenuOpen && (
            <div id="mobile-menu" className="lg:hidden mt-4 pb-4 border-t border-gray-100 pt-4" role="menu">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <NavLink
                    key={item.pathKey}
                    to={getLocalizedRoute(item.pathKey)}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `${mobileNavLinkClasses} ${isActive ? 'text-blue-600' : ''}`
                    }
                  >
                    {t(item.labelKey)}
                  </NavLink>
                ))}
                <div className="flex items-center justify-between mt-2">
                  <LanguageSelector />
                  <Link to={getLocalizedRoute('contact')}>
                    <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold">
                      {t('cta.startFree')}
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      <main className="flex-grow">
        <Outlet />
      </main>

      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                DocumentoIQ
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">{t('footer.description')}</p>
              <div className="flex gap-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
                  <NavLink to={getLocalizedRoute('pricing')} className={baseNavLinkClasses}>
                    {t('footer.pricing')}
                  </NavLink>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t('footer.apiDocs')}
                  </a>
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
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t('footer.careers')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-4">{t('footer.legal')}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t('footer.privacy')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t('footer.terms')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t('footer.cookies')}
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {t('footer.security')}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © {year} DocumentoIQ • {t('footer.rightsReserved')}
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <span>{t('footer.madeWith')}</span>
              <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
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

