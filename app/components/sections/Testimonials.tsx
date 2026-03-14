export default function Testimonials() {

  const testimonials = [
    {
      name: "Carlos Ramírez",
      role: "CEO - Tech Solutions",
      text: "El sitio web que desarrollaron superó nuestras expectativas. La estructura estratégica realmente ayudó a mejorar nuestras conversiones."
    },
    {
      name: "Laura Martínez",
      role: "Fundadora - LM Studio",
      text: "Trabajar con BDL Agency fue un proceso muy profesional. Entendieron perfectamente el objetivo de nuestra marca."
    },
    {
      name: "Andrés Gómez",
      role: "Director - AG Consulting",
      text: "No solo diseñaron un sitio atractivo, también pensaron cada sección con un propósito claro para nuestro negocio."
    }
  ]

  return (
    <section className="bg-[#F3EEE9]">

      <div className="max-w-7xl mx-auto px-6 py-24">

        {/* TITULO */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2B2B]">
            Lo que dicen nuestros clientes
          </h2>

          <p className="mt-4 text-[#6B6B6B] max-w-2xl mx-auto">
            Empresas y profesionales que confiaron en nuestro enfoque estratégico
            para construir su presencia digital.
          </p>

        </div>

        {/* TESTIMONIOS */}
        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((t, index) => (

            <div
              key={index}
              className="bg-white border border-[#E6DEDE] rounded-xl p-8 hover:shadow-md transition"
            >

              <p className="text-[#6B6B6B] leading-relaxed">
                "{t.text}"
              </p>

              <div className="mt-6">

                <p className="font-semibold text-[#2C2B2B]">
                  {t.name}
                </p>

                <p className="text-sm text-[#6B6B6B]">
                  {t.role}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}
