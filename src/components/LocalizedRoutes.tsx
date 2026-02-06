import { Outlet, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { normalizeLanguage } from '../hooks/useLanguage'

function LocalizedRoutes() {
  const location = useLocation()
  const { i18n } = useTranslation()

  useEffect(() => {
    // Sync language with URL path segments
    const segments = location.pathname.split('/').filter(Boolean)
    const firstSegment = segments[0]?.toLowerCase()

    let pathLang: string = 'en'
    if (firstSegment === 'es') pathLang = 'es'
    else if (firstSegment === 'pt-br') pathLang = 'pt-BR'

    const currentNormalized = normalizeLanguage(i18n.language)

    if (pathLang !== currentNormalized) {
      i18n.changeLanguage(pathLang)
    }
  }, [location.pathname])

  return <Outlet />
}

export default LocalizedRoutes

