import { usePageMetadata } from '../hooks/usePageMetadata'

function Contact() {
  usePageMetadata({
    title: 'Contacto | DocuHelpAi - Agenda tu Demo Personalizada',
    description:
      'Contáctanos para demos personalizadas, soporte o integraciones a medida. Estamos aquí para ayudarte a automatizar tus documentos.',
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-6">
            <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-4 py-2 rounded-full">
              📞 Estamos aquí para ayudarte
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 bg-clip-text text-transparent">
            Contáctanos
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            ¿Tienes preguntas, necesitas una demo personalizada o quieres una solución a medida? Envíanos un mensaje.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-xl border border-gray-100">
            <h2 className="text-3xl font-bold mb-8 text-gray-900">Envíanos un mensaje</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-semibold mb-2 text-gray-900">
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full border-2 border-gray-200 px-5 py-4 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-semibold mb-2 text-gray-900">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full border-2 border-gray-200 px-5 py-4 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="tu@empresa.com"
                />
              </div>
              <div>
                <label htmlFor="company" className="block font-semibold mb-2 text-gray-900">
                  Empresa (opcional)
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full border-2 border-gray-200 px-5 py-4 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                  placeholder="Nombre de tu empresa"
                />
              </div>
              <div>
                <label htmlFor="industry" className="block font-semibold mb-2 text-gray-900">
                  Industria
                </label>
                <select
                  id="industry"
                  name="industry"
                  defaultValue=""
                  className="w-full border-2 border-gray-200 px-5 py-4 rounded-xl focus:border-blue-500 focus:outline-none transition-colors"
                >
                  <option value="">Selecciona una industria</option>
                  <option value="notaria">Notaría</option>
                  <option value="banca">Banca / Hipotecas</option>
                  <option value="legal">Legal / Bufete</option>
                  <option value="seguros">Seguros</option>
                  <option value="inmobiliaria">Inmobiliaria</option>
                  <option value="logistica">Logística</option>
                  <option value="otra">Otra</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block font-semibold mb-2 text-gray-900">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full border-2 border-gray-200 px-5 py-4 rounded-xl focus:border-blue-500 focus:outline-none transition-colors resize-none"
                  placeholder="Cuéntanos más sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-5 rounded-xl font-bold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 text-lg"
              >
                Enviar mensaje →
              </button>
              <p className="text-sm text-gray-600 text-center">Nos comprometemos a responder en menos de 24 horas hábiles</p>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl border-2 border-blue-200">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">¿Por qué contactarnos?</h3>
              <div className="space-y-6">
                {[
                  { title: 'Demo personalizada', description: 'Te mostramos cómo DocuHelpAi puede adaptarse a tus documentos específicos' },
                  { title: 'Soluciones a medida', description: 'Desarrollamos integraciones personalizadas para tu flujo de trabajo' },
                  { title: 'Soporte técnico', description: 'Ayuda con integraciones, APIs y configuración técnica' },
                  { title: 'Cotizaciones enterprise', description: 'Precios personalizados para grandes volúmenes' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="bg-white p-3 rounded-xl flex-shrink-0">
                      <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-gray-900">{item.title}</h4>
                      <p className="text-gray-700">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Otras formas de contacto</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Email</p>
                    <a href="mailto:info@docuhelpai.com" className="text-blue-600 hover:underline">
                      info@docuhelpai.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                  <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="font-semibold text-gray-900">Horario de atención</p>
                    <p className="text-gray-600">Lun - Vie, 9:00 AM - 6:00 PM (GMT-6)</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500 to-emerald-600 p-6 rounded-2xl text-white text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="font-bold text-lg">Respuesta garantizada</span>
              </div>
              <p className="text-white/90">Menos de 24 horas hábiles</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contact

