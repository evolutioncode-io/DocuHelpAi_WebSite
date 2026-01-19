import { useTranslation } from 'react-i18next'

import { usePageMetadata } from '../hooks/usePageMetadata'

function Contact() {
  const { t } = useTranslation('contact')

  usePageMetadata({
    titleKey: 'contact.title',
    descriptionKey: 'contact.description',
    namespace: 'meta',
  })

  return (
    <div className="min-h-screen bg-app">
      <section className="relative py-20 overflow-hidden" style={{ backgroundColor: '#F8F8F8' }}>
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="max-w-4xl mx-auto px-6 text-center relative">
          <div className="inline-block mb-6">
            <span className="text-sm font-semibold px-4 py-2 rounded-full" style={{ backgroundColor: 'rgba(254, 201, 48, 0.15)', color: '#000000' }}>
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
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-10 rounded-3xl shadow-xl">
            <h2 className="text-3xl font-bold mb-8 text-heading">{t('form.title')}</h2>
            <form className="space-y-6" aria-label={t('form.title')}>
              <div>
                <label htmlFor="name" className="block font-semibold mb-2 text-heading">
                  {t('form.name.label')}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border-2 border-[color:var(--color-neutral-400)] px-5 py-4 rounded-xl focus:border-[color:var(--color-accent-500)] focus:outline-none transition-colors"
                  placeholder={t('form.name.placeholder')}
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-2 text-heading">
                  {t('form.email.label')}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border-2 border-[color:var(--color-neutral-400)] px-5 py-4 rounded-xl focus:border-[color:var(--color-accent-500)] focus:outline-none transition-colors"
                  placeholder={t('form.email.placeholder')}
                />
              </div>
              <div>
                <label htmlFor="company" className="block font-semibold mb-2 text-heading">
                  {t('form.company.label')}
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full border-2 border-[color:var(--color-neutral-400)] px-5 py-4 rounded-xl focus:border-[color:var(--color-accent-500)] focus:outline-none transition-colors"
                  placeholder={t('form.company.placeholder')}
                />
              </div>
              <div>
                <label htmlFor="industry" className="block font-semibold mb-2 text-heading">
                  {t('form.industry.label')}
                </label>
                <select
                  id="industry"
                  name="industry"
                  defaultValue=""
                  className="w-full border-2 border-[color:var(--color-neutral-400)] px-5 py-4 rounded-xl focus:border-[color:var(--color-accent-500)] focus:outline-none transition-colors"
                >
                  <option value="">{t('form.industry.placeholder')}</option>
                  <option value="notaria">{t('form.industry.options.notaria')}</option>
                  <option value="banca">{t('form.industry.options.banca')}</option>
                  <option value="legal">{t('form.industry.options.legal')}</option>
                  <option value="seguros">{t('form.industry.options.seguros')}</option>
                  <option value="inmobiliaria">{t('form.industry.options.inmobiliaria')}</option>
                  <option value="logistica">{t('form.industry.options.logistica')}</option>
                  <option value="otra">{t('form.industry.options.otra')}</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold mb-2 text-heading">
                  {t('form.message.label')}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full border-2 border-[color:var(--color-neutral-400)] px-5 py-4 rounded-xl focus:border-[color:var(--color-accent-500)] focus:outline-none transition-colors resize-none"
                  placeholder={t('form.message.placeholder')}
                />
              </div>
              <button
                type="submit"
                className="btn-primary w-full px-8 py-5 text-lg"
                aria-label={t('form.submit')}
              >
                {t('form.submit')}
              </button>
              <p className="text-sm text-body text-center">{t('form.response')}</p>
            </form>
          </div>

          <div className="space-y-8">
            <div className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-8 rounded-3xl cursor-pointer">
              <h3 className="text-2xl font-bold mb-6 text-heading">{t('whyContact.title')}</h3>
              <div className="space-y-6">
                {[
                  { title: t('whyContact.items.demo.title'), description: t('whyContact.items.demo.description') },
                  { title: t('whyContact.items.custom.title'), description: t('whyContact.items.custom.description') },
                  { title: t('whyContact.items.support.title'), description: t('whyContact.items.support.description') },
                  { title: t('whyContact.items.enterprise.title'), description: t('whyContact.items.enterprise.description') },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="bg-surface-muted p-3 rounded-xl flex-shrink-0">
                      <svg className="w-6 h-6 text-[color:var(--color-primary-800)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-heading">{item.title}</h4>
                      <p className="text-body">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-8 rounded-3xl shadow-lg cursor-pointer">
              <h3 className="text-2xl font-bold mb-6 text-heading">{t('otherWays.title')}</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-surface-muted rounded-xl">
                  <svg className="w-6 h-6 text-[color:var(--color-primary-800)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-heading">{t('otherWays.email.label')}</p>
                    <a href={`mailto:${t('otherWays.email.value')}`} className="link">
                      {t('otherWays.email.value')}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-surface-muted rounded-xl">
                  <svg className="w-6 h-6 text-[color:var(--color-primary-800)] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-heading">{t('otherWays.hours.label')}</p>
                    <p className="text-body">{t('otherWays.hours.value')}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-black text-white border-2 border-black p-8 rounded-3xl shadow-xl text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-bold text-lg text-white">{t('guaranteed.title')}</span>
              </div>
              <p className="text-white">{t('guaranteed.subtitle')}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

