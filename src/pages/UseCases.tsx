import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { usePageMetadata } from '../hooks/usePageMetadata'
import { useLanguage } from '../hooks/useLanguage'

function UseCases() {
  const { t } = useTranslation('useCases')
  const { getLocalizedRoute } = useLanguage()

  usePageMetadata({
    titleKey: 'useCases.title',
    descriptionKey: 'useCases.description',
    namespace: 'meta',
  })

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
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-10">
          {[
            {
              emoji: '🏛️',
              title: t('mainCases.notarial.title'),
              description: t('mainCases.notarial.description'),
              highlight: t('mainCases.notarial.highlight'),
              highlightColor: 'bg-blue-600',
              highlightText: 'text-white',
              borderColor: 'border-blue-200',
              gradient: 'from-blue-50 to-blue-100',
              linkColor: 'text-blue-700 hover:text-blue-900',
            },
            {
              emoji: '🏦',
              title: t('mainCases.banking.title'),
              description: t('mainCases.banking.description'),
              highlight: t('mainCases.banking.highlight'),
              highlightColor: 'bg-purple-600',
              highlightText: 'text-white',
              borderColor: 'border-purple-200',
              gradient: 'from-purple-50 to-purple-100',
              linkColor: 'text-purple-700 hover:text-purple-900',
            },
            {
              emoji: '⚖️',
              title: t('mainCases.legal.title'),
              description: t('mainCases.legal.description'),
              highlight: t('mainCases.legal.highlight'),
              highlightColor: 'bg-orange-600',
              highlightText: 'text-white',
              borderColor: 'border-orange-200',
              gradient: 'from-orange-50 to-orange-100',
              linkColor: 'text-orange-700 hover:text-orange-900',
            },
          ].map((block) => (
            <div key={block.title} className="space-y-4">
              <div
                className={`bg-gradient-to-br ${block.gradient} p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-2 ${block.borderColor}`}
              >
                <div className="bg-white w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg text-5xl">
                  {block.emoji}
                </div>
                <h3 className="font-bold text-3xl mb-4 text-gray-900">{block.title}</h3>
                <p className="mb-6 text-lg text-gray-700 leading-relaxed">{block.description}</p>

                <div className="space-y-4 mb-8">
                  <div className="bg-white p-4 rounded-xl">
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">{t('documents.title')}</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{t('documents.items.critical')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{t('documents.items.scanned')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{t('documents.items.attachments')}</span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white p-4 rounded-xl">
                    <h4 className="font-semibold text-lg mb-2 text-gray-900">{t('benefits.title')}</h4>
                    <ul className="space-y-2 text-gray-600">
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{t('benefits.items.extract')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{t('benefits.items.convert')}</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>{t('benefits.items.digitize')}</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Link to={getLocalizedRoute('contact')} className={`${block.linkColor} font-semibold`}>
                  {t('link')}
                </Link>
              </div>
              <div className={`${block.highlightColor} ${block.highlightText} p-4 rounded-xl text-center font-semibold`}>
                {block.highlight}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">{t('otherIndustries.title')}</h2>
            <p className="text-xl text-gray-600">{t('otherIndustries.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { emoji: '📊', title: t('otherIndustries.finance.title'), description: t('otherIndustries.finance.description') },
              { emoji: '🏥', title: t('otherIndustries.insurance.title'), description: t('otherIndustries.insurance.description') },
              { emoji: '🏢', title: t('otherIndustries.realEstate.title'), description: t('otherIndustries.realEstate.description') },
              { emoji: '🏭', title: t('otherIndustries.logistics.title'), description: t('otherIndustries.logistics.description') },
            ].map((industry) => (
              <div key={industry.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="text-4xl mb-3">{industry.emoji}</div>
                <h4 className="font-bold text-lg mb-2 text-gray-900">{industry.title}</h4>
                <p className="text-gray-600 text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6 text-white">{t('cta.title')}</h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <Link to={getLocalizedRoute('contact')}>
            <button className="bg-white text-blue-600 px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200 font-bold text-lg">
              {t('cta.button')}
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default UseCases

