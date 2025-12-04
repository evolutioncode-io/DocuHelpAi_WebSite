import { Link } from 'react-router-dom'

import { usePageMetadata } from '../hooks/usePageMetadata'

function Home() {
  usePageMetadata({
    title: 'DocuHelpAi | Extrae datos automáticamente de tus documentos con IA',
    description:
      'Convierte contratos, actas, hipotecas o formularios en datos estructurados listos para usar. Compatible con PDF escaneados. IA para notarías, banca y legal.',
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="max-w-7xl mx-auto px-6 py-20 md:py-32 relative">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-block mb-6">
              <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
                🚀 Procesamiento Inteligente de Documentos
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent leading-tight">
              Extrae datos automáticamente de tus documentos con IA
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-700 leading-relaxed">
              Carga cualquier PDF. Nuestra inteligencia artificial convierte contratos, actas, hipotecas o formularios en datos
              estructurados listos para usar.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to="/contact">
                <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 font-semibold text-lg">
                  Probar gratis
                </button>
              </Link>
              <Link to="/contact">
                <button className="border-2 border-gray-800 text-gray-800 px-8 py-4 rounded-xl shadow-md hover:bg-gray-800 hover:text-white transition-all duration-200 font-semibold text-lg">
                  Agendar demo
                </button>
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-gray-600">
              {['Sin tarjeta de crédito', 'Configuración en minutos', 'Soporte en español'].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {[
              { value: '90%+', label: 'Precisión en datos legales' },
              { value: '80%', label: 'Reducción de tiempo manual' },
              { value: '<10 min', label: 'Por documento procesado' },
            ].map((stat) => (
              <div key={stat.label} className="p-6">
                <div className="text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">¿Por qué DocuHelpAi?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Ahorra tiempo y reduce errores con procesamiento inteligente de documentos</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: 'Ahorra hasta 80% del tiempo',
              description: 'Automatiza tareas repetitivas y reduce errores manuales en procesamiento de documentos.',
              iconColor: 'from-green-100 to-green-200',
              iconFill: 'text-green-700',
              iconPath: 'M13 10V3L4 14h7v7l9-11h-7z',
            },
            {
              title: 'PDF escaneados soportados',
              description: 'Procesamos documentos complejos con OCR avanzado y extracción inteligente.',
              iconColor: 'from-blue-100 to-blue-200',
              iconFill: 'text-blue-700',
              iconPath: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z',
            },
            {
              title: 'Legal y notarial listo',
              description: 'Extrae datos de actas, hipotecas, contratos y documentos notariales.',
              iconColor: 'from-purple-100 to-purple-200',
              iconFill: 'text-purple-700',
              iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
            },
            {
              title: 'Español e inglés',
              description: 'Ideal para Latinoamérica y mercados globales con soporte multilingüe.',
              iconColor: 'from-orange-100 to-orange-200',
              iconFill: 'text-orange-700',
              iconPath: 'M3 21v-4m0 0V5a2 2 0 012-2h6.5l1 1H21l-3 6 3 6h-8.5l-1-1H5a2 2 0 00-2 2zm9-13.5V9',
            },
          ].map((benefit) => (
            <div
              key={benefit.title}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
            >
              <div className={`bg-gradient-to-br ${benefit.iconColor} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}>
                <svg className={`w-8 h-8 ${benefit.iconFill}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={benefit.iconPath} />
                </svg>
              </div>
              <h3 className="font-bold text-xl mb-3 text-gray-900">{benefit.title}</h3>
              <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-b from-gray-50 to-white py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">¿Cómo funciona?</h2>
            <p className="text-xl text-gray-600">Procesamiento inteligente de documentos en 3 simples pasos</p>
          </div>

          <div className="grid md:grid-cols-3 gap-12 relative">
            <div className="hidden md:block absolute top-24 left-1/4 right-1/4 h-1 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200 -z-10" />

            {[
              {
                step: '1',
                title: 'Sube tu PDF',
                description: 'Arrastra tu documento al panel o conéctate por API. Aceptamos PDFs escaneados, imágenes o digitales.',
                color: 'from-blue-500 to-blue-600',
              },
              {
                step: '2',
                title: 'Procesamos con IA',
                description:
                  'Usamos OCR + modelos de lenguaje para identificar texto, entidades legales, fechas y campos clave.',
                color: 'from-purple-500 to-purple-600',
              },
              {
                step: '3',
                title: 'Recibes tus datos',
                description: 'Exporta en Excel, CSV o JSON para integrarlos en tus sistemas. Listos para usar.',
                color: 'from-green-500 to-green-600',
              },
            ].map((item) => (
              <div key={item.step} className="text-center relative">
                <div
                  className={`bg-gradient-to-br ${item.color} text-white w-20 h-20 rounded-full flex items-center justify-center text-3xl font-bold mx-auto mb-6 shadow-lg`}
                >
                  {item.step}
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h4 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h4>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Casos de uso</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Automatización de documentos con IA para diferentes industrias</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              emoji: '🏛️',
              title: 'Notarías',
              description: 'Procesa automáticamente actas, poderes, escrituras notariales y testamentos.',
              color: 'from-blue-50 to-blue-100',
              border: 'border-blue-200',
              linkColor: 'text-blue-700 hover:text-blue-900',
            },
            {
              emoji: '🏦',
              title: 'Banca / Hipotecas',
              description: 'Automatiza cierres hipotecarios, solicitudes de préstamo y formularios KYC.',
              color: 'from-purple-50 to-purple-100',
              border: 'border-purple-200',
              linkColor: 'text-purple-700 hover:text-purple-900',
            },
            {
              emoji: '⚖️',
              title: 'Legal / Contratos',
              description: 'Extrae datos clave de contratos, actas constitutivas, NDAs y acuerdos.',
              color: 'from-orange-50 to-orange-100',
              border: 'border-orange-200',
              linkColor: 'text-orange-700 hover:text-orange-900',
            },
          ].map((useCase) => (
            <div
              key={useCase.title}
              className={`bg-gradient-to-br ${useCase.color} p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${useCase.border}`}
            >
              <div className="text-5xl mb-4">{useCase.emoji}</div>
              <h4 className="font-bold text-2xl mb-3 text-gray-900">{useCase.title}</h4>
              <p className="text-gray-700 mb-4 leading-relaxed">{useCase.description}</p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Extrae nombres, fechas y cláusulas clave</span>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>Digitaliza registros físicos históricos</span>
                </li>
              </ul>
              <Link to="/use-cases">
                <button className={`mt-6 font-semibold transition-colors ${useCase.linkColor}`}>Ver más →</button>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-gray-900 to-gray-800 py-20 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="mb-8">
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <svg key={`star-${i}`} className="w-8 h-8 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8 italic">
              "Es imposible regresar al método tradicional y abandonar las ventajas de eficiencia y precisión que ahora tenemos con DocuHelpAi"
            </blockquote>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mb-4 flex items-center justify-center text-2xl font-bold">
              JM
            </div>
            <p className="font-semibold text-lg">Director Legal</p>
            <p className="text-gray-400">Firma especializada en documentación bancaria • México</p>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">¿Listo para dejar de leer PDFs a mano?</h2>
          <p className="text-xl mb-10 text-white/90 leading-relaxed">
            Empieza hoy a transformar tus documentos en datos útiles con inteligencia artificial.
          </p>
          <Link to="/contact">
            <button className="bg-white text-blue-600 px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200 font-bold text-lg">
              Comienza gratis →
            </button>
          </Link>
          <p className="mt-6 text-white/80 text-sm">Sin tarjeta de crédito • Configuración en minutos • Soporte en español</p>
        </div>
      </section>
    </div>
  )
}

export default Home

