import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

type PageMetadataOptions = {
  title?: string
  description?: string
  titleKey?: string
  descriptionKey?: string
  namespace?: string
  image?: string
  type?: string
}

// Helper function to get or create meta element
function getOrCreateMeta(attr: string, value: string, property = false) {
  const selector = property ? `meta[property="${attr}"]` : `meta[name="${attr}"]`
  let meta = document.head.querySelector<HTMLMetaElement>(selector)
  if (!meta) {
    meta = document.createElement('meta')
    if (property) {
      meta.setAttribute('property', attr)
    } else {
      meta.setAttribute('name', attr)
    }
    document.head.appendChild(meta)
  }
  meta.setAttribute('content', value)
  return meta
}

// Helper function to get or create link element
function getOrCreateLink(rel: string, href: string, hreflang?: string) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`
  let link = document.head.querySelector<HTMLLinkElement>(selector)
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', rel)
    if (hreflang) {
      link.setAttribute('hreflang', hreflang)
    }
    document.head.appendChild(link)
  }
  link.setAttribute('href', href)
  return link
}

export function usePageMetadata({
  title,
  description,
  titleKey,
  descriptionKey,
  namespace = 'meta',
  image = 'https://documentoiq.com/og-image.jpg',
  type = 'website',
}: PageMetadataOptions) {
  const { t } = useTranslation(namespace)
  const location = useLocation()

  // Use translation keys if provided, otherwise use direct strings
  const finalTitle = titleKey ? t(titleKey) : title || ''
  const finalDescription = descriptionKey ? t(descriptionKey) : description || ''

  // Get current language and URLs
  const currentPath = location.pathname
  const isSpanish = currentPath.startsWith('/es')
  const currentLang = isSpanish ? 'es' : 'en'
  const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://documentoiq.com'
  const currentUrl = `${baseUrl}${currentPath}`
  const currentPathWithoutLang = isSpanish ? currentPath.replace('/es', '') || '/' : currentPath
  const enPath = currentPathWithoutLang === '/' ? '/' : currentPathWithoutLang
  const esPath = currentPathWithoutLang === '/' ? '/es/' : `/es${currentPathWithoutLang}`

  // Update lang attribute on HTML element
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = currentLang
    }
  }, [currentLang])

  // Update title
  useEffect(() => {
    if (typeof document === 'undefined' || !finalTitle) {
      return
    }

    const previousTitle = document.title
    document.title = finalTitle

    return () => {
      document.title = previousTitle
    }
  }, [finalTitle])

  // Update all meta tags and structured data
  useEffect(() => {
    if (typeof document === 'undefined') {
      return
    }

    // Basic meta tags
    getOrCreateMeta('description', finalDescription)
    getOrCreateMeta('title', finalTitle)

    // Open Graph tags
    getOrCreateMeta('og:title', finalTitle, true)
    getOrCreateMeta('og:description', finalDescription, true)
    getOrCreateMeta('og:image', image, true)
    getOrCreateMeta('og:url', currentUrl, true)
    getOrCreateMeta('og:type', type, true)
    getOrCreateMeta('og:site_name', 'DocumentoIQ', true)
    getOrCreateMeta('og:locale', currentLang === 'es' ? 'es_ES' : 'en_US', true)

    // Twitter Card tags
    getOrCreateMeta('twitter:card', 'summary_large_image')
    getOrCreateMeta('twitter:title', finalTitle)
    getOrCreateMeta('twitter:description', finalDescription)
    getOrCreateMeta('twitter:image', image)
    getOrCreateMeta('twitter:url', currentUrl)

    // Canonical URL
    getOrCreateLink('canonical', currentUrl)

    // Hreflang tags
    getOrCreateLink('alternate', `${baseUrl}${enPath}`, 'en')
    getOrCreateLink('alternate', `${baseUrl}${esPath}`, 'es')
    getOrCreateLink('alternate', `${baseUrl}${enPath}`, 'x-default')

    // Structured Data (JSON-LD)
    const existingScript = document.head.querySelector('script[type="application/ld+json"]#documentoiq-structured-data')
    if (existingScript) {
      existingScript.remove()
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'DocumentoIQ',
      url: baseUrl,
      logo: `${baseUrl}/logo.png`,
      description: finalDescription,
      sameAs: [
        // Add social media URLs when available
        // 'https://www.facebook.com/documentoiq',
        // 'https://twitter.com/documentoiq',
        // 'https://www.linkedin.com/company/documentoiq',
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'Customer Service',
        availableLanguage: ['English', 'Spanish'],
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '127',
      },
    }

    const webSiteStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'DocumentoIQ',
      url: baseUrl,
      alternateName: ['DocumentoIQ AI', 'Document IQ'],
      description: finalDescription,
      inLanguage: [currentLang === 'es' ? 'es-ES' : 'en-US', currentLang === 'es' ? 'en-US' : 'es-ES'],
      potentialAction: {
        '@type': 'SearchAction',
        target: {
          '@type': 'EntryPoint',
          urlTemplate: `${baseUrl}/search?q={search_term_string}`,
        },
        'query-input': 'required name=search_term_string',
      },
    }

    const breadcrumbStructuredData = {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: baseUrl,
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: finalTitle,
          item: currentUrl,
        },
      ],
    }

    // Create and append structured data scripts
    const script1 = document.createElement('script')
    script1.type = 'application/ld+json'
    script1.id = 'documentoiq-structured-data-org'
    script1.textContent = JSON.stringify(structuredData)
    document.head.appendChild(script1)

    const script2 = document.createElement('script')
    script2.type = 'application/ld+json'
    script2.id = 'documentoiq-structured-data-website'
    script2.textContent = JSON.stringify(webSiteStructuredData)
    document.head.appendChild(script2)

    const script3 = document.createElement('script')
    script3.type = 'application/ld+json'
    script3.id = 'documentoiq-structured-data-breadcrumb'
    script3.textContent = JSON.stringify(breadcrumbStructuredData)
    document.head.appendChild(script3)

    return () => {
      // Cleanup structured data scripts on unmount
      document.head.querySelectorAll('script[id^="documentoiq-structured-data"]').forEach((el) => el.remove())
    }
  }, [finalTitle, finalDescription, currentUrl, image, type, currentLang, baseUrl, enPath, esPath])

  // Cleanup hreflang tags on unmount
  useEffect(() => {
    return () => {
      if (typeof document !== 'undefined') {
        document.head.querySelectorAll('link[rel="alternate"][hreflang]').forEach((el) => el.remove())
      }
    }
  }, [])
}
