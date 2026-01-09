import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { usePageMetadata } from '../hooks/usePageMetadata'
import { useLanguage } from '../hooks/useLanguage'

function Pricing() {
  const { t } = useTranslation('pricing')
  const { getLocalizedRoute } = useLanguage()

  usePageMetadata({
    titleKey: 'pricing.title',
    descriptionKey: 'pricing.description',
    namespace: 'meta',
  })

  // FAQ Schema for SEO
  useEffect(() => {
    const faqSchema = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: t('faq.items.changePlan.question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: t('faq.items.changePlan.answer'),
          },
        },
        {
          '@type': 'Question',
          name: t('faq.items.limit.question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: t('faq.items.limit.answer'),
          },
        },
        {
          '@type': 'Question',
          name: t('faq.items.discounts.question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: t('faq.items.discounts.answer'),
          },
        },
        {
          '@type': 'Question',
          name: t('faq.items.contracts.question'),
          acceptedAnswer: {
            '@type': 'Answer',
            text: t('faq.items.contracts.answer'),
          },
        },
      ],
    }

    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.id = 'documentoiq-faq-schema'
    script.textContent = JSON.stringify(faqSchema)
    document.head.appendChild(script)

    return () => {
      const existingScript = document.head.querySelector('script#documentoiq-faq-schema')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [t])

  const checkIcon = (
    <svg className="w-5 h-5 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  )

  const crossIcon = (
    <svg className="w-5 h-5 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
              {t('hero.badge')}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            {t('hero.subtitle')}
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-600 flex-wrap">
            {[t('hero.features.noCommitment'), t('hero.features.cancelAnytime'), t('hero.features.spanishSupport')].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-200 p-8 hover:shadow-2xl transition-all">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">{t('plans.starter.name')}</h2>
              <p className="text-gray-600">{t('plans.starter.description')}</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">{t('plans.starter.price')}</span>
              </div>
              <p className="text-gray-600 text-sm">{t('plans.starter.priceSubtext')}</p>
            </div>
            <div className="space-y-4 mb-8">
              {[
                t('plans.starter.features.documents'),
                t('plans.starter.features.export'),
                t('plans.starter.features.support'),
                t('plans.starter.features.ocr'),
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Link to={getLocalizedRoute('contact')}>
              <button className="w-full bg-gray-800 text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors shadow-lg" aria-label={t('plans.starter.button')}>
                {t('plans.starter.button')}
              </button>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 transform lg:-translate-y-4 relative text-white">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">{t('plans.professional.badge')}</span>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">{t('plans.professional.name')}</h2>
              <p className="text-white/90">{t('plans.professional.description')}</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">{t('plans.professional.price')}</span>
                <span className="text-xl">{t('plans.professional.pricePeriod')}</span>
              </div>
              <p className="text-white/80 text-sm">{t('plans.professional.priceSubtext')}</p>
            </div>
            <div className="space-y-4 mb-8">
              {[
                t('plans.professional.features.documents'),
                t('plans.professional.features.processing'),
                t('plans.professional.features.api'),
                t('plans.professional.features.support'),
                t('plans.professional.features.zapier'),
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
            <Link to={getLocalizedRoute('contact')}>
              <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg" aria-label={t('plans.professional.button')}>
                {t('plans.professional.button')}
              </button>
            </Link>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-200 p-8 hover:shadow-2xl transition-all">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">{t('plans.enterprise.name')}</h2>
              <p className="text-gray-600">{t('plans.enterprise.description')}</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">{t('plans.enterprise.price')}</span>
              </div>
              <p className="text-gray-600 text-sm">{t('plans.enterprise.priceSubtext')}</p>
            </div>
            <div className="space-y-4 mb-8">
              {[
                t('plans.enterprise.features.documents'),
                t('plans.enterprise.features.support'),
                t('plans.enterprise.features.onboarding'),
                t('plans.enterprise.features.integrations'),
                t('plans.enterprise.features.sla'),
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Link to={getLocalizedRoute('contact')}>
              <button className="w-full border-2 border-gray-800 text-gray-800 py-4 rounded-xl font-semibold hover:bg-gray-800 hover:text-white transition-colors" aria-label={t('plans.enterprise.button')}>
                {t('plans.enterprise.button')}
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('comparison.title')}</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <tr>
                {[t('comparison.headers.feature'), t('comparison.headers.starter'), t('comparison.headers.professional'), t('comparison.headers.enterprise')].map((heading) => (
                  <th key={heading} className={`px-6 py-4 ${heading === t('comparison.headers.feature') ? 'text-left' : 'text-center'}`}>
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { label: t('comparison.rows.documents.label'), starter: t('comparison.rows.documents.starter'), professional: t('comparison.rows.documents.professional'), enterprise: t('comparison.rows.documents.enterprise'), icon: false },
                { label: t('comparison.rows.ocr.label'), starter: crossIcon, professional: checkIcon, enterprise: checkIcon, icon: true },
                { label: t('comparison.rows.api.label'), starter: crossIcon, professional: checkIcon, enterprise: checkIcon, icon: true },
                { label: t('comparison.rows.integrations.label'), starter: crossIcon, professional: crossIcon, enterprise: checkIcon, icon: true },
                { label: t('comparison.rows.support.label'), starter: t('comparison.rows.support.starter'), professional: t('comparison.rows.support.professional'), enterprise: t('comparison.rows.support.enterprise'), icon: false },
              ].map((row) => (
                <tr key={row.label} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{row.label}</td>
                  {['starter', 'professional', 'enterprise'].map((tier) => (
                    <td key={tier} className="px-6 py-4 text-center text-gray-600">
                      {row.icon ? row[tier as keyof typeof row] : row[tier as 'starter' | 'professional' | 'enterprise']}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">{t('faq.title')}</h2>
        <div className="space-y-6">
          {[
            {
              question: t('faq.items.changePlan.question'),
              answer: t('faq.items.changePlan.answer'),
            },
            {
              question: t('faq.items.limit.question'),
              answer: t('faq.items.limit.answer'),
            },
            {
              question: t('faq.items.discounts.question'),
              answer: t('faq.items.discounts.answer'),
            },
            {
              question: t('faq.items.contracts.question'),
              answer: t('faq.items.contracts.answer'),
            },
          ].map((faq) => (
            <article key={faq.question} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100" itemScope itemType="https://schema.org/Question">
              <h3 className="font-bold text-lg mb-2 text-gray-900" itemProp="name">{faq.question}</h3>
              <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                <p className="text-gray-600" itemProp="text">{faq.answer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6 text-white">{t('cta.title')}</h2>
          <p className="text-xl mb-10 text-white/90">{t('cta.subtitle')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={getLocalizedRoute('contact')}>
              <button className="bg-white text-blue-600 px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200 font-bold text-lg" aria-label={t('cta.buttonPrimary')}>
                {t('cta.buttonPrimary')}
              </button>
            </Link>
            <Link to={getLocalizedRoute('contact')}>
              <button className="border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-bold text-lg" aria-label={t('cta.buttonSecondary')}>
                {t('cta.buttonSecondary')}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing

