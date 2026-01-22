import { lazy, Suspense } from 'react'
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

import Layout from './components/Layout'
import LocalizedRoutes from './components/LocalizedRoutes'

// Lazy load pages for better code splitting and performance
const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Blog = lazy(() => import('./pages/Blog'))
const Contact = lazy(() => import('./pages/Contact'))
const Product = lazy(() => import('./pages/Product'))
const LegalHelpAi = lazy(() => import('./pages/LegalHelpAi'))
const UseCases = lazy(() => import('./pages/UseCases'))
const Privacy = lazy(() => import('./pages/Privacy'))
const Terms = lazy(() => import('./pages/Terms'))
const Cookies = lazy(() => import('./pages/Cookies'))
const Security = lazy(() => import('./pages/Security'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
import heroImageIdp from './assets/blog_images/00_art.png'
import heroImageInvest from './assets/blog_images/01_art.png'
import heroImageCustomAi from './assets/blog_images/02_art.png'

// Loading component for Suspense
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-app">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 mb-4 border-ui"></div>
        <p className="text-body">Loading...</p>
      </div>
    </div>
  )
}

function NotFound() {
  const location = useLocation()
  const normalizedPath = location.pathname.toLowerCase()
  const isSpanish = normalizedPath.startsWith('/es/') || normalizedPath === '/es'
  const isPortuguese = normalizedPath.startsWith('/pt-br/') || normalizedPath === '/pt-br'

  return (
    <div className="py-24 text-center px-6">
      <p className="text-3xl font-semibold text-heading mb-4">
        {isSpanish ? 'Página no encontrada' : isPortuguese ? 'Página não encontrada' : 'Page not found'}
      </p>
      <p className="text-body mb-6">
        {isSpanish
          ? 'La página que buscas no existe o fue movida.'
          : isPortuguese
            ? 'A página que você procura não existe ou foi movida.'
            : 'The page you are looking for does not exist or has been moved.'}
      </p>
      <a href={isSpanish ? '/es/' : isPortuguese ? '/pt-br/' : '/'} className="link font-semibold">
        {isSpanish ? 'Volver al inicio' : isPortuguese ? 'Voltar ao início' : 'Go back home'}
      </a>
    </div>
  )
}

// Redirect root to default language based on browser/preferences
function RootRedirect() {
  const { i18n } = useTranslation()
  const resolved = (i18n.resolvedLanguage || i18n.language || 'en').toLowerCase()
  const defaultLang = resolved.startsWith('es') ? 'es' : resolved.startsWith('pt') ? 'pt-BR' : 'en'
  // Redirect to language-specific home page
  return <Navigate to={defaultLang === 'es' ? '/es' : defaultLang === 'pt-BR' ? '/pt-br' : ''} replace />
}

function App() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {/* Root redirect - detect language and redirect */}
        <Route path="/" element={<RootRedirect />} />

        {/* English routes (no prefix) - nested under LocalizedRoutes */}
        <Route element={<LocalizedRoutes />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="legal-help-ai" element={<LegalHelpAi />} />
            <Route path="use-cases" element={<UseCases />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="terms" element={<Terms />} />
            <Route path="cookies" element={<Cookies />} />
            <Route path="cookies" element={<Cookies />} />
            <Route path="security" element={<Security />} />
            <Route path="security" element={<Security />} />
            <Route
              path="blog/what-is-intelligent-document-processing-idp"
              element={<BlogPost contentNamespace="blog_00_IDP" metadataNamespace="meta_00_IDP" heroImage={heroImageIdp} />}
            />
            <Route
              path="blog/is-investing-in-custom-ai-worth-it"
              element={<BlogPost contentNamespace="blog_01_invest" metadataNamespace="blog_01_invest" heroImage={heroImageInvest} />}
            />
            <Route
              path="blog/custom-ai-solutions-how-to-power-up-your-business"
              element={<BlogPost contentNamespace="blog_02_solutions" metadataNamespace="blog_02_solutions" heroImage={heroImageCustomAi} />}
            />
          </Route>
        </Route>

        {/* Spanish routes (with /es/ prefix) */}
        <Route path="/es" element={<LocalizedRoutes />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="producto" element={<Product />} />
            <Route path="legal-help-ai" element={<LegalHelpAi />} />
            <Route path="casos-de-uso" element={<UseCases />} />
            <Route path="blog" element={<Blog />} />
            <Route path="nosotros" element={<About />} />
            <Route path="contacto" element={<Contact />} />
            <Route path="privacidad" element={<Privacy />} />
            <Route path="terminos" element={<Terms />} />
            <Route path="cookies" element={<Cookies />} />
            <Route path="cookies" element={<Cookies />} />
            <Route path="seguridad" element={<Security />} />
            <Route path="seguridad" element={<Security />} />
            <Route
              path="blog/que-es-procesamiento-inteligente-documentos-idp"
              element={<BlogPost contentNamespace="blog_00_IDP" metadataNamespace="meta_00_IDP" heroImage={heroImageIdp} />}
            />
            <Route
              path="blog/vale-la-pena-invertir-en-ia-personalizada"
              element={<BlogPost contentNamespace="blog_01_invest" metadataNamespace="blog_01_invest" heroImage={heroImageInvest} />}
            />
            <Route
              path="blog/soluciones-de-ia-a-medida-como-potenciar-tu-empresa"
              element={<BlogPost contentNamespace="blog_02_solutions" metadataNamespace="blog_02_solutions" heroImage={heroImageCustomAi} />}
            />
          </Route>
        </Route>

        {/* Portuguese routes (with /pt-br/ prefix) */}
        <Route path="/pt-br" element={<LocalizedRoutes />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="produto" element={<Product />} />
            <Route path="legal-help-ai" element={<LegalHelpAi />} />
            <Route path="casos-de-uso" element={<UseCases />} />
            <Route path="blog" element={<Blog />} />
            <Route path="sobre" element={<About />} />
            <Route path="contato" element={<Contact />} />
            <Route path="privacidade" element={<Privacy />} />
            <Route path="termos" element={<Terms />} />
            <Route path="cookies" element={<Cookies />} />
            <Route path="cookies" element={<Cookies />} />
            <Route path="seguranca" element={<Security />} />
            <Route path="seguranca" element={<Security />} />
            <Route
              path="blog/o-que-e-processamento-inteligente-documentos-idp"
              element={<BlogPost contentNamespace="blog_00_IDP" metadataNamespace="meta_00_IDP" heroImage={heroImageIdp} />}
            />
            <Route
              path="blog/vale-a-pena-investir-em-ia-personalizada"
              element={<BlogPost contentNamespace="blog_01_invest" metadataNamespace="blog_01_invest" heroImage={heroImageInvest} />}
            />
            <Route
              path="blog/solucoes-de-ia-sob-medida-como-potencializar-sua-empresa"
              element={<BlogPost contentNamespace="blog_02_solutions" metadataNamespace="blog_02_solutions" heroImage={heroImageCustomAi} />}
            />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
