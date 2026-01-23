import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { usePageMetadata } from '../hooks/usePageMetadata'
import { useLanguage } from '../hooks/useLanguage'

interface BlogPostProps {
    contentNamespace: string
    metadataNamespace: string
    heroImage?: string
}

function BlogPost({
    contentNamespace,
    metadataNamespace,
    heroImage,
}: BlogPostProps) {
    const { t } = useTranslation(contentNamespace)
    const { t: tMeta } = useTranslation(metadataNamespace)
    const { getLocalizedRoute } = useLanguage()

    usePageMetadata({
        titleKey: 'title',
        descriptionKey: 'meta_description',
        namespace: metadataNamespace,
        ogTitle: tMeta('og_title'),
        ogDescription: tMeta('og_description'),
        ogUrl: tMeta('og_url'),
        canonicalUrl: tMeta('canonical'),
        twitterCard: tMeta('twitter_card'),
        image: heroImage || 'https://documentoiq.com/og-image.jpg',
    })

    // Helper to render section content which is an array of strings
    const renderContent = (content: string[]) => {
        // Check if content is actually an array before mapping
        if (!Array.isArray(content)) return null;
        return content.map((paragraph, index) => (
            <p key={index} className="text-body mb-4 leading-relaxed">
                {paragraph}
            </p>
        ))
    }

    // Recursive helper or specific section rendering
    // Since the structure of 00-IDP and 01-invest is slightly different (names of sections),
    // we need a way to render them dynamically or stick to a convention.
    // 00-IDP: sections.whatIsIdp, sections.whyRelevant...
    // 01-invest: sections.whatIsCustomAi, sections.globalTrends...


    // Strategy: Iterate over the 'sections' object from translation
    const sections = t('sections', { returnObjects: true }) as Record<string, any>

    return (
        <div className="min-h-screen bg-app">
            {/* Hero Section */}
            <section className="relative bg-surface py-20 overflow-hidden">
                <div className="absolute inset-0 bg-hero-overlay" />
                <div className={`max-w-6xl mx-auto px-6 relative z-10 ${heroImage ? 'grid md:grid-cols-2 gap-12 items-center' : ''}`}>
                    <div>
                        <Link
                            to={getLocalizedRoute('blog')}
                            className="inline-flex items-center text-body mb-8 hover:text-heading transition-colors"
                        >
                            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Volver al Blog
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-heading leading-tight relative">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl text-body leading-relaxed relative border-l-4 border-[color:var(--color-primary-500)] pl-6 italic">
                            {t('hero.subtitle')}
                        </p>
                    </div>
                    {heroImage && (
                        <div className="flex justify-center md:justify-end">
                            <img
                                src={heroImage}
                                alt={t('hero.title')}
                                className="rounded-2xl shadow-2xl max-w-full h-auto transform hover:scale-[1.02] transition-transform duration-300"
                            />
                        </div>
                    )}
                </div>
            </section>

            {/* Content Section */}
            <article className="max-w-3xl mx-auto px-6 py-12">
                <div className="prose prose-lg max-w-none text-body">
                    {/* Intro from hero if present - separate from sections */}
                    <p className="text-xl mb-12 font-medium">
                        {t('hero.intro')}
                    </p>

                    {/* Dynamic Rendering of Sections */}
                    {sections && Object.entries(sections).map(([key, section]) => {
                        // Determine content type and render accordingly
                        return (
                            <div key={key}>
                                <h2 className="text-3xl font-bold mb-6 text-heading">{section.title}</h2>

                                {/* 1. Standard Content Array or Single String */}
                                {section.content && (
                                    Array.isArray(section.content)
                                        ? renderContent(section.content)
                                        : <p className="text-body mb-4 leading-relaxed">{section.content}</p>
                                )}

                                {/* 2. Intro + Components Object (e.g. Technologies) */}
                                {section.intro && <p className="text-body mb-6 leading-relaxed">{section.intro}</p>}

                                {section.components && (
                                    <div className="grid gap-6 mb-8">
                                        {Object.entries(section.components).map(([compKey, comp]: [string, any]) => (
                                            <div key={compKey} className="bg-surface-muted p-6 rounded-xl border border-[color:var(--color-neutral-300)]">
                                                <h3 className="text-xl font-bold mb-2 text-[color:var(--color-primary-700)]">{comp.title}</h3>
                                                <p className="text-body">{comp.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                )}

                                {/* 3. Intro + List Array (e.g. Use Cases) */}
                                {section.list && (
                                    <ul className="list-disc pl-6 mb-8 space-y-2">
                                        {section.list.map((item: string, index: number) => (
                                            <li key={index} className="text-body pl-2">{item}</li>
                                        ))}
                                    </ul>
                                )}

                                {/* Conclusion if present */}
                                {section.conclusion && (
                                    <p className="text-body mt-6 font-medium italic border-l-4 border-[color:var(--color-accent-500)] pl-4">
                                        {section.conclusion}
                                    </p>
                                )}

                                <hr className="my-12 border-[color:var(--color-neutral-300)]" />
                            </div>
                        )
                    })}
                </div>
            </article>

            {/* CTA Section */}
            <section className="bg-gradient-secondary py-20 text-white">
                <div className="max-w-4xl mx-auto px-6 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-8">{t('cta.title')}</h2>
                    <Link to={getLocalizedRoute('contact')}>
                        <button className="bg-white text-[color:var(--color-accent-700)] px-10 py-4 rounded-xl font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all">
                            {t('cta.button')}
                        </button>
                    </Link>
                </div>
            </section>

            {/* References */}
            <section className="max-w-3xl mx-auto px-6 py-12 text-sm text-body opacity-60">
                {[1, 2, 3, 4, 5].map((i) => {
                    // references is an object, but we are accessing by key '1', '2' etc.
                    // t('references') returns object.
                    const ref = t(`references.${i}`, { defaultValue: '' })
                    return ref ? <p key={i}>{ref}</p> : null
                })}
            </section>
        </div>
    )
}

export default BlogPost
