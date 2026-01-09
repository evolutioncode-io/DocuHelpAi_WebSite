import { useTranslation } from 'react-i18next'

import { usePageMetadata } from '../hooks/usePageMetadata'

function Terms() {
  const { t } = useTranslation('terms')

  usePageMetadata({
    titleKey: 'terms.title',
    descriptionKey: 'terms.description',
    namespace: 'meta',
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full">{t('hero.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-amber-700 to-orange-700 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">{t('hero.subtitle')}</p>
          <p className="mt-4 text-sm text-gray-500">{t('lastUpdated')}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('acceptance.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('acceptance.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('service.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('service.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('accounts.title')}</h2>
            <div className="space-y-4">
              {[
                t('accounts.items.responsibility'),
                t('accounts.items.accuracy'),
                t('accounts.items.security'),
                t('accounts.items.liability'),
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-gray-50 p-4 rounded-xl">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
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
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('usage.title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{t('usage.content')}</p>
            <div className="space-y-3">
              {[
                t('usage.items.illegal'),
                t('usage.items.harmful'),
                t('usage.items.reverse'),
                t('usage.items.interfere'),
                t('usage.items.unauthorized'),
                t('usage.items.commercial'),
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-red-600 font-bold">×</span>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('intellectual.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('intellectual.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('userContent.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('userContent.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('payment.title')}</h2>
            <div className="space-y-4">
              {[
                t('payment.items.fees'),
                t('payment.items.renewal'),
                t('payment.items.refunds'),
                t('payment.items.changes'),
              ].map((item, index) => (
                <div key={index} className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('termination.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('termination.content')}</p>
          </div>

          <div className="bg-yellow-50 p-6 rounded-xl border-2 border-yellow-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{t('disclaimers.title')}</h2>
            <p className="text-gray-700 leading-relaxed font-medium">{t('disclaimers.content')}</p>
          </div>

          <div className="bg-red-50 p-6 rounded-xl border-2 border-red-200">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">{t('limitation.title')}</h2>
            <p className="text-gray-700 leading-relaxed font-medium">{t('limitation.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('indemnification.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('indemnification.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('changes.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('changes.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('governing.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('governing.content')}</p>
          </div>

          <div className="bg-gradient-to-r from-amber-50 to-orange-50 p-8 rounded-xl border-2 border-amber-200">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('contact.title')}</h2>
            <p className="text-gray-700 mb-4">{t('contact.content')}</p>
            <a href={`mailto:${t('contact.email')}`} className="text-amber-600 hover:text-amber-700 font-semibold text-lg">
              {t('contact.email')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms

