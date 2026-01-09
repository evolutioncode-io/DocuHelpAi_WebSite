import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { usePageMetadata } from '../hooks/usePageMetadata'
import { useLanguage } from '../hooks/useLanguage'

function Product() {
  const { t } = useTranslation('product')
  const { getLocalizedRoute } = useLanguage()

  usePageMetadata({
    titleKey: 'product.title',
    descriptionKey: 'product.description',
    namespace: 'meta',
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-4 py-2 rounded-full">
                {t('hero.badge')}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              step: '1',
              heading: t('steps.step1.heading'),
              description: t('steps.step1.description'),
              badge: t('steps.step1.badge'),
              color: 'from-blue-500 to-blue-600',
              badgeColor: 'text-blue-600',
              iconPath:
                'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
            },
            {
              step: '2',
              heading: t('steps.step2.heading'),
              description: t('steps.step2.description'),
              badge: t('steps.step2.badge'),
              color: 'from-purple-500 to-purple-600',
              badgeColor: 'text-purple-600',
              iconPath:
                'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
            },
            {
              step: '3',
              heading: t('steps.step3.heading'),
              description: t('steps.step3.description'),
              badge: t('steps.step3.badge'),
              color: 'from-green-500 to-green-600',
              badgeColor: 'text-green-600',
              iconPath:
                'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
            },
          ].map((card) => (
            <div key={card.step} className="relative">
              <div
                className={`bg-gradient-to-br ${card.color} text-white p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2`}
              >
                <div className="absolute -top-6 -right-6 bg-white text-blue-600 w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg text-center">
                  {card.step}
                </div>
                <div className="mb-6">
                  <svg className="w-16 h-16 text-white/90" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
                  </svg>
                </div>
                <h3 className="font-bold text-2xl mb-4">{card.heading}</h3>
                <p className="text-white/90 leading-relaxed">{card.description}</p>
                <div className="mt-6 pt-6 border-t border-white/20">
                  <div className="flex items-center gap-2 text-sm text-white/80">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className={card.badgeColor}>{card.badge}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t('benefits.title')}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </div>

          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">{t('benefits.business.title')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: t('benefits.business.items.accuracy.title'),
                description: t('benefits.business.items.accuracy.description'),
                border: 'border-green-200 hover:border-green-400',
                iconColor: 'bg-green-100',
                iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: t('benefits.business.items.time.title'),
                description: t('benefits.business.items.time.description'),
                border: 'border-blue-200 hover:border-blue-400',
                iconColor: 'bg-blue-100',
                iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
              {
                title: t('benefits.business.items.automation.title'),
                description: t('benefits.business.items.automation.description'),
                border: 'border-purple-200 hover:border-purple-400',
                iconColor: 'bg-purple-100',
                iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
              },
              {
                title: t('benefits.business.items.consistency.title'),
                description: t('benefits.business.items.consistency.description'),
                border: 'border-orange-200 hover:border-orange-400',
                iconColor: 'bg-orange-100',
                iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
            ].map((benefit) => (
              <div
                key={benefit.title}
                className={`bg-white p-6 rounded-xl border-2 transition-colors ${benefit.border}`}
              >
                <div className="flex items-start gap-4">
                  <div className={`${benefit.iconColor} p-3 rounded-lg flex-shrink-0`}>
                    <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.iconPath} />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-2 text-gray-900">{benefit.title}</h4>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-gray-900 text-center">{t('benefits.technical.title')}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: t('benefits.technical.items.scanning.title'),
                  description: t('benefits.technical.items.scanning.description'),
                  border: 'border-blue-200 hover:border-blue-400',
                  iconColor: 'bg-blue-100',
                  iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                },
                {
                  title: t('benefits.technical.items.handwriting.title'),
                  description: t('benefits.technical.items.handwriting.description'),
                  border: 'border-green-200 hover:border-green-400',
                  iconColor: 'bg-green-100',
                  iconPath: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z',
                },
                {
                  title: t('benefits.technical.items.flexible.title'),
                  description: t('benefits.technical.items.flexible.description'),
                  border: 'border-purple-200 hover:border-purple-400',
                  iconColor: 'bg-purple-100',
                  iconPath: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
                },
                {
                  title: t('benefits.technical.items.visual.title'),
                  description: t('benefits.technical.items.visual.description'),
                  border: 'border-orange-200 hover:border-orange-400',
                  iconColor: 'bg-orange-100',
                  iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
                },
                {
                  title: t('benefits.technical.items.export.title'),
                  description: t('benefits.technical.items.export.description'),
                  border: 'border-green-200 hover:border-green-400',
                  iconColor: 'bg-green-100',
                  iconPath: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                },
                {
                  title: t('benefits.technical.items.integration.title'),
                  description: t('benefits.technical.items.integration.description'),
                  border: 'border-blue-200 hover:border-blue-400',
                  iconColor: 'bg-blue-100',
                  iconPath: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
                },
              ].map((benefit) => (
                <div
                  key={benefit.title}
                  className={`bg-white p-6 rounded-xl border-2 transition-colors ${benefit.border}`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`${benefit.iconColor} p-3 rounded-lg flex-shrink-0`}>
                      <svg className="w-6 h-6 text-gray-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.iconPath} />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2 text-gray-900">{benefit.title}</h4>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">{t('technology.title')}</h2>
            <p className="text-xl text-gray-600">{t('technology.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('technology.ocr.title'),
                description: t('technology.ocr.description'),
                color: 'from-blue-50 to-blue-100',
                iconColor: 'text-blue-600',
                iconPath:
                  'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
              },
              {
                title: t('technology.llm.title'),
                description: t('technology.llm.description'),
                color: 'from-purple-50 to-purple-100',
                iconColor: 'text-purple-600',
                iconPath:
                  'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
              },
              {
                title: t('technology.validation.title'),
                description: t('technology.validation.description'),
                color: 'from-green-50 to-green-100',
                iconColor: 'text-green-600',
                iconPath:
                  'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
              },
            ].map((tech) => (
              <div key={tech.title} className={`text-center p-8 bg-gradient-to-br ${tech.color} rounded-2xl`}>
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                  <svg className={`w-10 h-10 ${tech.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tech.iconPath} />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-gray-900">{tech.title}</h3>
                <p className="text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6 text-white">{t('cta.title')}</h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={getLocalizedRoute('contact')}>
              <button className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200 font-bold text-lg">
                {t('cta.buttonPrimary')}
              </button>
            </Link>
            <Link to={getLocalizedRoute('contact')}>
              <button className="border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-bold text-lg">
                {t('cta.buttonSecondary')}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product

