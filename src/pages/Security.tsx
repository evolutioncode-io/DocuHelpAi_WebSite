import { useTranslation } from 'react-i18next'

import { usePageMetadata } from '../hooks/usePageMetadata'

function Security() {
  const { t } = useTranslation('security')

  usePageMetadata({
    titleKey: 'security.title',
    descriptionKey: 'security.description',
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('commitment.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('commitment.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('measures.title')}</h2>
            <div className="space-y-6">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('measures.encryption.title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('measures.encryption.content')}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('measures.access.title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('measures.access.content')}</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('measures.infrastructure.title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('measures.infrastructure.content')}</p>
              </div>
              <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('measures.monitoring.title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('measures.monitoring.content')}</p>
              </div>
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-6 rounded-xl border border-amber-200">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('measures.compliance.title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('measures.compliance.content')}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('dataHandling.title')}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                t('dataHandling.items.processing'),
                t('dataHandling.items.retention'),
                t('dataHandling.items.deletion'),
                t('dataHandling.items.access'),
              ].map((item, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-xl border border-gray-200">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-gray-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('userSecurity.title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{t('userSecurity.content')}</p>
            <div className="space-y-4">
              {[
                t('userSecurity.items.password'),
                t('userSecurity.items.authentication'),
                t('userSecurity.items.sharing'),
                t('userSecurity.items.reporting'),
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('incidents.title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{t('incidents.content')}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                t('incidents.items.detection'),
                t('incidents.items.containment'),
                t('incidents.items.notification'),
                t('incidents.items.resolution'),
              ].map((item, index) => (
                <div key={index} className="bg-red-50 p-5 rounded-xl border border-red-200">
                  <div className="flex items-start gap-3">
                    <span className="text-red-600 font-bold text-lg">{index + 1}.</span>
                    <p className="text-gray-700">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-8 rounded-xl border-2 border-green-200">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('vulnerability.title')}</h2>
            <p className="text-gray-700 mb-4">{t('vulnerability.content')}</p>
            <a href={`mailto:${t('vulnerability.email')}`} className="text-green-600 hover:text-green-700 font-semibold text-lg block mb-4">
              {t('vulnerability.email')}
            </a>
            <p className="text-gray-700 text-sm">{t('vulnerability.responsible')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('updates.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('updates.content')}</p>
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

export default Security

