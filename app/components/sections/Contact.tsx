export default function Contact() {
  return (
    <section id="contacto" className="bg-[#F3EEE9]">

      <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-start">

        {/* TEXTO */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2B2B]">
            Agenda una reunión
          </h2>

          <p className="mt-6 text-[#6B6B6B] leading-relaxed">
            Cuéntanos sobre tu proyecto y los objetivos de tu negocio.
            En esta reunión analizaremos tu idea y definiremos cómo
            podemos ayudarte a construir una presencia digital sólida.
          </p>

          <div className="mt-10 space-y-4 text-[#6B6B6B]">

            <p>
              <strong className="text-[#2C2B2B]">Email:</strong>{" "}
              contacto@bdlagency.com
            </p>

            <p>
              <strong className="text-[#2C2B2B]">WhatsApp:</strong>{" "}
              +57 300 000 0000
            </p>

          </div>

        </div>

        {/* CALENDLY */}
        <div className="border border-[#E6DEDE] rounded-xl overflow-hidden bg-white">

          <iframe
            src="https://calendly.com/baironalfonsosandovalnino/30min"
            width="100%"
            height="700"
          />

        </div>

      </div>

    </section>
  )
}
