import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { usePageMetadata } from '../hooks/usePageMetadata'
import { useLanguage } from '../hooks/useLanguage'

function Home() {
  const { t } = useTranslation('home')
  const { getLocalizedRoute } = useLanguage()

  usePageMetadata({
    titleKey: 'home.title',
    descriptionKey: 'home.description',
    namespace: 'meta',
  })

  return (
    <div className="min-h-screen bg-app">
      <section className="relative overflow-hidden" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(254, 201, 48, 0.15)', color: '#000000' }}>
                {t('hero.badge')}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-heading leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-body leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to={getLocalizedRoute('contact')}>
                <button className="btn-primary px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-semibold text-lg">
                  {t('hero.ctaPrimary')}
                </button>
              </Link>
              <Link to={getLocalizedRoute('useCases')}>
                <button className=" btn-primary px-8 py-4 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-semibold text-lg">
                  {t('hero.ctaSecondary')}
                </button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-body">
              {t('hero.microcopy').split(' | ').map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-[color:var(--color-success)]" fill="currentColor" viewBox="0 0 20 20">
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

      <section className="py-16 bg-black text-white">
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
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">{t('whatIs.title')}</h2>
          <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed mb-10">
            {t('whatIs.description')}
          </p>
          
          {/* YouTube Video Embed */}
          <div className="mx-auto max-w-3xl">
            <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
                src={t('whatIs.videoUrl')}
                title="DocumentoIQ Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </section>

      <div className="flex flex-col">
      <section className="order-2 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">{t('useCases.title')}</h2>
          <p className="text-xl text-body max-w-3xl mx-auto">{t('useCases.subtitle')}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              iconPath:
                'M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6 2.292m0-14.25v14.25',
              title: t('useCases.notarial.title'),
              description: t('useCases.notarial.description'),
              cta: t('useCases.notarialCta'),
              route: 'legalHelpAiNotaries' as const,
              color: 'from-[color:var(--color-neutral-000)] to-[color:var(--color-neutral-100)]',
              border: 'border-[color:var(--color-neutral-400)]',
              linkColor: 'link',
            },
            {
              iconPath:
                'M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z',
              title: t('useCases.legal.title'),
              description: t('useCases.legal.description'),
              cta: t('useCases.legalCta'),
              route: 'legalHelpAiBanking' as const,
              color: 'from-[color:var(--color-neutral-000)] to-[color:var(--color-neutral-100)]',
              border: 'border-[color:var(--color-neutral-400)]',
              linkColor: 'link',
            },
            {
              iconPath:
                'M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21',
              title: t('useCases.business.title'),
              description: t('useCases.business.description'),
              cta: t('useCases.businessCta'),
              route: 'useCases' as const,
              color: 'from-[color:var(--color-neutral-000)] to-[color:var(--color-neutral-100)]',
              border: 'border-[color:var(--color-neutral-400)]',
              linkColor: 'link',
            },
          ].map((useCase) => (
            <div
              key={useCase.title}
              className={`card-surface card-hover-blue bg-gradient-to-br ${useCase.color} p-8 rounded-2xl border ${useCase.border} cursor-pointer`}
            >
              <div className="mb-4 text-[#FFCF00]">
                <svg
                  className="w-12 h-12"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={useCase.iconPath}
                  />
                </svg>
              </div>

              <h4 className="font-bold text-2xl mb-3 text-heading">
                {useCase.title}
              </h4>

              <p className="text-body mb-4 leading-relaxed">
                {useCase.description}
              </p>

              <Link to={getLocalizedRoute(useCase.route)}>
                <button className={`mt-6 font-semibold transition-colors ${useCase.linkColor}`}>
                  {useCase.cta}
                </button>
              </Link>
            </div>
          ))}
        </div>

      </section>

      <section className="order-1 bg-surface-muted py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">{t('howItWorks.title')}</h2>
            <p className="text-xl text-body">{t('howItWorks.subtitle')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-[#EEEEEE] -z-10" />

            {[
              {
                step: '1',
                title: t('howItWorks.step1.title'),
                description: t('howItWorks.step1.description'),
                color: 'from-black to-black',
              },
              {
                step: '2',
                title: t('howItWorks.step2.title'),
                description: t('howItWorks.step2.description'),
                color: 'from-black to-black',
              },
              {
                step: '3',
                title: t('howItWorks.step3.title'),
                description: t('howItWorks.step3.description'),
                color: 'from-[color:var(--color-success)] to-[color:var(--color-success)]',
              },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div
                  className={`bg-gradient-to-br ${item.color} text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg`}
                >
                  {item.step}
                </div>
                <div className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-8 rounded-2xl cursor-pointer">
                  <h4 className="font-bold text-xl mb-3 text-heading">{item.title}</h4>
                  <p className="text-body leading-relaxed">
                    {item.description.split(/(OCR avanzado\*?|advanced OCR\*?|OCR avançado\*?)/gi).map((part: string, i: number) => {
                      const lowerPart = part.toLowerCase();
                      const isOcr = lowerPart.includes('ocr');
                      if (isOcr) {
                        return (
                          <Link key={i} to={getLocalizedRoute('blog09Resources')} className="link font-semibold hover:underline">
                            {part}
                          </Link>
                        );
                      }
                      return <span key={i}>{part}</span>;
                    })}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      </div>

      <div className="flex flex-col">
      <section className="order-3 w-full max-w-7xl mx-auto px-6 py-20 border-t border-[color:var(--color-neutral-400)]">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">{t('technology.title')}</h2>
          <p className="text-xl text-body max-w-4xl mx-auto leading-relaxed">
            {t('technology.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              key: 'understanding',
              iconPath: 'M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z',
            },
            {
              key: 'ocr',
              iconPath: 'M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5V5.625a3.375 3.375 0 0 0-3.375-3.375H8.25m6.75 12-3 3m0 0-3-3m3 3V10.5M8.25 2.25H5.625A1.875 1.875 0 0 0 3.75 4.125v15.75c0 1.036.84 1.875 1.875 1.875h12.75c1.036 0 1.875-.84 1.875-1.875V8.25L14.25 2.25h-6Z',
              route: 'blog09Resources' as const,
            },
            {
              key: 'extraction',
              iconPath: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m-9.75 0h9.75',
            },
            {
              key: 'workflows',
              iconPath: 'M6.75 3.75H5.625A1.875 1.875 0 0 0 3.75 5.625v1.5A1.875 1.875 0 0 0 5.625 9h1.5A1.875 1.875 0 0 0 9 7.125v-1.5A1.875 1.875 0 0 0 7.125 3.75H6.75Zm0 11.25H5.625a1.875 1.875 0 0 0-1.875 1.875v1.5c0 1.036.84 1.875 1.875 1.875h1.5A1.875 1.875 0 0 0 9 18.375v-1.5A1.875 1.875 0 0 0 7.125 15H6.75ZM17.25 3.75h-1.125a1.875 1.875 0 0 0-1.875 1.875v1.5c0 1.036.84 1.875 1.875 1.875h1.5A1.875 1.875 0 0 0 19.5 7.125v-1.5a1.875 1.875 0 0 0-1.875-1.875h-.375ZM9 6.375h5.25M6.375 9v6m2.625 3.375h5.25m3-9.375v6',
            },
            {
              key: 'structured',
              iconPath: 'M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h10.5',
            },
            {
              key: 'integration',
              iconPath: 'M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75m-9 0h9m-9 0-3 3m12-3 3 3M10.5 13.5H6.75a4.5 4.5 0 1 0 0 9h3.75m0-9v9m0-9 3-3m-3 12 3-3',
            },
          ].map((item) => {
            const content = (
              <>
                <div className="mb-4 text-[color:var(--color-primary-800)]">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={item.iconPath} />
                  </svg>
                </div>
                <h3 className="font-bold text-xl mb-3 text-heading">{t(`technology.cards.${item.key}.title`)}</h3>
                <p className="text-body leading-relaxed">{t(`technology.cards.${item.key}.description`)}</p>
              </>
            )

            return item.route ? (
              <Link key={item.key} to={getLocalizedRoute(item.route)} className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-7 rounded-2xl cursor-pointer">
                {content}
              </Link>
            ) : (
              <div key={item.key} className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-7 rounded-2xl">
                {content}
              </div>
            )
          })}
        </div>
      </section>

      <section className="order-1 w-full max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">{t('benefits.title')}</h2>
          <p className="text-xl text-body max-w-3xl mx-auto">
            {t('benefits.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              iconPath: 'M6.429 9.75 2.25 12l4.179 2.25m0-4.5 5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0 4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0-5.571 3-5.571-3',
              title: t('benefits.specialized.title'),
              description: t('benefits.specialized.description'),
            },
            {
              iconPath: 'M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z',
              title: t('benefits.human.title'),
              description: t('benefits.human.description'),
            },
            {
              iconPath: 'M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.28m5.94 2.28-2.28 5.941',
              title: t('benefits.growth.title'),
              description: t('benefits.growth.description'),
            },
            {
              iconPath: 'M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m-9.75 0h9.75',
              title: t('benefits.adaptation.title'),
              description: t('benefits.adaptation.description'),
            },
            {
              iconPath: 'M13.5 10.5V6.75a4.5 4.5 0 1 1 9 0v3.75m-9 0h9m-9 0-3 3m12-3 3 3M10.5 13.5H6.75a4.5 4.5 0 1 0 0 9h3.75m0-9v9m0-9 3-3m-3 12 3-3',
              title: t('benefits.ecosystem.title'),
              description: t('benefits.ecosystem.description'),
            },
            {
              iconPath: 'M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605',
              title: t('benefits.impact.title'),
              description: t('benefits.impact.description'),
            },
          ].map((benefit, index) => (
            <div
              key={index}
              className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-6 rounded-2xl text-center cursor-pointer"
            >
              <div className="mb-4 flex justify-center">
                <svg
                  className="w-10 h-10 text-[color:var(--color-primary-800)]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={benefit.iconPath}
                  />
                </svg>
              </div>

              <h3 className="font-bold text-lg mb-2 text-heading">
                {benefit.title}
              </h3>

              <p className="text-body text-sm leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="order-2 bg-surface-muted py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">
              {t('comparison.title')}
            </h2>
            <p className="text-xl text-body leading-relaxed">
              {t('comparison.description')}
            </p>
          </div>

          <div className="overflow-x-auto rounded-2xl border-2 border-[color:var(--color-neutral-400)] bg-white shadow-sm">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="bg-black text-white">
                  <th className="w-1/2 px-6 py-5 text-xl font-bold">
                    {t('comparison.generic.title')}
                    <span className="block mt-1 text-sm font-medium italic opacity-80">{t('comparison.generic.subtitle')}</span>
                  </th>
                  <th className="w-1/2 px-6 py-5 text-xl font-bold border-l border-white/20">
                    {t('comparison.documentoiq.title')}
                    <span className="block mt-1 text-sm font-medium italic text-[color:var(--color-warning)]">{t('comparison.documentoiq.subtitle')}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {(['one', 'two', 'three', 'four', 'five', 'six'] as const).map((row) => (
                  <tr key={row} className="border-t border-[color:var(--color-neutral-400)] even:bg-[color:var(--color-neutral-100)]">
                    <td className="px-6 py-5 text-body align-top">{t(`comparison.rows.${row}.generic`)}</td>
                    <td className="px-6 py-5 text-heading font-medium align-top border-l border-[color:var(--color-neutral-400)]">{t(`comparison.rows.${row}.documentoiq`)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="mt-10 text-center text-xl md:text-2xl font-bold text-heading max-w-4xl mx-auto">
            {t('comparison.closing')}
          </p>
        </div>
      </section>

      </div>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">{t('security.title')}</h2>
          <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed mb-8">
            {t('security.description')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
          {(['one', 'two', 'three', 'four'] as const).map((point) => (
            <div key={point} className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] flex items-start gap-3 p-5 rounded-xl">
              <svg className="w-6 h-6 text-[color:var(--color-success)] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <p className="text-body font-medium leading-relaxed">{t(`security.points.${point}`)}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to={getLocalizedRoute('security')} className="link font-bold text-lg hover:underline">
            {t('security.link')}
          </Link>
        </div>
      </section>

      <section className="bg-black py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <p className="inline-block mb-6 px-4 py-2 rounded-full bg-white/20 text-sm font-semibold tracking-wide text-[#FEC930] border border-[#FEC930]/60 shadow-sm">
              {t('testimonial.label')}
            </p>
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 italic" cite="">
              "{t('testimonial.quote')}"
            </blockquote>
          </div>
          <footer className="flex flex-col items-center">
            <div className="w-16 h-16 bg-[#FEC930] rounded-full mb-4 flex items-center justify-center text-2xl font-bold text-black">
              JM
            </div>
            <p className="font-semibold text-lg">{t('testimonial.author')}</p>
            <p className="text-white/75">{t('testimonial.company')}</p>
          </footer>
        </div>
      </section>

      {/* Partners Banner */}
      <section className="py-20 bg-surface border-t border-ui">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[color:var(--color-primary-800)] mb-3">
            {t('partnersBanner.eyebrow')}
          </p>
          <h2 className="text-4xl font-bold mb-6 text-heading">{t('partnersBanner.title')}</h2>
          <p className="text-xl text-body mb-8 leading-relaxed">
            {t('partnersBanner.description')}
          </p>
          <Link to={getLocalizedRoute('partners')} className="link font-bold text-lg hover:underline">
            {t('partnersBanner.link')}
          </Link>
        </div>
      </section>

      <section className="bg-[#FEC930] py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">{t('cta.title')}</h2>
          <p className="text-xl mb-10 text-black leading-relaxed">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={getLocalizedRoute('contact')}>
              <button className="bg-black text-white px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200 font-bold text-lg">
                {t('cta.buttonDemo')}
              </button>
            </Link>
            <Link to={getLocalizedRoute('product')}>
              <button className="bg-transparent text-black border-2 border-black px-10 py-5 rounded-xl hover:bg-black hover:text-white transform hover:-translate-y-1 transition-all duration-200 font-bold text-lg">
                {t('cta.buttonStart')}
              </button>
            </Link>
          </div>
          <p className="mt-6 text-black text-sm">{t('cta.microcopy')}</p>
        </div>
      </section>
    </div>
  )
}

export default Home

