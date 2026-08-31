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
    <div className="min-h-screen bg-app">
      <section className="relative bg-surface py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-16">
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
            <p className="text-xl text-heading font-semibold max-w-3xl mx-auto mt-5 leading-relaxed">
              {t('hero.followup')}
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
              iconPath:
                'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
            },
            {
              step: '2',
              heading: t('steps.step2.heading'),
              description: t('steps.step2.description'),
              badge: t('steps.step2.badge'),
              iconPath:
                'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
            },
            {
              step: '3',
              heading: t('steps.step3.heading'),
              description: t('steps.step3.description'),
              badge: t('steps.step3.badge'),
              iconPath:
                'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
            },
          ].map((card) => (
            <div key={card.step} className="relative">
              <div className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                <div className="absolute -top-6 -right-6 bg-gradient-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg text-center">
                  {card.step}
                </div>
                <div className="mb-6">
                  <svg className="w-16 h-16 text-[color:var(--color-primary-800)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
                  </svg>
                </div>
                <h3 className="font-bold text-2xl mb-4 text-heading">{card.heading}</h3>
                <p className="text-body leading-relaxed">{card.description}</p>
                <div className="mt-6 pt-6 border-t border-[color:var(--color-neutral-400)]">
                  <div className="flex items-center gap-2 text-sm text-body">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-heading">{card.badge}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface-muted py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">{t('benefits.title')}</h2>
            <p className="text-xl text-body max-w-3xl mx-auto">
              {t('benefits.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {(Object.values(t('benefits.items', { returnObjects: true })) as Array<{ title: string; description: string }>).map((benefit) => (
                <div
                  key={benefit.title}
                  className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-6 rounded-xl group cursor-pointer hover:shadow-xl"
                >
                  <h3 className="font-bold text-xl mb-3 text-heading group-hover:text-[color:var(--color-primary-800)] transition-colors duration-300">{benefit.title}</h3>
                  <p className="text-body leading-relaxed">{benefit.description}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-heading">{t('technology.title')}</h2>
            <p className="text-xl text-body">{t('technology.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(Object.values(t('technology.items', { returnObjects: true })) as Array<{ title: string; description: string }>).map((tech) => (
              <div key={tech.title} className="text-center p-8 card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] rounded-2xl group cursor-pointer hover:shadow-xl">
                <div className="bg-surface-muted group-hover:bg-[color:var(--color-primary-800)]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-colors duration-300">
                  <svg className="w-10 h-10 text-[color:var(--color-primary-800)] group-hover:text-[color:var(--color-primary-700)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-heading group-hover:text-[color:var(--color-primary-800)] transition-colors duration-300">{tech.title}</h3>
                <p className="text-body">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-surface border-t border-ui">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6 text-heading">{t('security.title')}</h2>
          <p className="text-xl text-body mb-8 leading-relaxed">
            {t('security.description')}
          </p>
          <Link to={getLocalizedRoute('security')} className="link font-bold text-lg hover:underline">
            {t('security.link')}
          </Link>
        </div>
      </section>

      <section className="bg-[color:var(--color-neutral-900)] py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6 text-white">{t('cta.title')}</h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            {t('cta.subtitle')}
          </p>

          {/* YouTube Video Embed */}
          <div className="mb-10 mx-auto max-w-3xl">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
                src={t('cta.videoUrl')}
                title="DocuHelp AI Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={getLocalizedRoute('useCases')}>
              <button type="button" aria-disabled="true" className="btn-primary px-10 py-5 text-lg cursor-default">
                {t('cta.buttonPrimary')}
              </button>
            </Link>
            <Link to={getLocalizedRoute('contact')}>
              <button className="btn-secondary border-white !text-white px-10 py-5 text-lg transition-all duration-300 ease-in-out hover:bg-white hover:!text-[color:var(--color-accent-700)] hover:shadow-lg hover:scale-105 active:scale-95">
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

