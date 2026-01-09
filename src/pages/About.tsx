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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="bg-gradient-to-br from-amber-50 via-white to-orange-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="bg-orange-100 text-orange-800 text-sm font-semibold px-4 py-2 rounded-full">{t('hero.badge')}</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-amber-700 to-orange-700 bg-clip-text text-transparent">
            {t('hero.title')}
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
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
              border: 'border-amber-200',
              gradient: 'from-amber-50 to-amber-100',
              iconColor: 'text-amber-600',
              iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
            },
            {
              title: t('vision.title'),
              description: t('vision.description'),
              border: 'border-orange-200',
              gradient: 'from-orange-50 to-orange-100',
              iconColor: 'text-orange-600',
              iconPath:
                'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`bg-gradient-to-br ${card.gradient} p-10 rounded-3xl shadow-xl border-2 ${card.border}`}
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className={`w-8 h-8 ${card.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">{card.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">{t('values.title')}</h2>
            <p className="text-xl text-gray-600">{t('values.subtitle')}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                emoji: t('values.precision.emoji'),
                title: t('values.precision.title'),
                description: t('values.precision.description'),
              },
              {
                emoji: t('values.speed.emoji'),
                title: t('values.speed.title'),
                description: t('values.speed.description'),
              },
              {
                emoji: t('values.accessibility.emoji'),
                title: t('values.accessibility.title'),
                description: t('values.accessibility.description'),
              },
            ].map((value) => (
              <div key={value.title} className="text-center p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100">
                <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                  {value.emoji}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
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
                emoji: t('team.ai.emoji'),
                title: t('team.ai.title'),
                description: t('team.ai.description'),
              },
              {
                emoji: t('team.legal.emoji'),
                title: t('team.legal.title'),
                description: t('team.legal.description'),
              },
              {
                emoji: t('team.development.emoji'),
                title: t('team.development.title'),
                description: t('team.development.description'),
              },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">{t('impact.title')}</h2>
            <p className="text-xl text-gray-600">
              {t('impact.subtitle')}
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {[
              { value: t('impact.accuracy.value'), label: t('impact.accuracy.label'), color: 'text-amber-600' },
              { value: t('impact.timeReduction.value'), label: t('impact.timeReduction.label'), color: 'text-orange-600' },
              { value: t('impact.documents.value'), label: t('impact.documents.label'), color: 'text-green-600' },
              { value: t('impact.response.value'), label: t('impact.response.label'), color: 'text-orange-600' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-gray-600 text-sm">{t('impact.microcopy')}</p>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-500 to-orange-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6 text-white">{t('cta.title')}</h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <Link to={getLocalizedRoute('contact')}>
            <button className="bg-white text-amber-600 px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200 font-bold text-lg">
              {t('cta.button')}
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About

