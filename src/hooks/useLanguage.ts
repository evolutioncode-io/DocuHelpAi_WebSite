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
    privacy: '/privacy',
    terms: '/terms',
    cookies: '/cookies',
    security: '/security',
  },
  es: {
    home: '/es/',
    product: '/es/producto',
    useCases: '/es/casos-de-uso',
    pricing: '/es/precios',
    about: '/es/nosotros',
    contact: '/es/contacto',
    blog: '/es/blog',
    privacy: '/es/privacidad',
    terms: '/es/terminos',
    cookies: '/es/cookies',
    security: '/es/seguridad',
  },
  'pt-BR': {
    home: '/pt-br/',
    product: '/pt-br/produto',
    useCases: '/pt-br/casos-de-uso',
    pricing: '/pt-br/precos',
    about: '/pt-br/sobre',
    contact: '/pt-br/contato',
    blog: '/pt-br/blog',
    privacy: '/pt-br/privacidade',
    terms: '/pt-br/termos',
    cookies: '/pt-br/cookies',
    security: '/pt-br/seguranca',
  },
} as const

export function useLanguage() {
  const { i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()

  const currentLanguage = (() => {
    const resolved = (i18n.resolvedLanguage || i18n.language || 'en').toLowerCase()
    if (resolved.startsWith('es')) {
      return 'es'
    }
    if (resolved.startsWith('pt')) {
      return 'pt-BR'
    }
    return 'en'
  })() as SupportedLanguage

  // Extract language from URL path
  const getLanguageFromPath = (path: string): SupportedLanguage => {
    const normalizedPath = path.toLowerCase()
    if (normalizedPath === '/es' || normalizedPath.startsWith('/es/')) {
      return 'es'
    }
    if (normalizedPath === '/pt-br' || normalizedPath.startsWith('/pt-br/')) {
      return 'pt-BR'
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
      // Handle /pt-br route
      if ((currentPath === '/pt-br' || currentPath === '/pt-br/') && key === 'home') {
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

