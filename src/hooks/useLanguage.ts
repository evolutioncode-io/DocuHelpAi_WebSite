import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

import { supportedLanguages, type SupportedLanguage } from '../utils/i18n'

// Route mappings for SEO-friendly URLs
const routeMappings = {
  en: {
    home: '/',
    product: '/product',
    useCases: '/use-cases',
    pricing: '/pricing',
    about: '/about',
    contact: '/contact',
    blog: '/blog',
  },
  es: {
    home: '/es/',
    product: '/es/producto',
    useCases: '/es/casos-de-uso',
    pricing: '/es/precios',
    about: '/es/nosotros',
    contact: '/es/contacto',
    blog: '/es/blog',
  },
} as const

export function useLanguage() {
  const { i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const currentLanguage = (i18n.language === 'es' ? 'es' : 'en') as SupportedLanguage

  // Extract language from URL path
  const getLanguageFromPath = (path: string): SupportedLanguage => {
    if (path.startsWith('/es/')) {
      return 'es'
    }
    return 'en'
  }

  // Sync language with URL
  useEffect(() => {
    const pathLang = getLanguageFromPath(location.pathname)
    if (pathLang !== currentLanguage && i18n.language !== pathLang) {
      i18n.changeLanguage(pathLang)
    }
  }, [location.pathname, currentLanguage, i18n])

  const changeLanguage = (newLang: SupportedLanguage) => {
    // Get current route key
    const currentPath = location.pathname
    let routeKey: keyof typeof routeMappings.en | null = null

    // Find matching route in current language
    for (const [key, path] of Object.entries(routeMappings[currentLanguage])) {
      // Exact match
      if (path === currentPath) {
        routeKey = key as keyof typeof routeMappings.en
        break
      }
      // Handle root routes
      if ((currentPath === '/' || currentPath === '') && key === 'home') {
        routeKey = 'home'
        break
      }
      // Handle /es route
      if ((currentPath === '/es' || currentPath === '/es/') && key === 'home') {
        routeKey = 'home'
        break
      }
    }

    // Default to home if route not found
    if (!routeKey) {
      routeKey = 'home'
    }

    // Navigate to same route in new language
    const newPath = routeMappings[newLang][routeKey]
    i18n.changeLanguage(newLang)
    navigate(newPath)
  }

  const getLocalizedRoute = (routeKey: keyof typeof routeMappings.en): string => {
    return routeMappings[currentLanguage][routeKey]
  }

  return {
    currentLanguage,
    changeLanguage,
    getLocalizedRoute,
    supportedLanguages,
  }
}

