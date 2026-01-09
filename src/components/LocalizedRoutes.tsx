import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function LocalizedRoutes() {
  const location = useLocation()
  const { i18n } = useTranslation()

  useEffect(() => {
    // Sync language with URL path
    const isSpanish = location.pathname.startsWith('/es')
    if (isSpanish && i18n.language !== 'es') {
      i18n.changeLanguage('es')
    } else if (!isSpanish && i18n.language !== 'en') {
      i18n.changeLanguage('en')
    }
  }, [location.pathname, i18n])

  return <Outlet />
}

export default LocalizedRoutes

