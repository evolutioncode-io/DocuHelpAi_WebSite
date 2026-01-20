import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function LocalizedRoutes() {
  const location = useLocation()
  const { i18n } = useTranslation()

  useEffect(() => {
    // Sync language with URL path
    const normalizedPath = location.pathname.toLowerCase()
    const isSpanish = normalizedPath.startsWith('/es')
    const isPortuguese = normalizedPath.startsWith('/pt-br')
    if (isSpanish && i18n.language !== 'es') {
      i18n.changeLanguage('es')
    } else if (isPortuguese && i18n.language !== 'pt-BR') {
      i18n.changeLanguage('pt-BR')
    } else if (!isSpanish && !isPortuguese && i18n.language !== 'en') {
      i18n.changeLanguage('en')
    }
  }, [location.pathname, i18n])

  return <Outlet />
}

export default LocalizedRoutes

