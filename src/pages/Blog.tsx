import { usePageMetadata } from '../hooks/usePageMetadata'

function Blog() {
  usePageMetadata({
    title: 'Blog | DocuHelpAi - Recursos sobre IA y Automatización Documental',
    description:
      'Lee artículos sobre procesamiento inteligente de documentos, automatización legal con IA y casos de uso prácticos en notarías, banca y legaltech.',
  })

  const categories = [
    { emoji: '🏦', label: 'Banca', title: 'Automatización de hipotecas con IA en Latam', color: 'from-blue-100 to-blue-200' },
    {
      emoji: '⚖️',
      label: 'Legal',
      title: 'Comparativa: OCR tradicional vs IA moderna',
      color: 'from-purple-100 to-purple-200',
    },
    {
      emoji: '🏛️',
      label: 'Notarías',
      title: 'Casos de uso reales: legaltech y notarías',
      color: 'from-orange-100 to-orange-200',
    },
    {
      emoji: '🔍',
      label: 'Tecnología',
      title: '¿Cómo funcionan los modelos de lenguaje en documentos?',
      color: 'from-green-100 to-green-200',
    },
    {
      emoji: '💡',
      label: 'Casos de Uso',
      title: '5 formas de reducir errores en entrada de datos',
      color: 'from-pink-100 to-pink-200',
    },
    {
      emoji: '📊',
      label: 'ROI',
      title: 'Calculando el ROI de la automatización documental',
      color: 'from-indigo-100 to-indigo-200',
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">📚 Recursos y Guías</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Blog de DocuHelpAi
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Explora artículos, guías y recursos sobre automatización documental con inteligencia artificial
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl overflow-hidden shadow-2xl">
          <div className="grid md:grid-cols-2 gap-8 p-12 items-center">
            <div className="text-white text-left">
              <div className="inline-block mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">⭐ Destacado</span>
              </div>
              <h2 className="text-4xl font-bold mb-4">¿Qué es el procesamiento inteligente de documentos (IDP)?</h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed">
                Una guía completa para entender cómo la IA puede transformar la lectura y extracción de datos desde documentos PDF.
              </p>
              <a href="#" className="inline-block bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all">
                Leer artículo →
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-white/90 space-y-4">
              {['Diferencias entre OCR tradicional y AI', 'Casos de uso en notarías y banca', 'ROI y métricas de éxito'].map(
                (item) => (
                  <div key={item} className="flex items-center gap-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span>{item}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <article
              key={category.title}
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all overflow-hidden group border border-gray-100"
            >
              <div
                className={`bg-gradient-to-br ${category.color} p-8 group-hover:from-white group-hover:to-white transition-all`}
              >
                <div className="text-5xl mb-4">{category.emoji}</div>
                <div className="inline-block mb-2">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold text-white bg-gray-900/60">{category.label}</span>
                </div>
              </div>
              <div className="p-8">
                <h2 className="text-2xl font-bold mb-3 text-gray-900 group-hover:text-blue-600 transition-colors">{category.title}</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Profundizamos en tácticas, estrategias y aprendizajes reales de automatización documental con IA.
                </p>
                <a href="#" className="text-blue-600 font-semibold hover:underline inline-flex items-center gap-2">
                  Leer más
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <div className="text-5xl mb-6">📬</div>
          <h2 className="text-4xl font-bold mb-6 text-white">Suscríbete a nuestro newsletter</h2>
          <p className="text-xl mb-10 text-white/90">
            Recibe artículos, guías y novedades sobre automatización documental con IA
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 px-6 py-4 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-colors shadow-lg">
              Suscribirse
            </button>
          </div>
          <p className="mt-4 text-white/80 text-sm">Sin spam. Solo contenido valioso. Cancela cuando quieras.</p>
        </div>
      </section>
    </div>
  )
}

export default Blog

