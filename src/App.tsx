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
const Pricing = lazy(() => import('./pages/Pricing'))
const Product = lazy(() => import('./pages/Product'))
const UseCases = lazy(() => import('./pages/UseCases'))

// Loading component for Suspense
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
        <p className="text-gray-600">Loading...</p>
      </div>
    </div>
  )
}

function NotFound() {
  const location = useLocation()
  const isSpanish = location.pathname.startsWith('/es/') || location.pathname === '/es'

  return (
    <div className="py-24 text-center px-6">
      <p className="text-3xl font-semibold text-gray-900 mb-4">
        {isSpanish ? 'Página no encontrada' : 'Page not found'}
      </p>
      <p className="text-gray-600 mb-6">
        {isSpanish
          ? 'La página que buscas no existe o fue movida.'
          : 'The page you are looking for does not exist or has been moved.'}
      </p>
      <a href={isSpanish ? '/es/' : '/'} className="text-blue-600 font-semibold hover:underline">
        {isSpanish ? 'Volver al inicio' : 'Go back home'}
      </a>
    </div>
  )
}

// Redirect root to default language based on browser/preferences
function RootRedirect() {
  const { i18n } = useTranslation()
  const defaultLang = i18n.language === 'es' ? 'es' : 'en'
  // Redirect to language-specific home page
  return <Navigate to={defaultLang === 'es' ? '/es' : ''} replace />
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
            <Route path="use-cases" element={<UseCases />} />
            <Route path="pricing" element={<Pricing />} />
            <Route path="blog" element={<Blog />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Route>

        {/* Spanish routes (with /es/ prefix) */}
        <Route path="/es" element={<LocalizedRoutes />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="producto" element={<Product />} />
            <Route path="casos-de-uso" element={<UseCases />} />
            <Route path="precios" element={<Pricing />} />
            <Route path="blog" element={<Blog />} />
            <Route path="nosotros" element={<About />} />
            <Route path="contacto" element={<Contact />} />
          </Route>
        </Route>

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  )
}

export default App
