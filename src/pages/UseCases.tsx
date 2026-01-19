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
    <div className="min-h-screen bg-app">
      <section className="relative bg-surface py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="max-w-6xl mx-auto px-6 text-center relative">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(254, 201, 48, 0.15)', color: '#000000' }}>
              {t('hero.badge')}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-heading">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-10">
          {[
            {
              title: t('mainCases.notarial.title'),
              description: t('mainCases.notarial.description'),
              highlight: t('mainCases.notarial.highlight'),
              iconPath: 'M15.75 17.25v3.375c0 .621-.504 1.125-1.125 1.125h-9.75a1.125 1.125 0 0 1-1.125-1.125V7.875c0-.621.504-1.125 1.125-1.125H6.75a9.06 9.06 0 0 1 1.5.124m7.5 10.376h3.375c.621 0 1.125-.504 1.125-1.125V11.25c0-4.46-3.243-8.161-7.5-8.876a9.06 9.06 0 0 0-1.5-.124H9.375c-.621 0-1.125.504-1.125 1.125v3.5m7.5 10.375H9.375a1.125 1.125 0 0 1-1.125-1.125v-9.25m12 6.625v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H9.75',
            },
            {
              title: t('mainCases.banking.title'),
              description: t('mainCases.banking.description'),
              highlight: t('mainCases.banking.highlight'),
              iconPath: 'M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z',
            },
            {
              title: t('mainCases.legal.title'),
              description: t('mainCases.legal.description'),
              highlight: t('mainCases.legal.highlight'),
              iconPath: 'M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0 1 18 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3 1.5 1.5 3-3.75',
            },
          ].map((block) => (
            <div key={block.title} className="space-y-4">
              <Link to={getLocalizedRoute('contact')} className="block">
                <div className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-10 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group">
                  <div className="bg-surface-muted group-hover:bg-[color:var(--color-primary-800)]/10 w-20 h-20 rounded-2xl flex items-center justify-center mb-6 shadow-lg transition-colors duration-300">
                    <svg className="w-10 h-10 text-[color:var(--color-primary-800)] group-hover:text-[color:var(--color-primary-700)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={block.iconPath} />
                    </svg>
                  </div>
                  <h3 className="font-bold text-3xl mb-4 text-heading group-hover:text-[color:var(--color-primary-800)] transition-colors duration-300">{block.title}</h3>
                  <p className="mb-6 text-lg text-body leading-relaxed">{block.description}</p>

                  <div className="space-y-4 mb-8">
                    <div className="bg-surface-muted group-hover:bg-[color:var(--color-primary-800)]/5 border border-transparent group-hover:border-[color:var(--color-primary-800)]/20 p-4 rounded-xl transition-all duration-300">
                      <h4 className="font-semibold text-lg mb-2 text-heading group-hover:text-[color:var(--color-primary-800)] transition-colors duration-300">{t('documents.title')}</h4>
                      <ul className="space-y-2 text-body">
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-[color:var(--color-semantic-success)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{t('documents.items.critical')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-[color:var(--color-semantic-success)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{t('documents.items.scanned')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-[color:var(--color-semantic-success)] mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
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

                    <div className="bg-surface-muted group-hover:bg-[color:var(--color-primary-800)]/5 border border-transparent group-hover:border-[color:var(--color-primary-800)]/20 p-4 rounded-xl transition-all duration-300">
                      <h4 className="font-semibold text-lg mb-2 text-heading group-hover:text-[color:var(--color-primary-800)] transition-colors duration-300">{t('benefits.title')}</h4>
                      <ul className="space-y-2 text-body">
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-[color:var(--color-primary-800)] group-hover:text-[color:var(--color-primary-700)] mt-0.5 flex-shrink-0 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{t('benefits.items.extract')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-[color:var(--color-primary-800)] group-hover:text-[color:var(--color-primary-700)] mt-0.5 flex-shrink-0 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span>{t('benefits.items.convert')}</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-[color:var(--color-primary-800)] group-hover:text-[color:var(--color-primary-700)] mt-0.5 flex-shrink-0 transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
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

                  <span className="link font-semibold inline-flex items-center gap-2">
                    {t('link')}
                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
              <div className="bg-gradient-primary text-white p-4 rounded-xl text-center font-semibold">
                {block.highlight}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-muted py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-heading">{t('otherIndustries.title')}</h2>
            <p className="text-xl text-body">{t('otherIndustries.subtitle')}</p>
          </div>

          <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
            {[
              {
                title: t('otherIndustries.finance.title'),
                description: t('otherIndustries.finance.description'),
                iconPath: 'M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z',
              },
              {
                title: t('otherIndustries.realEstate.title'),
                description: t('otherIndustries.realEstate.description'),
                iconPath: 'M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z',
              },
            ].map((industry) => (
              <div key={industry.title} className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-6 rounded-xl hover:shadow-xl transition-all duration-300 group cursor-pointer">
                <div className="mb-3 flex items-center justify-center">
                  <div className="bg-surface-muted group-hover:bg-[color:var(--color-primary-800)]/10 p-3 rounded-xl transition-colors duration-300">
                    <svg className="w-12 h-12 text-[color:var(--color-primary-800)] group-hover:text-[color:var(--color-primary-700)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={industry.iconPath} />
                    </svg>
                  </div>
                </div>
                <h4 className="font-bold text-lg mb-2 text-heading group-hover:text-[color:var(--color-primary-800)] transition-colors duration-300">{industry.title}</h4>
                <p className="text-body text-sm">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-secondary">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6 text-white">{t('cta.title')}</h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <Link to={getLocalizedRoute('contact')}>
            <button className="bg-white text-[color:var(--color-accent-700)] px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl hover:bg-[color:var(--color-primary-800)] hover:text-white transform hover:-translate-y-1 transition-all duration-200 font-bold text-lg">
              {t('cta.button')}
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default UseCases

