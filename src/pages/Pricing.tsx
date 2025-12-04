import { Link } from 'react-router-dom'

import { usePageMetadata } from '../hooks/usePageMetadata'

function Pricing() {
  usePageMetadata({
    title: 'Planes y Precios | DocuHelpAi - Desde Gratis hasta Enterprise',
    description:
      'Elige el plan que mejor se adapte a tus necesidades. Desde pruebas gratuitas hasta planes empresariales para notarías, banca y legal.',
  })

  const checkIcon = (
    <svg className="w-5 h-5 text-green-600 mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
        clipRule="evenodd"
      />
    </svg>
  )

  const crossIcon = (
    <svg className="w-5 h-5 text-gray-400 mx-auto" fill="currentColor" viewBox="0 0 20 20">
      <path
        fillRule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
        clipRule="evenodd"
      />
    </svg>
  )

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="bg-green-100 text-green-800 text-sm font-semibold px-4 py-2 rounded-full">
              💰 Precios Transparentes
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Planes y Precios
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Selecciona el plan que mejor se ajuste a tu flujo de trabajo. Paga solo por lo que procesas.
          </p>
          <div className="flex justify-center gap-4 text-sm text-gray-600 flex-wrap">
            {['Sin permanencia', 'Cancela cuando quieras', 'Soporte en español'].map((text) => (
              <div key={text} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span>{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-200 p-8 hover:shadow-2xl transition-all">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Starter</h2>
              <p className="text-gray-600">Ideal para probar la plataforma</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">Gratis</span>
              </div>
              <p className="text-gray-600 text-sm">Sin tarjeta de crédito</p>
            </div>
            <div className="space-y-4 mb-8">
              {[
                '10 documentos al mes',
                'Exportación en Excel o JSON',
                'Soporte por email',
                'OCR básico',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/contact">
              <button className="w-full bg-gray-800 text-white py-4 rounded-xl font-semibold hover:bg-gray-900 transition-colors shadow-lg">
                Comenzar gratis
              </button>
            </Link>
          </div>

          <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl shadow-2xl p-8 transform lg:-translate-y-4 relative text-white">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-sm font-bold">MÁS POPULAR</span>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Profesional</h2>
              <p className="text-white/90">Para notarías, despachos o bancos en crecimiento</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold">$49</span>
                <span className="text-xl">/mes</span>
              </div>
              <p className="text-white/80 text-sm">Facturado mensualmente</p>
            </div>
            <div className="space-y-4 mb-8">
              {[
                '300 documentos/mes',
                'Procesamiento con OCR y extracción avanzada',
                'Acceso a API',
                'Soporte prioritario en español',
                'Integración con Zapier',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <Link to="/contact">
              <button className="w-full bg-white text-blue-600 py-4 rounded-xl font-bold hover:bg-gray-50 transition-colors shadow-lg">
                Suscribirse ahora
              </button>
            </Link>
          </div>

          <div className="bg-white rounded-3xl shadow-lg border-2 border-gray-200 p-8 hover:shadow-2xl transition-all">
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2 text-gray-900">Enterprise</h2>
              <p className="text-gray-600">Para grandes volúmenes o flujos personalizados</p>
            </div>
            <div className="mb-8">
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-5xl font-bold text-gray-900">A medida</span>
              </div>
              <p className="text-gray-600 text-sm">Cotización personalizada</p>
            </div>
            <div className="space-y-4 mb-8">
              {[
                'Documentación ilimitada',
                'Soporte dedicado 24/7',
                'Onboarding y entrenamiento',
                'Integraciones personalizadas',
                'SLA garantizado',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <Link to="/contact">
              <button className="w-full border-2 border-gray-800 text-gray-800 py-4 rounded-xl font-semibold hover:bg-gray-800 hover:text-white transition-colors">
                Solicitar demo
              </button>
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Comparación de características</h2>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <table className="w-full">
            <thead className="bg-gradient-to-r from-blue-600 to-purple-600 text-white">
              <tr>
                {['Característica', 'Starter', 'Profesional', 'Enterprise'].map((heading) => (
                  <th key={heading} className={`px-6 py-4 ${heading === 'Característica' ? 'text-left' : 'text-center'}`}>
                    {heading}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {[
                { label: 'Documentos por mes', starter: '10', professional: '300', enterprise: 'Ilimitado', icon: false },
                { label: 'OCR Avanzado', starter: crossIcon, professional: checkIcon, enterprise: checkIcon, icon: true },
                { label: 'Acceso a API', starter: crossIcon, professional: checkIcon, enterprise: checkIcon, icon: true },
                { label: 'Integraciones personalizadas', starter: crossIcon, professional: crossIcon, enterprise: checkIcon, icon: true },
                { label: 'Soporte', starter: 'Email', professional: 'Prioritario', enterprise: 'Dedicado 24/7', icon: false },
              ].map((row) => (
                <tr key={row.label} className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-medium text-gray-900">{row.label}</td>
                  {['starter', 'professional', 'enterprise'].map((tier) => (
                    <td key={tier} className="px-6 py-4 text-center text-gray-600">
                      {row.icon ? row[tier as keyof typeof row] : row[tier as 'starter' | 'professional' | 'enterprise']}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-900">Preguntas frecuentes</h2>
        <div className="space-y-6">
          {[
            {
              question: '¿Puedo cambiar de plan en cualquier momento?',
              answer: 'Sí, puedes actualizar o degradar tu plan en cualquier momento. Los cambios se reflejarán en tu próximo ciclo de facturación.',
            },
            {
              question: '¿Qué sucede si excedo mi límite de documentos?',
              answer:
                'Te notificaremos cuando estés cerca del límite. Puedes actualizar tu plan o comprar documentos adicionales según necesites.',
            },
            {
              question: '¿Ofrecen descuentos por volumen?',
              answer:
                'Sí, para planes Enterprise ofrecemos precios personalizados basados en volumen. Contáctanos para una cotización.',
            },
            {
              question: '¿Hay contratos a largo plazo?',
              answer:
                'No, todos nuestros planes son mensuales sin permanencia. Puedes cancelar cuando quieras sin penalizaciones.',
            },
          ].map((faq) => (
            <div key={faq.question} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100">
              <h3 className="font-bold text-lg mb-2 text-gray-900">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold mb-6 text-white">¿Listo para comenzar?</h2>
          <p className="text-xl mb-10 text-white/90">Empieza gratis hoy. Sin tarjeta de crédito. Configura en minutos.</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/contact">
              <button className="bg-white text-blue-600 px-10 py-5 rounded-xl shadow-2xl hover:shadow-3xl transform hover:-translate-y-1 transition-all duration-200 font-bold text-lg">
                Comenzar gratis
              </button>
            </Link>
            <Link to="/contact">
              <button className="border-2 border-white text-white px-10 py-5 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-200 font-bold text-lg">
                Hablar con ventas
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Pricing

