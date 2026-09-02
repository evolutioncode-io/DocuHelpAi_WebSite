import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { useLanguage } from '../hooks/useLanguage'
import { usePageMetadata } from '../hooks/usePageMetadata'

type Plan = { name: string; audience: string; tagline: string; description: string; includesTitle: string; features: string[]; cta: string }
type Stage = { title: string; action?: string; description: string }
type Comparison = { capability: string; starter: boolean; growth: boolean; scale: boolean }

function Plans() {
  const { t } = useTranslation('plans')
  const { getLocalizedRoute } = useLanguage()
  const plans = t('plans.items', { returnObjects: true }) as Plan[]
  const comparison = t('comparison.rows', { returnObjects: true }) as Comparison[]
  const stages = t('progression.items', { returnObjects: true }) as Stage[]
  const growth = t('growth.items', { returnObjects: true }) as Stage[]
  const faqs = t('faq.items', { returnObjects: true }) as Array<{ question: string; answer: string }>

  usePageMetadata({ titleKey: 'pricing.title', descriptionKey: 'pricing.description', namespace: 'meta' })

  const mark = (enabled: boolean) => enabled ? <span className="text-green-600 font-bold">✓</span> : <span className="text-body/50">—</span>

  return (
    <div className="min-h-screen bg-app">
      <section className="relative bg-surface py-20 overflow-hidden">
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="max-w-5xl mx-auto px-6 text-center relative">
          <span className="inline-block mb-6 text-sm font-semibold px-4 py-2 rounded-full bg-[#FEC930]/15 text-black">{t('hero.badge')}</span>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-heading">{t('hero.title')}</h1>
          <p className="text-xl text-body max-w-4xl mx-auto leading-relaxed mb-10">{t('hero.description')}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-5">
            <a href="#comparison" className="btn-primary px-8 py-4 text-lg font-semibold">{t('hero.primaryCta')}</a>
            <Link to={getLocalizedRoute('contact')} className="btn-secondary px-8 py-4 text-lg font-semibold">{t('hero.secondaryCta')}</Link>
          </div>
          <p className="text-sm text-body/80">{t('hero.microcopy')}</p>
        </div>
      </section>

      <section className="py-20 bg-app">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14"><h2 className="text-4xl font-bold mb-4 text-heading">{t('progression.title')}</h2><p className="text-xl text-body max-w-4xl mx-auto">{t('progression.description')}</p></div>
          <div className="grid md:grid-cols-4 gap-6">
            {stages.map((stage, index) => <div key={stage.title} className="relative card-surface border-2 border-ui rounded-2xl p-7"><div className="w-10 h-10 rounded-full bg-[#FEC930] flex items-center justify-center font-bold mb-5">{index + 1}</div><h3 className="text-xl font-bold mb-3 text-heading">{stage.title}</h3><p className="text-body">{stage.description}</p></div>)}
          </div>
        </div>
      </section>

      <section id="plans" className="py-20 bg-surface border-y border-ui scroll-mt-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14"><h2 className="text-4xl font-bold mb-4 text-heading">{t('plans.title')}</h2><p className="text-xl text-body max-w-4xl mx-auto">{t('plans.description')}</p></div>
          <div className="grid lg:grid-cols-3 gap-8">
            {plans.map((plan, index) => <article key={plan.name} className={`card-surface border-2 rounded-3xl p-8 flex flex-col ${index === 1 ? 'border-[#FEC930] shadow-xl' : 'border-ui'}`}><h3 className="text-3xl font-bold text-heading mb-2">{plan.name}</h3><p className="font-semibold text-[color:var(--color-primary-800)] mb-3">{plan.audience}</p><p className="text-xl font-bold text-heading mb-4">{plan.tagline}</p><p className="text-body leading-relaxed mb-7">{plan.description}</p><h4 className="font-bold text-heading mb-3">{plan.includesTitle}</h4><ul className="space-y-3 mb-8 flex-grow">{plan.features.map(feature => <li key={feature} className="flex gap-3 text-body"><span className="text-green-600">✓</span>{feature}</li>)}</ul>{index === 2 ? <Link to={getLocalizedRoute('contact')} className="btn-primary text-center px-6 py-3">{plan.cta}</Link> : <a href="#comparison" className="btn-secondary text-center px-6 py-3">{plan.cta}</a>}</article>)}
          </div>
        </div>
      </section>

      <section id="comparison" className="py-20 bg-app scroll-mt-24">
        <div className="max-w-6xl mx-auto px-6"><div className="text-center mb-12"><h2 className="text-4xl font-bold mb-4 text-heading">{t('comparison.title')}</h2><p className="text-xl text-body">{t('comparison.description')}</p></div><div className="overflow-x-auto card-surface border border-ui rounded-2xl"><table className="w-full min-w-[700px]"><thead><tr className="bg-surface-muted"><th className="text-left p-5">{t('comparison.capability')}</th><th className="p-5">Starter</th><th className="p-5">Growth</th><th className="p-5">Scale</th></tr></thead><tbody>{comparison.map(row => <tr key={row.capability} className="border-t border-ui"><td className="p-5 font-medium text-heading">{row.capability}</td><td className="p-5 text-center">{mark(row.starter)}</td><td className="p-5 text-center">{mark(row.growth)}</td><td className="p-5 text-center">{mark(row.scale)}</td></tr>)}</tbody></table></div></div>
      </section>

      <section className="py-20 bg-surface border-y border-ui"><div className="max-w-4xl mx-auto px-6 text-center"><h2 className="text-4xl font-bold mb-5 text-heading">{t('specializations.title')}</h2><p className="text-xl text-body mb-8">{t('specializations.description')}</p><Link to={getLocalizedRoute('useCases')} className="link font-bold text-lg">{t('specializations.cta')}</Link></div></section>

      <section className="py-20 bg-app"><div className="max-w-6xl mx-auto px-6"><div className="text-center mb-14"><h2 className="text-4xl font-bold mb-4 text-heading">{t('growth.title')}</h2><p className="text-xl text-body">{t('growth.description')}</p></div><div className="grid md:grid-cols-3 gap-8">{growth.map((item, index) => <div key={item.title} className="card-surface border-2 border-ui rounded-2xl p-8 relative"><p className="text-sm font-bold text-[color:var(--color-primary-800)] mb-2">{item.title}</p><h3 className="text-2xl font-bold mb-3 text-heading">{item.action}</h3><p className="text-body">{item.description}</p>{index < growth.length - 1 && <span className="hidden md:block absolute -right-6 top-1/2 text-3xl text-[#FEC930]">→</span>}</div>)}</div><p className="text-center text-lg font-semibold text-heading mt-10">{t('growth.closing')}</p></div></section>

      <section className="py-20 bg-surface border-y border-ui"><div className="max-w-4xl mx-auto px-6"><h2 className="text-4xl font-bold mb-12 text-center text-heading">{t('faq.title')}</h2><div className="space-y-4">{faqs.map(item => <details key={item.question} className="card-surface border border-ui rounded-xl p-6 group"><summary className="font-bold text-lg text-heading cursor-pointer">{item.question}</summary><p className="text-body mt-4 leading-relaxed">{item.answer}</p></details>)}</div></div></section>

      <section className="bg-black py-20"><div className="max-w-4xl mx-auto px-6 text-center"><h2 className="text-4xl font-bold mb-6 text-white">{t('cta.title')}</h2><p className="text-xl text-white/80 mb-10">{t('cta.description')}</p><div className="flex flex-col sm:flex-row justify-center gap-4"><a href="#plans" className="btn-primary px-8 py-4 text-lg">{t('cta.primary')}</a><Link to={getLocalizedRoute('contact')} className="btn-primary px-8 py-4 text-lg">{t('cta.secondary')}</Link></div><p className="text-white/60 text-sm mt-6">{t('cta.microcopy')}</p></div></section>
    </div>
  )
}

export default Plans
