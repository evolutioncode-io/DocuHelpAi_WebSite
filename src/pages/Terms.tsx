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
    <div className="min-h-screen bg-app">
      <section className="relative bg-surface py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(254, 201, 48, 0.15)', color: '#000000' }}>{t('hero.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-heading relative">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-body leading-relaxed relative">{t('hero.subtitle')}</p>
          <p className="mt-4 text-sm text-body/80 relative">{t('lastUpdated')}</p>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="card-surface rounded-2xl p-8 md:p-12 space-y-12">
          <div>
            <h2 className="text-3xl font-bold mb-4 text-heading">{t('acceptance.title')}</h2>
            <p className="text-body leading-relaxed">{t('acceptance.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-heading">{t('service.title')}</h2>
            <p className="text-body leading-relaxed">{t('service.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-heading">{t('accounts.title')}</h2>
            <div className="space-y-4">
              {[
                t('accounts.items.responsibility'),
                t('accounts.items.accuracy'),
                t('accounts.items.security'),
                t('accounts.items.liability'),
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-surface-muted p-4 rounded-xl">
                  <svg className="w-5 h-5 text-[color:var(--color-primary-800)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-body">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-heading">{t('usage.title')}</h2>
            <p className="text-body leading-relaxed mb-6">{t('usage.content')}</p>
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
                  <span className="text-[color:var(--color-error)] font-bold">×</span>
                  <span className="text-body">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-heading">{t('intellectual.title')}</h2>
            <p className="text-body leading-relaxed">{t('intellectual.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-heading">{t('userContent.title')}</h2>
            <p className="text-body leading-relaxed">{t('userContent.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-heading">{t('payment.title')}</h2>
            <div className="space-y-4">
              {[
                t('payment.items.fees'),
                t('payment.items.renewal'),
                t('payment.items.refunds'),
                t('payment.items.changes'),
              ].map((item, index) => (
                <div key={index} className="bg-surface-muted p-4 rounded-lg border border-ui">
                  <p className="text-body">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('termination.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('termination.content')}</p>
          </div>

          <div className="bg-surface-muted p-6 rounded-xl border-2 border-ui">
            <h2 className="text-2xl font-bold mb-4 text-heading">{t('disclaimers.title')}</h2>
            <p className="text-body leading-relaxed font-medium">{t('disclaimers.content')}</p>
          </div>

          <div className="bg-surface-muted p-6 rounded-xl border-2 border-[color:var(--color-error)]/30">
            <h2 className="text-2xl font-bold mb-4 text-heading">{t('limitation.title')}</h2>
            <p className="text-body leading-relaxed font-medium">{t('limitation.content')}</p>
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

          <div className="bg-surface-muted p-8 rounded-xl border-2 border-ui">
            <h2 className="text-3xl font-bold mb-4 text-heading">{t('contact.title')}</h2>
            <p className="text-body mb-4">{t('contact.content')}</p>
            <a href={`mailto:${t('contact.email')}`} className="link font-semibold text-lg">
              {t('contact.email')}
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Terms

