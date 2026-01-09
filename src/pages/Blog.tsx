import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation } from 'react-router-dom'

import { usePageMetadata } from '../hooks/usePageMetadata'

function Blog() {
  const { t } = useTranslation('blog')
  const location = useLocation()

  usePageMetadata({
    titleKey: 'blog.title',
    descriptionKey: 'blog.description',
    namespace: 'meta',
  })

  // Article Schema for featured blog post
  useEffect(() => {
    const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://documentoiq.com'
    const currentUrl = `${baseUrl}${location.pathname}`
    const isSpanish = location.pathname.startsWith('/es')

    const articleSchema = {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: t('featured.title'),
      description: t('featured.description'),
      author: {
        '@type': 'Organization',
        name: 'DocumentoIQ',
      },
      publisher: {
        '@type': 'Organization',
        name: 'DocumentoIQ',
        logo: {
          '@type': 'ImageObject',
          url: `${baseUrl}/logo.png`,
        },
      },
      datePublished: '2025-01-20',
      dateModified: '2025-01-20',
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': currentUrl,
      },
      inLanguage: isSpanish ? 'es-ES' : 'en-US',
      articleSection: 'Document Automation',
      keywords: ['document automation', 'AI', 'OCR', 'intelligent document processing', 'legaltech'],
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'documentoiq-article-schema'
    script.textContent = JSON.stringify(articleSchema)
    document.head.appendChild(script)

    return () => {
      const existingScript = document.head.querySelector('script#documentoiq-article-schema')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [t, location.pathname])

  const categories = [
    {
      emoji: t('categories.banking.emoji'),
      label: t('categories.banking.label'),
      title: t('categories.banking.title'),
      color: 'from-amber-100 to-amber-200',
    },
    {
      emoji: t('categories.legal.emoji'),
      label: t('categories.legal.label'),
      title: t('categories.legal.title'),
      color: 'from-orange-100 to-orange-200',
    },
    {
      emoji: t('categories.notarial.emoji'),
      label: t('categories.notarial.label'),
      title: t('categories.notarial.title'),
      color: 'from-orange-100 to-orange-200',
    },
    {
      emoji: t('categories.technology.emoji'),
      label: t('categories.technology.label'),
      title: t('categories.technology.title'),
      color: 'from-green-100 to-green-200',
    },
    {
      emoji: t('categories.useCases.emoji'),
      label: t('categories.useCases.label'),
      title: t('categories.useCases.title'),
      color: 'from-pink-100 to-pink-200',
    },
    {
      emoji: t('categories.roi.emoji'),
      label: t('categories.roi.label'),
      title: t('categories.roi.title'),
      color: 'from-indigo-100 to-indigo-200',
    },
  ]

  const featuredTopics = [t('featured.topics.one'), t('featured.topics.two'), t('featured.topics.three')]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">{t('hero.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-amber-700 to-orange-700 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t('hero.subtitle')}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 p-12 items-center">
            <div className="text-white text-left">
              <div className="inline-block mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">{t('featured.badge')}</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">{t('featured.title')}</h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">{t('featured.description')}</p>
              <a href="#" className="inline-block bg-white text-amber-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all" aria-label={t('featured.cta')}>
                {t('featured.cta')}
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-white/90 space-y-4" role="list">
              {featuredTopics.map((item) => (
                <div key={item} className="flex items-center gap-3" role="listitem">
                  <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <article
              key={category.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group border border-gray-100"
            >
              <div
                className={`bg-gradient-to-br ${category.color} p-8 group-hover:from-white group-hover:to-white transition-all`}
              >
                <div className="text-5xl mb-4">{category.emoji}</div>
                <div className="inline-block mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-gray-900/60">{category.label}</span>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-amber-600 transition-colors">{category.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{t('articleDescription')}</p>
                <a href="#" className="text-amber-600 font-semibold hover:underline inline-flex items-center gap-2" aria-label={`${t('readMore')}: ${category.title}`}>
                  {t('readMore')}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-500 to-orange-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="text-5xl mb-6">{t('newsletter.emoji')}</div>
          <h2 className="text-4xl font-bold mb-6 text-white">{t('newsletter.title')}</h2>
          <p className="text-xl mb-10 text-white/90">{t('newsletter.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={t('newsletter.placeholder')}
              required
            />
            <button className="bg-white text-amber-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg" type="button" aria-label={t('newsletter.button')}>
              {t('newsletter.button')}
            </button>
          </div>
          <p className="mt-4 text-white/80 text-sm">{t('newsletter.disclaimer')}</p>
        </div>
      </section>
    </div>
  )
}

export default Blog

