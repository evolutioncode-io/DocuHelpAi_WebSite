import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { usePageMetadata } from '../hooks/usePageMetadata'
import { useLanguage } from '../hooks/useLanguage'

function Partners() {
  const { t } = useTranslation('partners')
  const { getLocalizedRoute } = useLanguage()

  usePageMetadata({
    titleKey: 'partners.title',
    descriptionKey: 'partners.description',
    namespace: 'meta',
  })

  return (
    <div className="min-h-screen bg-app">
      {/* Hero Section */}
      <section className="relative bg-surface py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="max-w-6xl mx-auto px-6 relative">
          <div className="text-center mb-12">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(254, 201, 48, 0.15)', color: '#000000' }}>
                {t('hero.badge')}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-heading">
              {t('hero.title')}
            </h1>
            <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed mb-6">
              {t('hero.subtitle')}
            </p>
            {t('hero.description') && (
              <p className="text-lg text-body max-w-4xl mx-auto leading-relaxed mb-10">
                {t('hero.description')}
              </p>
            )}

            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-4">
              <Link to={getLocalizedRoute('contact')}>
                <button className="btn-primary px-8 py-4 text-lg font-semibold hover:shadow-lg transition-all">
                  {t('hero.ctaPrimary')}
                </button>
              </Link>
              <Link to={getLocalizedRoute('home')}>
                <button className="btn-secondary px-8 py-4 text-lg font-semibold hover:bg-surface-muted transition-all">
                  {t('hero.ctaSecondary')}
                </button>
              </Link>
            </div>
            <p className="text-sm text-body/80">{t('hero.microcopy')}</p>
          </div>
        </div>
      </section>

      {/* Opportunity Section */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-heading">{t('opportunity.title')}</h2>
          <p className="text-xl text-body max-w-4xl mx-auto leading-relaxed mb-4">
            {t('opportunity.description')}
          </p>
          <p className="text-lg font-semibold text-[color:var(--color-primary-800)] max-w-3xl mx-auto">
            {t('opportunity.subtext')}
          </p>
        </div>

        <h3 className="text-2xl font-bold text-heading text-center mb-8">
          {t('opportunity.indicatorsTitle')}
        </h3>

        <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 max-w-4xl mx-auto px-4">
          {(t('opportunity.stats', { returnObjects: true }) as any[] || []).map((stat: any, index: number) => (
            <div key={index} className="flex items-start gap-3 py-2">
              <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col">
                <span className="text-xl sm:text-2xl font-extrabold text-[color:var(--color-accent-500)] leading-tight">{stat.value}</span>
                <span className="text-sm sm:text-base font-semibold text-heading leading-snug">{stat.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="bg-surface py-20 border-y border-ui">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-heading">{t('benefits.title')}</h2>
            <p className="text-xl text-body max-w-3xl mx-auto">{t('benefits.description')}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {(t('benefits.items', { returnObjects: true }) as any[] || []).map((benefit: any, index: number) => (
              <div key={index} className="card-surface card-hover-blue p-8 rounded-3xl border-2 border-ui">
                <div className="w-12 h-12 rounded-full bg-[color:var(--color-accent-300)] flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold mb-4 text-heading">{benefit.title}</h4>
                <p className="text-body leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Models */}
      <section className="py-20 bg-app">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-heading">{t('collaboration.title')}</h2>
            <p className="text-xl text-body max-w-4xl mx-auto leading-relaxed">{t('collaboration.description')}</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {(t('collaboration.models', { returnObjects: true }) as any[] || []).map((model: any, index: number) => (
              <div key={index} className="card-surface border-2 border-ui p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-4 text-heading">{model.title}</h3>
                <p className="text-body leading-relaxed mb-6">{model.description}</p>
                <p className="font-bold text-heading mb-2">{t('collaboration.idealFor')}</p>
                <p className="text-body leading-relaxed">{model.idealFor}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Profiles */}
      <section className="py-20 bg-surface border-y border-ui">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-16">

          {/* What you get */}
          <div>
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-4 text-heading">{t('whatYouGet.title')}</h2>
              <p className="text-xl text-body max-w-4xl mx-auto">{t('whatYouGet.description')}</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto px-4">
              {(t('whatYouGet.items', { returnObjects: true }) as any[] || []).map((item: any, index: number) => (
                <div key={index} className="flex items-start gap-3 p-5 card-surface rounded-xl border border-ui">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-heading mb-1">{item.title}</h3>
                    <p className="text-body leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Who can partner */}
          <div>
            <div className="bg-[#FEC930]/10 p-6 rounded-2xl border border-[#FEC930]/30 max-w-3xl mx-auto">
              <p className="text-body font-medium text-center text-lg">
                {t('profiles.description')}
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Process Section */}
      <section className="bg-surface py-20 border-t border-ui">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-16 text-center text-heading">{t('process.title')}</h2>
          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[#FEC930] before:to-transparent">
            {(t('process.steps', { returnObjects: true }) as any[] || []).map((step: any, index: number) => (
              <div key={index} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-surface bg-[#FEC930] text-black font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  {step.number}
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-surface p-6 rounded-2xl border-2 border-ui shadow-sm hover:border-[#FEC930] transition-colors">
                  <h4 className="font-bold text-xl mb-2 text-heading">{step.title}</h4>
                  <p className="text-body leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-black py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-6 text-white">{t('ctaFinal.title')}</h2>
          <p className="text-xl text-white/80 mb-12 leading-relaxed">
            {t('ctaFinal.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <a href="https://meetings.hubspot.com/hpensado3" target="_blank" rel="noopener noreferrer">
              <button className="btn-primary px-10 py-5 text-lg transition-transform hover:scale-105 active:scale-95">
                {t('ctaFinal.buttonPrimary')}
              </button>
            </a>
            <Link to={getLocalizedRoute('home')}>
              <button className="border border-white text-white rounded-[6px] px-10 py-5 text-lg hover:bg-white hover:text-black transition-all font-semibold">
                {t('ctaFinal.buttonSecondary')}
              </button>
            </Link>
          </div>
          <p className="text-white/50 text-sm">
            {t('ctaFinal.microcopy')}
          </p>
        </div>
      </section>
    </div>
  )
}

export default Partners
