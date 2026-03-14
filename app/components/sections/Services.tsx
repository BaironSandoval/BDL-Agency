export default function Services() {
  const services = [
    {
      title: "Landing Pages",
      description:
        "Diseñadas para campañas de marketing, lanzamiento de productos y captación de clientes con estructuras optimizadas para conversión.",
    },
    {
      title: "Sitios Web Corporativos",
      description:
        "Creamos sitios profesionales que comunican el valor de tu empresa, fortalecen tu marca y generan confianza en tus clientes.",
    },
    // {
    //   title: "Estrategia Web",
    //   description:
    //     "Analizamos tu negocio para estructurar el sitio de forma estratégica, alineando contenido, diseño y objetivos de conversión.",
    // },
    // {
    //   title: "Optimización y Rendimiento",
    //   description:
    //     "Desarrollamos sitios rápidos, optimizados para SEO y preparados para ofrecer una experiencia de usuario fluida en todos los dispositivos.",
    // },
  ]

  return (
    <section id="servicios" className="bg-white">

      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* HEADER */}
        <div className="max-w-2xl mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2B2B]">
            Servicios que impulsan tu presencia digital
          </h2>

          <p className="mt-4 text-[#6B6B6B]">
            Cada proyecto que desarrollamos parte de una estrategia clara.
            No solo construimos sitios web, diseñamos experiencias pensadas
            para comunicar valor y generar resultados.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-8">

          {services.map((service, index) => (

            <div
              key={index}
              className="border border-[#E6DEDE] rounded-xl p-8 hover:shadow-md transition"
            >

              <h3 className="text-xl font-semibold text-[#2C2B2B]">
                {service.title}
              </h3>

              <p className="mt-3 text-[#6B6B6B] leading-relaxed">
                {service.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}
