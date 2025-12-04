import { Link } from 'react-router-dom'

import { usePageMetadata } from '../hooks/usePageMetadata'

function About() {
  usePageMetadata({
    title: 'Acerca de | DocuHelpAi - Transformando Documentos con IA',
    description:
      'Conoce la misión, visión y equipo detrás de DocuHelpAi. Estamos transformando la forma en que las empresas procesan documentos legales y financieros con inteligencia artificial.',
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="bg-purple-100 text-purple-800 text-sm font-semibold px-4 py-2 rounded-full">🚀 Nuestra Historia</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-purple-900 to-blue-900 bg-clip-text text-transparent">
            Acerca de DocuHelpAi
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Creamos DocuHelpAi para ayudar a empresas de todos los tamaños a automatizar la extracción de datos desde documentos
            complejos con tecnología de inteligencia artificial.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10">
          {[
            {
              title: 'Nuestra misión',
              description:
                'Reducir la carga manual del procesamiento documental en sectores críticos como legal, bancario y notarial, mediante soluciones accesibles, precisas y multilingües basadas en IA.',
              border: 'border-blue-200',
              gradient: 'from-blue-50 to-blue-100',
              iconColor: 'text-blue-600',
              iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
            },
            {
              title: 'Nuestra visión',
              description:
                'Ser la plataforma de referencia para la automatización documental en Latinoamérica y mercados emergentes, empoderando a notarías, bancos, despachos legales y más.',
              border: 'border-purple-200',
              gradient: 'from-purple-50 to-purple-100',
              iconColor: 'text-purple-600',
              iconPath:
                'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
            },
          ].map((card) => (
            <div
              key={card.title}
              className={`bg-gradient-to-br ${card.gradient} p-10 rounded-3xl shadow-xl border-2 ${card.border}`}
            >
              <div className="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <svg className={`w-8 h-8 ${card.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.iconPath} />
                </svg>
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">{card.title}</h2>
              <p className="text-lg text-gray-700 leading-relaxed">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nuestros valores</h2>
            <p className="text-xl text-gray-600">Los principios que guían nuestro trabajo</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { emoji: '🎯', title: 'Precisión', description: 'Nos enfocamos en la exactitud y calidad de los datos extraídos.' },
              { emoji: '⚡', title: 'Velocidad', description: 'Diseñamos nuestras soluciones para ser rápidas y eficientes.' },
              { emoji: '🤝', title: 'Accesibilidad', description: 'La IA avanzada debe ser accesible para empresas de todos los tamaños.' },
            ].map((value) => (
              <div key={value.title} className="text-center p-8 bg-gradient-to-b from-gray-50 to-white rounded-2xl border border-gray-100">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 text-3xl">
                  {value.emoji}
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-12 rounded-3xl text-white">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Nuestro equipo</h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Somos un equipo interdisciplinario de desarrolladores, expertos en legaltech y líderes en IA aplicada. Nos une la pasión
              por crear herramientas que ahorran tiempo y mejoran procesos.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              { emoji: '🧠', title: 'Experiencia en IA', description: 'Modelos de lenguaje y visión por computadora' },
              { emoji: '⚖️', title: 'Conocimiento Legal', description: 'Entendimiento profundo de documentos legales' },
              { emoji: '💻', title: 'Desarrollo Full-Stack', description: 'Plataforma robusta y escalable' },
            ].map((item) => (
              <div key={item.title} className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl text-center">
                <div className="text-5xl mb-4">{item.emoji}</div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-gray-900">Nuestro impacto</h2>
            <p className="text-xl text-gray-600">Ayudando a empresas a trabajar más eficientemente</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '90%+', label: 'Precisión promedio', color: 'text-blue-600' },
              { value: '80%', label: 'Reducción de tiempo', color: 'text-purple-600' },
              { value: '10K+', label: 'Documentos procesados', color: 'text-green-600' },
              { value: '24h', label: 'Tiempo de respuesta', color: 'text-orange-600' },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-6 bg-white rounded-2xl shadow-lg border border-gray-100">
                <div className={`text-4xl font-bold mb-2 ${stat.color}`}>{stat.value}</div>
                <p className="text-gray-700 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6 text-white">¿Quieres colaborar con nosotros?</h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Buscamos aliados estratégicos, integradores y distribuidores. Escríbenos y conversemos.
          </p>
          <Link to="/contact">
            <button className="bg-white text-blue-600 px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200 font-bold text-lg">
              Contáctanos →
            </button>
          </Link>
        </div>
      </section>
    </div>
  )
}

export default About

