import { useTranslation } from 'react-i18next'

import { usePageMetadata } from '../hooks/usePageMetadata'

function Privacy() {
  const { t } = useTranslation('privacy')

  usePageMetadata({
    titleKey: 'privacy.title',
    descriptionKey: 'privacy.description',
    namespace: 'meta',
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-2 rounded-full">{t('hero.badge')}</span>
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
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('introduction.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('introduction.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('dataCollection.title')}</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('dataCollection.items.personal.title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('dataCollection.items.personal.content')}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('dataCollection.items.usage.title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('dataCollection.items.usage.content')}</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-gray-900">{t('dataCollection.items.documents.title')}</h3>
                <p className="text-gray-700 leading-relaxed">{t('dataCollection.items.documents.content')}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-gray-900">{t('dataUse.title')}</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{t('dataUse.items.service')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{t('dataUse.items.communication')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{t('dataUse.items.security')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{t('dataUse.items.compliance')}</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-gray-700">{t('dataUse.items.analytics')}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('dataSharing.title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{t('dataSharing.content')}</p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span className="text-gray-700">{t('dataSharing.items.serviceProviders')}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span className="text-gray-700">{t('dataSharing.items.legal')}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span className="text-gray-700">{t('dataSharing.items.business')}</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-amber-600 font-bold">•</span>
                <span className="text-gray-700">{t('dataSharing.items.consent')}</span>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('dataSecurity.title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{t('dataSecurity.content')}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                t('dataSecurity.items.encryption'),
                t('dataSecurity.items.access'),
                t('dataSecurity.items.storage'),
                t('dataSecurity.items.monitoring'),
              ].map((item, index) => (
                <div key={index} className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('yourRights.title')}</h2>
            <p className="text-gray-700 leading-relaxed mb-6">{t('yourRights.content')}</p>
            <div className="space-y-3">
              {[
                t('yourRights.items.access'),
                t('yourRights.items.rectify'),
                t('yourRights.items.delete'),
                t('yourRights.items.object'),
                t('yourRights.items.portability'),
                t('yourRights.items.withdraw'),
              ].map((right, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{right}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('cookies.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('cookies.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('dataRetention.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('dataRetention.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('international.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('international.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('children.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('children.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('changes.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('changes.content')}</p>
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

export default Privacy

