import { useTranslation } from 'react-i18next'

import { usePageMetadata } from '../hooks/usePageMetadata'

function Cookies() {
  const { t } = useTranslation('cookies')

  usePageMetadata({
    titleKey: 'cookies.title',
    descriptionKey: 'cookies.description',
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
            <h2 className="text-3xl font-bold mb-4 text-heading">{t('introduction.title')}</h2>
            <p className="text-body leading-relaxed">{t('introduction.content')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 text-heading">{t('howWeUse.title')}</h2>
            <p className="text-body leading-relaxed mb-6">{t('howWeUse.content')}</p>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                t('howWeUse.items.essential'),
                t('howWeUse.items.preferences'),
                t('howWeUse.items.analytics'),
                t('howWeUse.items.security'),
                t('howWeUse.items.performance'),
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 bg-surface-muted p-4 rounded-lg border border-ui">
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
            <h2 className="text-3xl font-bold mb-6 text-heading">{t('types.title')}</h2>
            <div className="space-y-6">
              <div className="bg-surface-muted p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-heading">{t('types.essential.title')}</h3>
                <p className="text-body leading-relaxed">{t('types.essential.content')}</p>
              </div>
              <div className="bg-surface-muted p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-heading">{t('types.functional.title')}</h3>
                <p className="text-body leading-relaxed">{t('types.functional.content')}</p>
              </div>
              <div className="bg-surface-muted p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-heading">{t('types.analytics.title')}</h3>
                <p className="text-body leading-relaxed">{t('types.analytics.content')}</p>
              </div>
              <div className="bg-surface-muted p-6 rounded-xl">
                <h3 className="text-xl font-bold mb-3 text-heading">{t('types.marketing.title')}</h3>
                <p className="text-body leading-relaxed">{t('types.marketing.content')}</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-heading">{t('thirdParty.title')}</h2>
            <p className="text-body leading-relaxed mb-6">{t('thirdParty.content')}</p>
            <div className="space-y-3 mb-4">
              {[
                t('thirdParty.items.analytics'),
                t('thirdParty.items.hosting'),
                t('thirdParty.items.support'),
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="text-[color:var(--color-primary-800)] font-bold">•</span>
                  <span className="text-body">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-sm text-body italic">{t('thirdParty.note')}</p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4 text-heading">{t('control.title')}</h2>
            <p className="text-body leading-relaxed mb-6">{t('control.content')}</p>
            <div className="space-y-4">
              <div className="bg-surface-muted p-5 rounded-xl border border-ui">
                <h4 className="font-bold mb-2 text-heading">{t('control.items.browser')}</h4>
              </div>
              <div className="bg-surface-muted p-5 rounded-xl border border-ui">
                <h4 className="font-bold mb-2 text-heading">{t('control.items.preferences')}</h4>
              </div>
              <div className="bg-surface-muted p-5 rounded-xl border border-ui">
                <h4 className="font-bold mb-2 text-heading">{t('control.items.optout')}</h4>
              </div>
            </div>
            <p className="mt-6 p-4 bg-surface-muted border-l-4 border-[color:var(--color-warning)] text-body">{t('control.warning')}</p>
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

export default Cookies

