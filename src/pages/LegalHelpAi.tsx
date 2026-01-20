import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { usePageMetadata } from '../hooks/usePageMetadata'
import { useLanguage } from '../hooks/useLanguage'

function LegalHelpAi() {
    const { t } = useTranslation('legalHelpAi')
    const { getLocalizedRoute } = useLanguage()

    usePageMetadata({
        titleKey: 'hero.title',
        descriptionKey: 'hero.subtitle',
        namespace: 'legalHelpAi',
    })

    return (
        <div className="min-h-screen bg-app">
            {/* Hero Section */}
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
                        <p className="text-xl text-body max-w-3xl mx-auto leading-relaxed mb-8">
                            {t('hero.subtitle')}
                        </p>
                        <p className="text-sm text-body/80 mb-8">
                            {t('hero.formats')}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to={getLocalizedRoute('contact')}>
                                <button className="btn-primary px-10 py-5 text-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 active:scale-95">
                                    {t('hero.primaryCta')}
                                </button>
                            </Link>
                            <Link to={getLocalizedRoute('contact')}>
                                <button className="btn-primary px-10 py-5 text-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 active:scale-95">
                                    {t('hero.secondaryCta')}
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ¿Qué es LegalHelpAI? */}
            <section className="max-w-6xl mx-auto px-6 py-20">
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-heading">{t('whatIs.title')}</h2>
                    <div className="max-w-4xl mx-auto space-y-6 text-lg text-body leading-relaxed">
                        <p>
                            {t('whatIs.description')}
                        </p>
                        <p className="font-semibold text-heading">
                            {t('whatIs.disclaimer')}
                        </p>
                    </div>
                </div>
            </section>

            {/* ¿Cómo funciona LegalHelpAI? */}
            <section className="bg-surface-muted py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">{t('howItWorks.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="relative">
                            <div className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                                <div className="absolute -top-6 -right-6 bg-gradient-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg text-center">
                                    1
                                </div>
                                <div className="mb-6">
                                    <svg className="w-16 h-16 text-[color:var(--color-primary-800)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-2xl mb-4 text-heading">{t('howItWorks.steps.step1.title')}</h3>
                                <p className="text-body leading-relaxed mb-4">
                                    {t('howItWorks.steps.step1.description')}
                                </p>
                                <div className="mt-6 pt-6 border-t border-[color:var(--color-neutral-400)]">
                                    <div className="flex items-center gap-2 text-sm text-body">
                                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                                            <path
                                                fillRule="evenodd"
                                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-heading">{t('howItWorks.steps.step1.footer')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                                <div className="absolute -top-6 -right-6 bg-gradient-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg text-center">
                                    2
                                </div>
                                <div className="mb-6">
                                    <svg className="w-16 h-16 text-[color:var(--color-primary-800)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-2xl mb-4 text-heading">{t('howItWorks.steps.step2.title')}</h3>
                                <p className="text-body leading-relaxed mb-4">
                                    {t('howItWorks.steps.step2.intro')}
                                </p>
                                <ul className="text-body space-y-2 mb-4">
                                    {(t('howItWorks.steps.step2.items', { returnObjects: true }) as string[]).map((item, index) => (
                                        <li key={index}>• {item}</li>
                                    ))}
                                </ul>
                                <p className="text-sm text-body/80 italic">
                                    {t('howItWorks.steps.step2.footer')}
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer">
                                <div className="absolute -top-6 -right-6 bg-gradient-primary text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg text-center">
                                    3
                                </div>
                                <div className="mb-6">
                                    <svg className="w-16 h-16 text-[color:var(--color-primary-800)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-2xl mb-4 text-heading">{t('howItWorks.steps.step3.title')}</h3>
                                <p className="text-body leading-relaxed">
                                    {t('howItWorks.steps.step3.description')}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios técnicos y de negocio */}
            <section className="py-20 bg-surface">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-heading">{t('benefits.title')}</h2>
                    </div>

                    <div className="mb-12">
                        <h3 className="text-2xl font-bold mb-6 text-heading text-center">{t('benefits.business.title')}</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: t('benefits.business.items.time.title'),
                                    description: t('benefits.business.items.time.description'),
                                    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
                                },
                                {
                                    title: t('benefits.business.items.operational.title'),
                                    description: t('benefits.business.items.operational.description'),
                                    iconPath: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2',
                                },
                                {
                                    title: t('benefits.business.items.errors.title'),
                                    description: t('benefits.business.items.errors.description'),
                                    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z',
                                },
                                {
                                    title: t('benefits.business.items.consistency.title'),
                                    description: t('benefits.business.items.consistency.description'),
                                    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                                },
                            ].map((benefit) => (
                                <div
                                    key={benefit.title}
                                    className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-6 rounded-xl group cursor-pointer hover:shadow-xl"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-surface-muted group-hover:bg-[color:var(--color-primary-800)]/10 p-3 rounded-lg flex-shrink-0 transition-colors duration-300">
                                            <svg className="w-6 h-6 text-[color:var(--color-primary-800)] group-hover:text-[color:var(--color-primary-700)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.iconPath} />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2 text-heading group-hover:text-[color:var(--color-primary-800)] transition-colors duration-300">{benefit.title}</h4>
                                            <p className="text-body">{benefit.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12">
                        <h3 className="text-2xl font-bold mb-6 text-heading text-center">{t('benefits.technical.title')}</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                            {[
                                {
                                    title: t('benefits.technical.items.accuracy.title'),
                                    description: t('benefits.technical.items.accuracy.description'),
                                    iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                                },
                                {
                                    title: t('benefits.technical.items.ocr.title'),
                                    description: t('benefits.technical.items.ocr.description'),
                                    iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
                                },
                                {
                                    title: t('benefits.technical.items.flexible.title'),
                                    description: t('benefits.technical.items.flexible.description'),
                                    iconPath: 'M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4',
                                },
                                {
                                    title: t('benefits.technical.items.ui.title'),
                                    description: t('benefits.technical.items.ui.description'),
                                    iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
                                },
                                {
                                    title: t('benefits.technical.items.export.title'),
                                    description: t('benefits.technical.items.export.description'),
                                    iconPath: 'M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
                                },
                                {
                                    title: t('benefits.technical.items.api.title'),
                                    description: t('benefits.technical.items.api.description'),
                                    iconPath: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
                                },
                            ].map((benefit) => (
                                <div
                                    key={benefit.title}
                                    className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-6 rounded-xl group cursor-pointer hover:shadow-xl"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="bg-surface-muted group-hover:bg-[color:var(--color-primary-800)]/10 p-3 rounded-lg flex-shrink-0 transition-colors duration-300">
                                            <svg className="w-6 h-6 text-[color:var(--color-primary-800)] group-hover:text-[color:var(--color-primary-700)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.iconPath} />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-2 text-heading group-hover:text-[color:var(--color-primary-800)] transition-colors duration-300">{benefit.title}</h4>
                                            <p className="text-body">{benefit.description}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Características diseñadas para procesos notariales */}
            <section className="bg-surface-muted py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-heading">{t('features.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                title: t('features.items.ocr.title'),
                                description: t('features.items.ocr.description'),
                                iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
                            },
                            {
                                title: t('features.items.llm.title'),
                                description: t('features.items.llm.description'),
                                iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z',
                            },
                            {
                                title: t('features.items.validation.title'),
                                description: t('features.items.validation.description'),
                                iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
                            },
                            {
                                title: t('features.items.integration.title'),
                                description: t('features.items.integration.description'),
                                iconPath: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
                            },
                        ].map((feature) => (
                            <div key={feature.title} className="text-center p-8 card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] rounded-2xl group cursor-pointer hover:shadow-xl">
                                <div className="bg-surface-muted group-hover:bg-[color:var(--color-primary-800)]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg transition-colors duration-300">
                                    <svg className="w-10 h-10 text-[color:var(--color-primary-800)] group-hover:text-[color:var(--color-primary-700)] transition-colors duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={feature.iconPath} />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-xl mb-3 text-heading group-hover:text-[color:var(--color-primary-800)] transition-colors duration-300">{feature.title}</h3>
                                <p className="text-body">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LegalHelpAI y DocumentoIQ */}
            <section className="py-20 bg-surface">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-4xl font-bold mb-6 text-heading">{t('brand.title')}</h2>
                    <div className="space-y-6 text-lg text-body leading-relaxed">
                        <p>
                            {t('brand.description1')}
                        </p>
                        <p>
                            {t('brand.description2')}
                        </p>
                        <p className="font-semibold text-heading text-xl">
                            {t('brand.tagline')}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Final con Video */}
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
                                src="https://www.youtube.com/embed/0_qIE1Bag6s"
                                title="LegalHelpAI Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to={getLocalizedRoute('contact')}>
                            <button className="btn-primary px-10 py-5 text-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 active:scale-95">
                                {t('cta.button')}
                            </button>
                        </Link>
                    </div>
                    <p className="text-sm text-white/70 mt-6">
                        {t('cta.microcopy')}
                    </p>
                </div>
            </section>
        </div>
    )
}

export default LegalHelpAi
