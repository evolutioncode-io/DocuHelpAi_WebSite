import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { usePageMetadata } from '../hooks/usePageMetadata'
import { useLanguage } from '../hooks/useLanguage'

function HowWeWork() {
    const { t } = useTranslation('howWeWork')
    const { getLocalizedRoute } = useLanguage()

    usePageMetadata({
        titleKey: 'hero.title',
        descriptionKey: 'hero.subtitle',
        namespace: 'howWeWork',
    })

    const expectationsItems = t('expectations.items', { returnObjects: true }) as string[]

    return (
        <div className="min-h-screen bg-app">
            {/* Hero Section */}
            <section className="relative bg-surface py-20 overflow-hidden">
                <div className="absolute inset-0 bg-hero-overlay" />
                <div className="max-w-6xl mx-auto px-6 relative">
                    <div className="text-center mb-16">
                        <div className="flex justify-center flex-wrap gap-4 mb-8">
                            {(t('hero.highlights', { returnObjects: true }) as string[]).map((highlight, index) => (
                                <span key={index} className="text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2" style={{ backgroundColor: 'rgba(254, 201, 48, 0.15)', color: '#000000' }}>
                                    <svg className="w-4 h-4 text-[#FEC930]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                    </svg>
                                    {highlight}
                                </span>
                            ))}
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-heading">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed mb-8">
                            {t('hero.subtitle')}
                        </p>
                        <div className="flex flex-col items-center">
                            <Link to={getLocalizedRoute('contact')}>
                                <button className="btn-primary px-10 py-5 text-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 active:scale-95 text-black">
                                    {t('hero.primaryCta')}
                                </button>
                            </Link>
                            <p className="text-sm text-body/80 mt-4 italic">
                                {t('hero.microcopy')}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* ¿Por qué seguimos este proceso? */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-heading">{t('why.title')}</h2>
                    <div className="max-w-4xl mx-auto text-lg text-body leading-relaxed">
                        <p>
                            {t('why.text')}
                        </p>
                    </div>
                </div>
            </section>

            {/* El proceso paso a paso */}
            <section className="bg-surface-muted py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">{t('steps.title')}</h2>
                    </div>

                    <div className="space-y-12">
                        {[1, 2, 3, 4, 5].map((num) => {
                            const stepKey = `steps.step${num}`
                            const step = t(stepKey, { returnObjects: true }) as any
                            return (
                                <div key={num} className="card-surface border-2 border-[color:var(--color-neutral-400)] p-10 rounded-3xl relative overflow-hidden group hover:border-[#FEC930] transition-colors duration-300">
                                    <div className="absolute top-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                        <span className="text-9xl font-bold text-heading">{num}</span>
                                    </div>
                                    <div className="relative z-10 max-w-4xl">
                                        <h3 className="text-3xl font-bold mb-6 text-heading">{step.title}</h3>
                                        <p className="text-lg text-body mb-8 leading-relaxed">
                                            {step.description}
                                        </p>

                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div>
                                                <h4 className="font-bold text-heading mb-4 flex items-center gap-2">
                                                    Resultados:
                                                </h4>
                                                <ul className="space-y-3">
                                                    {step.results.map((result: string, idx: number) => (
                                                        <li key={idx} className="flex items-start gap-2">
                                                            <svg className="w-5 h-5 text-[#FEC930] flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                                            </svg>
                                                            <span className="text-body font-medium">{result}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                            {(step.footer || step.disclaimer) && (
                                                <div className="flex flex-col justify-end">
                                                    {step.footer && (
                                                        <p className="text-body font-semibold italic mb-2">
                                                            {step.footer}
                                                        </p>
                                                    )}
                                                    {step.disclaimer && (
                                                        <p className="text-sm text-body/70 italic">
                                                            {step.disclaimer}
                                                        </p>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Qué puedes esperar */}
            <section className="py-20 bg-surface">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-heading">{t('expectations.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {expectationsItems.map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center p-6 card-surface border-2 border-[color:var(--color-neutral-400)] rounded-2xl">
                                <div className="w-12 h-12 bg-[#FEC930]/10 rounded-full flex items-center justify-center mb-4">
                                    <svg className="w-6 h-6 text-[#FEC930]" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                    </svg>
                                </div>
                                <p className="text-heading font-bold">{item}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Transparencia y control */}
            <section className="max-w-4xl mx-auto px-6 py-20 text-center">
                <h2 className="text-4xl font-bold mb-6 text-heading">{t('assistive.title')}</h2>
                <div className="space-y-6 text-lg text-body leading-relaxed">
                    <p>
                        {t('assistive.text1')}
                    </p>
                    <p className="font-semibold text-heading text-xl">
                        {t('assistive.text2')}
                    </p>
                </div>
            </section>

            {/* CTA Final */}
            <section className="bg-[color:var(--color-neutral-900)] py-20 text-white text-center">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-4xl font-bold mb-6">{t('cta.title')}</h2>
                    <p className="text-xl mb-10 text-white/90 leading-relaxed">
                        {t('cta.subtitle')}
                    </p>
                    <div className="flex flex-col items-center">
                        <Link to={getLocalizedRoute('contact')}>
                            <button className="btn-primary px-10 py-5 text-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 active:scale-95 text-black">
                                {t('cta.button')}
                            </button>
                        </Link>
                        <p className="text-sm text-white/70 mt-6 italic">
                            {t('cta.microcopy')}
                        </p>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default HowWeWork
