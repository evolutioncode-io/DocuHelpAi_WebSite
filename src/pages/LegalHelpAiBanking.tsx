import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import { usePageMetadata } from '../hooks/usePageMetadata'
import { useLanguage } from '../hooks/useLanguage'

function LegalHelpAiBanking() {
    const { t } = useTranslation('banking')
    const { getLocalizedRoute } = useLanguage()

    usePageMetadata({
        titleKey: 'hero.title',
        descriptionKey: 'hero.subtitle',
        namespace: 'banking',
    })

    const businessBenefits = t('benefits.business.items', { returnObjects: true }) as string[]
    const technicalBenefits = t('benefits.technical.items', { returnObjects: true }) as string[]

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
                            {t('hero.microcopy')}
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link to={getLocalizedRoute('contact')}>
                                <button className="btn-primary px-10 py-5 text-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 active:scale-95 text-black">
                                    {t('hero.primaryCta')}
                                </button>
                            </Link>
                            <a
                                href="https://youtu.be/EqYHvbZACN8"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn-primary px-10 py-5 text-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 active:scale-95 inline-block text-center text-black"
                            >
                                {t('hero.secondaryCta')}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* ¿Qué es LegalHelp AI Banca? */}
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

            {/* ¿Cómo funciona LegalHelp AI Banca? */}
            <section className="bg-surface-muted py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-heading">{t('howItWorks.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="relative h-full">
                            <div className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-8 rounded-3xl cursor-pointer h-full flex flex-col">
                                <div className="absolute -top-6 -right-6 bg-[#FEC930] text-black w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg text-center">
                                    1
                                </div>
                                <div className="mb-6">
                                    <svg className="w-16 h-16 text-[#FEC930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-2xl mb-4 text-heading">{t('howItWorks.steps.step1.title')}</h3>
                                <p className="text-body leading-relaxed mb-4">
                                    {t('howItWorks.steps.step1.description')}
                                </p>
                                <div className="mt-6 pt-6 border-t border-[color:var(--color-neutral-400)]">
                                    <div className="flex items-center gap-2 text-sm text-body">
                                        <span className="text-heading font-medium">{t('howItWorks.steps.step1.footer')}</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative h-full">
                            <div className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-8 rounded-3xl cursor-pointer h-full flex flex-col">
                                <div className="absolute -top-6 -right-6 bg-[#FEC930] text-black w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg text-center">
                                    2
                                </div>
                                <div className="mb-6">
                                    <svg className="w-16 h-16 text-[#FEC930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-2xl mb-4 text-heading">{t('howItWorks.steps.step2.title')}</h3>
                                <p className="text-body leading-relaxed mb-4">
                                    {t('howItWorks.steps.step2.intro').split(/(OCR avanzado\*|advanced OCR\*|OCR avançado\*)/g).map((part, i) => {
                                        const lowerPart = part.toLowerCase();
                                        const isOcr = lowerPart.includes('ocr') && lowerPart.includes('*');
                                        if (isOcr) {
                                            return (
                                                <Link key={i} to={getLocalizedRoute('blog00Idp')} className="link font-semibold hover:underline">
                                                    {part}
                                                </Link>
                                            );
                                        }
                                        return <span key={i}>{part}</span>;
                                    })}
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

                        <div className="relative h-full">
                            <div className="card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] p-8 rounded-3xl cursor-pointer h-full flex flex-col">
                                <div className="absolute -top-6 -right-6 bg-[#FEC930] text-black w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold shadow-lg text-center">
                                    3
                                </div>
                                <div className="mb-6">
                                    <svg className="w-16 h-16 text-[#FEC930]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                                    </svg>
                                </div>
                                <h3 className="font-bold text-2xl mb-4 text-heading">{t('howItWorks.steps.step3.title')}</h3>
                                <p className="text-body leading-relaxed mb-4">
                                    {t('howItWorks.steps.step3.description')}
                                </p>
                                <div className="mt-auto pt-6 border-t border-[color:var(--color-neutral-400)]">
                                    <p className="text-sm text-body font-medium italic">
                                        {t('howItWorks.steps.step3.footer')}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Beneficios */}
            <section className="py-20 bg-surface">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-heading">{t('benefits.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-heading">{t('benefits.business.title')}</h3>
                            <div className="space-y-4">
                                {businessBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 card-surface border-2 border-[color:var(--color-neutral-400)] rounded-xl">
                                        <svg className="w-6 h-6 text-[#FEC930] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-body font-medium">{benefit}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold mb-6 text-heading">{t('benefits.technical.title')}</h3>
                            <div className="space-y-4">
                                {technicalBenefits.map((benefit, index) => (
                                    <div key={index} className="flex items-start gap-3 p-4 card-surface border-2 border-[color:var(--color-neutral-400)] rounded-xl">
                                        <svg className="w-6 h-6 text-[#FEC930] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                        </svg>
                                        <p className="text-body font-medium">
                                            {benefit.split(/(OCR avanzado\*|advanced OCR\*|OCR avançado\*)/g).map((part, i) => {
                                                const lowerPart = part.toLowerCase();
                                                const isOcr = lowerPart.includes('ocr') && lowerPart.includes('*');
                                                if (isOcr) {
                                                    return (
                                                        <Link key={i} to={getLocalizedRoute('blog00Idp')} className="link font-semibold hover:underline">
                                                            {part}
                                                        </Link>
                                                    );
                                                }
                                                return <span key={i}>{part}</span>;
                                            })}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Aplicaciones clave en banca */}
            <section className="bg-surface-muted py-20">
                <div className="max-w-6xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4 text-heading">{t('useCases.title')}</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {Object.entries(t('useCases.items', { returnObjects: true }) as any).map(([key, item]: [string, any]) => (
                            <div key={key} className="text-center p-8 card-surface card-hover-blue border-2 border-[color:var(--color-neutral-400)] rounded-2xl group cursor-pointer h-full flex flex-col">
                                <h3 className="font-bold text-xl mb-3 text-heading group-hover:text-black transition-colors duration-300">{item.title}</h3>
                                <p className="text-body mt-2">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* LegalHelp AI y DocumentoIQ */}
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
                        <div className="flex justify-center gap-4 mt-8">
                            <Link to={getLocalizedRoute('legalHelpAiNotaries')} className="font-bold text-[#FEC930] hover:underline">
                                LegalHelp AI Notarías →
                            </Link>
                        </div>
                        <p className="font-semibold text-heading text-xl mt-8">
                            {t('brand.tagline')}
                        </p>
                    </div>
                </div>
            </section>

            {/* CTA Final con Video */}
            <section id="video-demo" className="bg-[color:var(--color-neutral-900)] py-20">
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
                                src="https://www.youtube.com/embed/EqYHvbZACN8"
                                title="LegalHelpAI Demo"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            />
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <Link to={getLocalizedRoute('contact')}>
                            <button className="btn-primary px-10 py-5 text-lg transition-all duration-300 ease-in-out hover:shadow-lg hover:scale-105 active:scale-95 text-black">
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

export default LegalHelpAiBanking
