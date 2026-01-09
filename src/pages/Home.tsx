import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { usePageMetadata } from '../hooks/usePageMetadata'
import { useLanguage } from '../hooks/useLanguage'

function Home() {
  const { t } = useTranslation('home')
  const { t: tCommon } = useTranslation('common')
  const { getLocalizedRoute } = useLanguage()

  usePageMetadata({
    titleKey: 'home.title',
    descriptionKey: 'home.description',
    namespace: 'meta',
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-amber-100 text-amber-800 text-sm font-semibold px-4 py-2 rounded-full">
                {t('hero.badge')}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-amber-700 to-orange-700 bg-clip-text text-transparent leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-700 leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to={getLocalizedRoute('contact')}>
                <button className="bg-gradient-to-r from-amber-500 to-orange-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-semibold text-lg">
                  {t('hero.ctaPrimary')}
                </button>
              </Link>
              <Link to={getLocalizedRoute('contact')}>
                <button className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-xl shadow-md hover:bg-gray-800 hover:text-white transition-all duration-200 font-semibold text-lg">
                  {t('hero.ctaSecondary')}
                </button>
              </Link>
            </div>
            <p className="text-sm text-gray-600 mt-6">
              {t('hero.microcopy')}
            </p>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              {[tCommon('trust.noCreditCard'), tCommon('trust.setupMinutes'), tCommon('trust.spanishSupport')].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-amber-500 to-orange-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: t('stats.accuracy'), label: t('stats.accuracyLabel') },
              { value: t('stats.timeReduction'), label: t('stats.timeReductionLabel') },
              { value: t('stats.errorReduction'), label: t('stats.errorReductionLabel') },
            ].map((stat) => (
              <div key={stat.label} className="p-6">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t('whatIs.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('whatIs.description')}
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t('useCases.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t('useCases.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              emoji: '🏛️',
              title: t('useCases.notarial.title'),
              description: t('useCases.notarial.description'),
              color: 'from-amber-50 to-amber-100',
              border: 'border-amber-200',
              linkColor: 'text-amber-700 hover:text-amber-900',
            },
            {
              emoji: '⚖️',
              title: t('useCases.legal.title'),
              description: t('useCases.legal.description'),
              color: 'from-orange-50 to-orange-100',
              border: 'border-orange-200',
              linkColor: 'text-orange-700 hover:text-orange-900',
            },
            {
              emoji: '🏢',
              title: t('useCases.business.title'),
              description: t('useCases.business.description'),
              color: 'from-orange-50 to-orange-100',
              border: 'border-orange-200',
              linkColor: 'text-orange-700 hover:text-orange-900',
            },
          ].map((useCase) => (
            <div
              key={useCase.title}
              className={`bg-gradient-to-br ${useCase.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${useCase.border}`}
            >
              <div className="text-5xl mb-4">{useCase.emoji}</div>
              <h4 className="font-bold text-2xl mb-3 text-gray-900">{useCase.title}</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">{useCase.description}</p>
              <Link to={getLocalizedRoute('useCases')}>
                <button className={`mt-6 font-semibold transition-colors ${useCase.linkColor}`}>{t('useCases.seeMore')}</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t('howItWorks.title')}</h2>
            <p className="text-xl text-gray-600">{t('howItWorks.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-amber-200 via-orange-200 to-amber-200 -z-10" />

            {[
              {
                step: '1',
                title: t('howItWorks.step1.title'),
                description: t('howItWorks.step1.description'),
                color: 'from-amber-500 to-amber-600',
              },
              {
                step: '2',
                title: t('howItWorks.step2.title'),
                description: t('howItWorks.step2.description'),
                color: 'from-orange-500 to-orange-600',
              },
              {
                step: '3',
                title: t('howItWorks.step3.title'),
                description: t('howItWorks.step3.description'),
                color: 'from-green-500 to-green-600',
              },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div
                  className={`bg-gradient-to-br ${item.color} text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg`}
                >
                  {item.step}
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h4 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t('benefits.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-6">
          {[
            { emoji: t('benefits.time.emoji'), title: t('benefits.time.title'), description: t('benefits.time.description') },
            { emoji: t('benefits.errors.emoji'), title: t('benefits.errors.title'), description: t('benefits.errors.description') },
            { emoji: t('benefits.understanding.emoji'), title: t('benefits.understanding.title'), description: t('benefits.understanding.description') },
            { emoji: t('benefits.keyInfo.emoji'), title: t('benefits.keyInfo.title'), description: t('benefits.keyInfo.description') },
            { emoji: t('benefits.control.emoji'), title: t('benefits.control.title'), description: t('benefits.control.description') },
          ].map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 text-center"
            >
              <div className="text-4xl mb-4">{benefit.emoji}</div>
              <h3 className="font-bold text-lg mb-2 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
              {t('differentiator.title')}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              {t('differentiator.subtitle')}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mt-12">
            {[
              { text: t('differentiator.points.one') },
              { text: t('differentiator.points.two') },
              { text: t('differentiator.points.three') },
              { text: t('differentiator.points.four') },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-100">
                <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-700 font-medium">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">{t('security.title')}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t('security.description')}
          </p>
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={`star-${i}`} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 italic" cite="">
              "{t('testimonial.quote')}"
            </blockquote>
          </div>
          <footer className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-orange-500 rounded-full mb-4 flex items-center justify-center text-2xl font-bold">
              JM
            </div>
            <p className="font-semibold text-lg">{t('testimonial.author')}</p>
            <p className="text-gray-400">{t('testimonial.company')}</p>
          </footer>
        </div>
      </section>

      <section className="bg-gradient-to-r from-amber-500 via-orange-600 to-amber-500 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">{t('cta.title')}</h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <Link to={getLocalizedRoute('contact')}>
            <button className="bg-white text-amber-600 px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200 font-bold text-lg">
              {t('cta.button')}
            </button>
          </Link>
          <p className="mt-6 text-white/80 text-sm">{t('cta.microcopy')}</p>
        </div>
      </section>
    </div>
  )
}

export default Home

