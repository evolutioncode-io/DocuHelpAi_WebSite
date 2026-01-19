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
      label: t('categories.banking.label'),
      title: t('categories.banking.title'),
      color: 'from-[color:var(--color-neutral-100)] to-[color:var(--color-neutral-100)]',
      iconPath: 'M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z', // banco
    },
    {
      label: t('categories.legal.label'),
      title: t('categories.legal.title'),
      color: 'from-[color:var(--color-neutral-100)] to-[color:var(--color-neutral-100)]',
      iconPath: 'M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75', // legal
    },
    {
      label: t('categories.notarial.label'),
      title: t('categories.notarial.title'),
      color: 'from-[color:var(--color-neutral-100)] to-[color:var(--color-neutral-100)]',
      iconPath: 'M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75', // documento
    },
    {
      label: t('categories.technology.label'),
      title: t('categories.technology.title'),
      color: 'from-[color:var(--color-neutral-100)] to-[color:var(--color-neutral-100)]',
      iconPath: 'M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z', // tech
    },
    {
      label: t('categories.useCases.label'),
      title: t('categories.useCases.title'),
      color: 'from-[color:var(--color-neutral-100)] to-[color:var(--color-neutral-100)]',
      iconPath: 'M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z', // casos
    },
    {
      label: t('categories.roi.label'),
      title: t('categories.roi.title'),
      color: 'from-[color:var(--color-neutral-100)] to-[color:var(--color-neutral-100)]',
      iconPath: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z', // ROI
    },
  ]

  const featuredTopics = [t('featured.topics.one'), t('featured.topics.two'), t('featured.topics.three')]

  return (
    <div className="min-h-screen bg-app">
      <section className="relative bg-surface py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(254, 201, 48, 0.15)', color: '#000000' }}>{t('hero.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-heading relative">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed relative">{t('hero.subtitle')}</p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-gradient-secondary rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 p-12 items-center">
            <div className="text-white text-left">
              <div className="inline-block mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">{t('featured.badge')}</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">{t('featured.title')}</h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">{t('featured.description')}</p>
              <a
                href="#"
                className="inline-block bg-white text-[color:var(--color-accent-700)] px-8 py-4 rounded-xl font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all"
                aria-label={t('featured.cta')}
              >
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
              className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] rounded-2xl hover:shadow-2xl transition-all overflow-hidden group cursor-pointer"
            >
              <div
                className={`bg-surface-muted p-8 transition-all`}
              >
                <div className="mb-4">
                  <svg
                    className="w-12 h-12 text-[color:var(--color-primary-800)] transition-colors"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={category.iconPath}
                    />
                  </svg>
                </div>
                <div className="inline-block mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-[color:var(--color-primary-900)]/70">{category.label}</span>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-3 text-heading transition-colors">{category.title}</h2>
                <p className="text-body mb-6 leading-relaxed">{t('articleDescription')}</p>
                <a href="#" className="link font-semibold inline-flex items-center gap-2" aria-label={`${t('readMore')}: ${category.title}`}>
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

      <section className="bg-gradient-secondary py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="flex justify-center mb-6">
            <svg
              className="w-14 h-14 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l9 6 9-6M3 8v8h18V8"
              />
            </svg>
          </div>
          <h2 className="text-4xl font-bold mb-6 text-white">{t('newsletter.title')}</h2>
          <p className="text-xl mb-10 text-white/90">{t('newsletter.subtitle')}</p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder={t('newsletter.placeholder')}
              className="flex-1 px-6 py-4 rounded-xl text-[color:var(--color-neutral-900)] focus:outline-none focus:ring-2 focus:ring-white"
              aria-label={t('newsletter.placeholder')}
              required
            />
            <button className="bg-white text-[color:var(--color-accent-700)] px-8 py-4 rounded-xl font-bold hover:bg-surface-muted transition-colors shadow-lg" type="button" aria-label={t('newsletter.button')}>
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

