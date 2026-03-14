import Link from "next/link"

export default function Hero() {
  return (
    <section className="bg-[#F3EEE9]">

      <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-14 items-center">

        {/* TEXTO */}
        <div>

          <span className="text-sm text-[#6B6B6B] tracking-wide uppercase">
            Agencia de desarrollo web
          </span>

          <h1 className="mt-4 text-4xl md:text-5xl font-bold text-[#2C2B2B] leading-tight">
            Creamos sitios web estratégicos que convierten visitantes en clientes
          </h1>

          <p className="mt-6 text-lg text-[#6B6B6B] leading-relaxed max-w-xl">
            Diseñamos y desarrollamos sitios web y landing pages con un enfoque
            estratégico basado en los objetivos de cada negocio. Cada sección,
            cada estructura y cada interacción tiene un propósito.
          </p>

          {/* BOTONES */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">

            <Link
              href="#servicios"
              className="px-6 py-3 bg-[#2C2B2B] text-white rounded-md text-sm hover:bg-[#3a3a3a] transition"
            >
              Ver servicios
            </Link>

            <Link
              href="#contacto"
              className="px-6 py-3 border border-[#E6DEDE] rounded-md text-sm text-[#2C2B2B] hover:bg-[#E6DEDE] transition"
            >
              Agendar reunión
            </Link>

          </div>

        </div>

        {/* VISUAL */}
        <div className="relative">

          <div className="bg-white border border-[#E6DEDE] rounded-xl shadow-sm p-6">

            <div className="h-[320px] rounded-lg bg-gradient-to-br from-[#E6DEDE] to-[#F3EEE9] flex items-center justify-center">

              <p className="text-[#6B6B6B] text-sm">
                Vista previa de proyecto web
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
