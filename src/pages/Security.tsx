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
            <h2 className="text-3xl font-bold mb-4 text-heading">{t('commitment.title')}</h2>
            <p className="text-body leading-relaxed">{t('commitment.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-heading">{t('measures.title')}</h2>
            <div className="space-y-6">
              <div className="bg-surface-muted p-6 rounded-xl border border-ui">
                <h3 className="text-xl font-bold mb-3 text-heading">{t('measures.encryption.title')}</h3>
                <p className="text-body leading-relaxed">{t('measures.encryption.content')}</p>
              </div>
              <div className="bg-surface-muted p-6 rounded-xl border border-ui">
                <h3 className="text-xl font-bold mb-3 text-heading">{t('measures.access.title')}</h3>
                <p className="text-body leading-relaxed">{t('measures.access.content')}</p>
              </div>
              <div className="bg-surface-muted p-6 rounded-xl border border-ui">
                <h3 className="text-xl font-bold mb-3 text-heading">{t('measures.infrastructure.title')}</h3>
                <p className="text-body leading-relaxed">{t('measures.infrastructure.content')}</p>
              </div>
              <div className="bg-surface-muted p-6 rounded-xl border border-ui">
                <h3 className="text-xl font-bold mb-3 text-heading">{t('measures.monitoring.title')}</h3>
                <p className="text-body leading-relaxed">{t('measures.monitoring.content')}</p>
              </div>
              <div className="bg-surface-muted p-6 rounded-xl border border-ui">
                <h3 className="text-xl font-bold mb-3 text-heading">{t('measures.compliance.title')}</h3>
                <p className="text-body leading-relaxed">{t('measures.compliance.content')}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-heading">{t('dataHandling.title')}</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                t('dataHandling.items.processing'),
                t('dataHandling.items.retention'),
                t('dataHandling.items.deletion'),
                t('dataHandling.items.access'),
              ].map((item, index) => (
                <div key={index} className="bg-surface-muted p-5 rounded-xl border border-ui">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-[color:var(--color-success)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-body">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-heading">{t('userSecurity.title')}</h2>
            <p className="text-body leading-relaxed mb-6">{t('userSecurity.content')}</p>
            <div className="space-y-4">
              {[
                t('userSecurity.items.password'),
                t('userSecurity.items.authentication'),
                t('userSecurity.items.sharing'),
                t('userSecurity.items.reporting'),
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-surface-muted p-4 rounded-lg border border-ui">
                  <svg className="w-5 h-5 text-[color:var(--color-primary-800)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-body">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-heading">{t('incidents.title')}</h2>
            <p className="text-body leading-relaxed mb-6">{t('incidents.content')}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                t('incidents.items.detection'),
                t('incidents.items.containment'),
                t('incidents.items.notification'),
                t('incidents.items.resolution'),
              ].map((item, index) => (
                <div key={index} className="bg-surface-muted p-5 rounded-xl border border-[color:var(--color-error)]/30">
                  <div className="flex items-start gap-3">
                    <span className="text-[color:var(--color-error)] font-bold text-lg">{index + 1}.</span>
                    <p className="text-body">{item}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-surface-muted p-8 rounded-xl border-2 border-[color:var(--color-success)]/30">
            <h2 className="text-3xl font-bold mb-4 text-heading">{t('vulnerability.title')}</h2>
            <p className="text-body mb-4">{t('vulnerability.content')}</p>
            <a href={`mailto:${t('vulnerability.email')}`} className="link font-semibold text-lg block mb-4">
              {t('vulnerability.email')}
            </a>
            <p className="text-body text-sm">{t('vulnerability.responsible')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-gray-900">{t('updates.title')}</h2>
            <p className="text-gray-700 leading-relaxed">{t('updates.content')}</p>
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

export default Security

