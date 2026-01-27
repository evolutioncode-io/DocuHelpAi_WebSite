import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'

import { supportedLanguages, type SupportedLanguage } from '../utils/i18n'

// Route mappings for SEO-friendly URLs
const routeMappings = {
  en: {
    home: '/',
    product: '/product',
    legalHelpAiNotaries: '/legal-help-ai-notaries',
    legalHelpAiBanking: '/legal-help-ai-banking',
    useCases: '/use-cases',
    about: '/about',
    contact: '/contact',
    blog: '/blog',
    privacy: '/privacy',
    terms: '/terms',
    cookies: '/cookies',
    security: '/security',
    blog00Idp: '/blog/what-is-intelligent-document-processing-idp',
    blog01Invest: '/blog/is-investing-in-custom-ai-worth-it',
    blog02Solutions: '/blog/custom-ai-solutions-how-to-power-up-your-business',
    blog03Future: '/blog/the-future-of-legal-work-how-ai-is-transforming-document-management',
    blog04Beyond: '/blog/beyond-the-ai-model-war-why-application-led-ai-wins-in-2026',
    blog05Procedure: '/blog/how-legalhelp-ai-is-transforming-legal-document-processing',
    blog06Human: '/blog/why-ai-needs-human-logic-to-be-truly-useful',
    blog07Custom: '/blog/tailored-ai-for-legal-document-processing',
    blog08AiAction: '/blog/ai-in-action-what-separates-implementation-from-pilot',
  },
  es: {
    home: '/es/',
    product: '/es/producto',
    legalHelpAiNotaries: '/es/legal-help-ai-notarias',
    legalHelpAiBanking: '/es/legal-help-ai-banca',
    useCases: '/es/casos-de-uso',
    about: '/es/nosotros',
    contact: '/es/contacto',
    blog: '/es/blog',
    privacy: '/es/privacidad',
    terms: '/es/terminos',
    cookies: '/es/cookies',
    security: '/es/seguridad',
    blog00Idp: '/es/blog/que-es-procesamiento-inteligente-documentos-idp',
    blog01Invest: '/es/blog/vale-la-pena-invertir-en-ia-personalizada',
    blog02Solutions: '/es/blog/soluciones-de-ia-a-medida-como-potenciar-tu-empresa',
    blog03Future: '/es/blog/el-futuro-del-trabajo-legal-como-la-ia-esta-transformando-la-gestion-de-documentos',
    blog04Beyond: '/es/blog/mas-alla-de-la-guerra-de-modelos-de-ia-por-que-la-ia-liderada-por-aplicaciones-gana-en-2026',
    blog05Procedure: '/es/blog/como-legalhelp-ai-esta-transformando-el-procesamiento-de-documentos-legales',
    blog06Human: '/es/blog/por-que-la-ia-necesita-logica-humana-para-ser-realmente-util',
    blog07Custom: '/es/blog/ia-a-medida-para-el-procesamiento-de-documentos-legales',
    blog08AiAction: '/es/blog/ia-en-accion-que-separa-una-implementacion-exitosa-de-un-piloto',
  },
  'pt-BR': {
    home: '/pt-br/',
    product: '/pt-br/product',
    legalHelpAiNotaries: '/pt-br/legal-help-ai-notarios',
    legalHelpAiBanking: '/pt-br/legal-help-ai-bancario',
    useCases: '/pt-br/casos-de-uso',
    about: '/pt-br/sobre',
    contact: '/pt-br/contato',
    blog: '/pt-br/blog',
    privacy: '/pt-br/privacidade',
    terms: '/pt-br/termos',
    cookies: '/pt-br/cookies',
    security: '/pt-br/seguranca',
    blog00Idp: '/pt-br/blog/o-que-e-processamento-inteligente-documentos-idp',
    blog01Invest: '/pt-br/blog/vale-a-pena-investir-em-ia-personalizada',
    blog02Solutions: '/pt-br/blog/solucoes-de-ia-sob-medida-como-potencializar-sua-empresa',
    blog03Future: '/pt-br/blog/o-futuro-do-trabalho-juridico-como-a-ia-esta-transformando-a-gestao-de-documentos',
    blog04Beyond: '/pt-br/blog/alem-da-guerra-de-modelos-de-ia-por-que-a-ia-liderada-por-aplicativos-vence-em-2026',
    blog05Procedure: '/pt-br/blog/como-a-legalhelp-ai-esta-transformando-o-processamento-de-documentos-juridicos',
    blog06Human: '/pt-br/blog/por-que-a-ia-precisa-da-logica-humana-para-ser-realmente-util',
    blog07Custom: '/pt-br/blog/ia-sob-medida-para-o-processamento-de-documentos-juridicos',
    blog08AiAction: '/pt-br/blog/ia-em-acao-o-que-separa-uma-implementacao-de-sucesso-de-um-piloto',
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

