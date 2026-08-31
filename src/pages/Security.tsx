import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { useLanguage } from '../hooks/useLanguage'

const ShieldCheckIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const ServerIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
)

const LockClosedIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
)

const CpuChipIcon = () => (
  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
  </svg>
)

function Security() {
  const { t } = useTranslation('security')
  const { getLocalizedRoute } = useLanguage()

  usePageMetadata({
    titleKey: 'security.title',
    descriptionKey: 'security.description',
    namespace: 'meta',
  })

  return (
    <div className="min-h-screen bg-app">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-[#F8F8F8] py-20 md:py-32">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="absolute inset-0 bg-grid-pattern opacity-10" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="text-sm font-semibold px-4 py-2 rounded-full bg-[rgba(254,201,48,0.15)] text-black">
                {t('hero.badge')}
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-heading leading-tight">
              {t('hero.title')}
            </h1>
            <p className="text-xl md:text-2xl mb-6 text-body leading-relaxed">
              {t('hero.subtitle')}
            </p>
            <p className="text-sm text-body font-medium uppercase tracking-wider">
              {t('hero.microcopy')}
            </p>
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="text-[#FFCF00] mb-6">
              <ServerIcon />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-heading">{t('infrastructure.title')}</h2>
            <p className="text-lg text-body leading-relaxed mb-8">
              {t('infrastructure.description')}
            </p>
            <div className="space-y-4">
              <h4 className="font-bold text-heading">{t('infrastructure.benefits.title')}</h4>
              {(t('infrastructure.benefits.items', { returnObjects: true }) as string[] || []).map((item: string, i: number) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-[color:var(--color-success)] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-body">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-surface-muted p-8 rounded-3xl border-2 border-ui shadow-xl">
            <h4 className="text-xl font-bold mb-8 text-center text-heading">{t('infrastructure.certifications.title')}</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(t('infrastructure.certifications.items', { returnObjects: true }) as string[] || []).map((cert: string, i: number) => (
                <div key={i} className="bg-white p-6 rounded-2xl border border-ui flex items-center justify-center text-center shadow-sm hover:shadow-md transition-shadow">
                  <span className="font-bold text-heading text-lg">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Data Protection & Encryption */}
      <section className="bg-surface-muted py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#FFCF00] flex justify-center mb-6">
              <ShieldCheckIcon />
            </div>
            <h2 className="text-4xl font-bold mb-6 text-heading">{t('protection.title')}</h2>
            <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">{t('protection.description')}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="card-surface p-8 rounded-2xl border border-ui shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-heading">{t('protection.transit.title')}</h4>
              <p className="text-body mb-6">{t('protection.transit.description')}</p>
              <p className="inline-block text-sm font-semibold text-heading bg-app/70 px-3 py-2 rounded-lg">{t('protection.transit.detail')}</p>
            </div>
            <div className="card-surface p-8 rounded-2xl border border-ui shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-heading">{t('protection.rest.title')}</h4>
              <p className="text-body leading-relaxed mb-6">{t('protection.rest.description')}</p>
              <p className="inline-block text-sm font-semibold text-heading bg-app/70 px-3 py-2 rounded-lg">{t('protection.rest.detail')}</p>
            </div>
            <div className="card-surface p-8 rounded-2xl border border-ui shadow-lg">
              <h4 className="text-xl font-bold mb-4 text-heading">{t('protection.signedUrls.title')}</h4>
              <p className="text-body leading-relaxed mb-6">{t('protection.signedUrls.description')}</p>
              <p className="inline-block text-sm font-semibold text-heading bg-app/70 px-3 py-2 rounded-lg">{t('protection.signedUrls.detail')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Access Control */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-[#FFCF00] flex justify-center mb-6">
            <LockClosedIcon />
          </div>
          <h2 className="text-4xl font-bold mb-6 text-heading">{t('access.title')}</h2>
          <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed">{t('access.description')}</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { key: 'authentication' },
            { key: 'session' },
            { key: 'pbac' },
            { key: 'isolation' },
            { key: 'audit' },
          ].map((item) => (
            <div key={item.key} className="p-6 bg-white rounded-2xl border-2 border-ui hover:border-[#FFCF00] transition-colors shadow-sm">
              <h4 className="font-bold text-heading mb-3">{t(`access.${item.key}.title`)}</h4>
              <p className="text-sm text-body leading-relaxed">{t(`access.${item.key}.description`)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI Security */}
      <section className="bg-black py-20 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="text-[#FFCF00] flex justify-center mb-6">
              <CpuChipIcon />
            </div>
            <h2 className="text-4xl font-bold mb-6">{t('ai.title')}</h2>
            <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">{t('ai.description')}</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl border border-white/20">
                <table className="w-full text-left">
                  <thead className="bg-white/10 text-white font-bold">
                    <tr>
                      <th className="p-4">{t('ai.providers.headers.technology')}</th>
                      <th className="p-4">{t('ai.providers.headers.purpose')}</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/10">
                    {(t('ai.providers.items', { returnObjects: true }) as any[] || []).map((item: any, i: number) => (
                      <tr key={i} className="hover:bg-white/5 transition-colors">
                        <td className="p-4 font-semibold">{item.technology}</td>
                        <td className="p-4 text-white/80">{item.purpose}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-[#FFCF00] text-black p-6 rounded-2xl">
                <h4 className="font-bold mb-2">{t('ai.important.title')}</h4>
                <p className="text-sm font-medium leading-relaxed">{t('ai.important.description')}</p>
              </div>
              <div>
                <h4 className="font-bold mb-4">{t('ai.measures.title')}</h4>
                <ul className="grid grid-cols-1 gap-2">
                  {(t('ai.measures.items', { returnObjects: true }) as string[] || []).map((item: string, i: number) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-white/80">
                      <span className="text-[#FFCF00]">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <p className="mt-12 text-center text-lg text-white/85 max-w-4xl mx-auto leading-relaxed">
            {t('ai.closing')}
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center text-heading">{t('faq.title')}</h2>
        <div className="space-y-6">
          {(t('faq.items', { returnObjects: true }) as any[] || []).map((item: any, i: number) => (
            <div key={i} className="p-6 bg-white rounded-2xl border-2 border-ui shadow-sm">
              <h4 className="font-bold text-lg mb-3 text-heading">{item.question}</h4>
              <p className="text-body leading-relaxed">{item.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#FEC930] py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-black">{t('cta.title')}</h2>
          <p className="text-xl mb-10 text-black leading-relaxed">
            {t('cta.description')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to={getLocalizedRoute('contact')}>
              <button className="bg-black text-white px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200 font-bold text-lg">
                {t('cta.primaryButton')}
              </button>
            </Link>
            <a href="https://meetings.hubspot.com/hpensado3" target="_blank" rel="noopener noreferrer">
              <button className="bg-transparent text-black border-2 border-black px-10 py-5 rounded-xl hover:bg-black hover:text-white transform hover:-translate-y-1 transition-all duration-200 font-bold text-lg">
                {t('cta.secondaryButton')}
              </button>
            </a>
          </div>
          <p className="mt-6 text-black text-sm font-medium">{t('cta.microcopy')}</p>
        </div>
      </section>
    </div>
  )
}

export default Security
