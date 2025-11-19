import { Link, Route, Routes } from 'react-router-dom'

import Layout from './components/Layout'
import About from './pages/About'
import Blog from './pages/Blog'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import Product from './pages/Product'
import UseCases from './pages/UseCases'

function NotFound() {
  return (
    <div className="py-24 text-center px-6">
      <p className="text-3xl font-semibold text-gray-900 mb-4">Página no encontrada</p>
      <p className="text-gray-600 mb-6">La página que buscas no existe o fue movida.</p>
      <Link to="/" className="text-blue-600 font-semibold hover:underline">
        Volver al inicio
      </Link>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/use-cases" element={<UseCases />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}

export default App
