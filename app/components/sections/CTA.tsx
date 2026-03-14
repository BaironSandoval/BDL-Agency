import Link from "next/link"

export default function CTA() {
  return (
    <section className="bg-[#2C2B2B]">

      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        <h2 className="text-3xl md:text-4xl font-bold text-white">
          ¿Listo para construir un sitio web que impulse tu negocio?
        </h2>

        <p className="mt-6 text-[#E6DEDE] max-w-2xl mx-auto">
          Agenda una reunión y conversemos sobre tu proyecto. Analizaremos
          tu negocio y te ayudaremos a definir la mejor estrategia para
          tu presencia digital.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            href="#contacto"
            className="px-6 py-3 bg-white text-[#2C2B2B] rounded-md text-sm font-medium hover:bg-[#F3EEE9] transition"
          >
            Agendar reunión
          </Link>

          <Link
            href="#proyectos"
            className="px-6 py-3 border border-[#6B6B6B] text-white rounded-md text-sm hover:border-white transition"
          >
            Ver proyectos
          </Link>

        </div>

      </div>

    </section>
  )
}
