import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { usePageMetadata } from '../hooks/usePageMetadata'
import { useLanguage } from '../hooks/useLanguage'

function About() {
  const { t } = useTranslation('about')
  const { getLocalizedRoute } = useLanguage()

  usePageMetadata({
    titleKey: 'about.title',
    descriptionKey: 'about.description',
    namespace: 'meta',
  })

  return (
    <div className="min-h-screen bg-app">
      <section className="relative bg-surface py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold px-4 py-2 rounded-full inline-flex items-center gap-2" style={{ backgroundColor: 'rgba(254, 201, 48, 0.15)', color: '#000000' }}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
              {t('hero.badge')}
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-heading">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-body leading-relaxed">
            {t('hero.subtitle')}
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: t('mission.title'),
              description: t('mission.description'),
              iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
            },
            {
              title: t('vision.title'),
              description: t('vision.description'),
              iconPath:
                'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
            },
          ].map((card) => (
            <div
              key={card.title}
              className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-10 rounded-3xl shadow-xl cursor-pointer"
            >
              <div className="bg-surface-muted w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className="w-8 h-8 text-[color:var(--color-primary-800)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-heading">{card.title}</h2>
              <p className="text-lg text-body leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-heading">{t('values.title')}</h2>
            <p className="text-xl text-body">{t('values.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: t('values.precision.title'),
                description: t('values.precision.description'),
                iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: t('values.speed.title'),
                description: t('values.speed.description'),
                iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
              },
              {
                title: t('values.accessibility.title'),
                description: t('values.accessibility.description'),
                iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-8 card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] rounded-2xl cursor-pointer">
                <div className="bg-surface-muted w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <svg className="w-8 h-8 text-[color:var(--color-primary-800)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={value.iconPath} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-heading">{value.title}</h3>
                <p className="text-body leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t('team.title')}</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              {t('team.description')}
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              {
                title: t('team.ai.title'),
                description: t('team.ai.description'),
                iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
              },
              {
                title: t('team.legal.title'),
                description: t('team.legal.description'),
                iconPath: 'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
              },
              {
                title: t('team.development.title'),
                description: t('team.development.description'),
                iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="flex items-center justify-center mb-4">
                  <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} />
                  </svg>
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-surface-muted py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-heading">{t('impact.title')}</h2>
            <p className="text-xl text-body">
              {t('impact.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {[
              { value: t('impact.accuracy.value'), label: t('impact.accuracy.label') },
              { value: t('impact.timeReduction.value'), label: t('impact.timeReduction.label') },
              { value: t('impact.documents.value'), label: t('impact.documents.label') },
              { value: t('impact.response.value'), label: t('impact.response.label') },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] rounded-2xl cursor-pointer">
                <div className="text-4xl font-bold mb-2 text-[color:var(--color-primary-800)]">{stat.value}</div>
                <p className="text-body font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-body text-sm">{t('impact.microcopy')}</p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="bg-gradient-primary text-white text-sm font-semibold px-4 py-2 rounded-full">{t('differentiator.badge')}</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-heading">
              {t('differentiator.title')}
            </h2>
            <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">
              {t('differentiator.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: t('differentiator.specialization.title'),
                description: t('differentiator.specialization.description'),
                iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
              },
              {
                title: t('differentiator.humanCentric.title'),
                description: t('differentiator.humanCentric.description'),
                iconPath: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z',
              },
              {
                title: t('differentiator.multilingual.title'),
                description: t('differentiator.multilingual.description'),
                iconPath: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
              >
                <div className="mb-4">
                  <svg className="w-12 h-12 text-[color:var(--color-primary-800)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-heading">{item.title}</h3>
                <p className="text-body leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-secondary py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6 text-white">{t('cta.title')}</h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <Link to={getLocalizedRoute('contact')}>
            <button className="bg-white text-[color:var(--color-accent-700)] px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200 font-bold text-lg">
              {t('cta.button')}
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About

