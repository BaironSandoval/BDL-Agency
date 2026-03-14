export default function Benefits() {
  const benefits = [
    {
      title: "Diseño estratégico",
      description:
        "Cada sección del sitio se construye con un propósito claro: comunicar valor y guiar al usuario hacia la acción.",
    },
    {
      title: "Experiencia optimizada",
      description:
        "Interfaces claras, navegación intuitiva y diseño enfocado en mejorar la experiencia del usuario.",
    },
    {
      title: "Alto rendimiento",
      description:
        "Sitios rápidos, optimizados y desarrollados con tecnologías modernas que garantizan velocidad y estabilidad.",
    },
    {
      title: "Imagen profesional",
      description:
        "Una presencia digital sólida que transmite confianza y fortalece la percepción de tu marca.",
    },
  ]

  return (
    <section className="bg-[#F3EEE9]">

      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* HEADER */}
        <div className="max-w-2xl mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2B2B]">
            Lo que obtienes con un sitio bien construido
          </h2>

          <p className="mt-4 text-[#6B6B6B]">
            Nuestro enfoque combina estrategia, diseño y tecnología para
            crear experiencias digitales que aportan valor real a tu negocio.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {benefits.map((benefit, index) => (

            <div key={index}>

              <h3 className="text-xl font-semibold text-[#2C2B2B]">
                {benefit.title}
              </h3>

              <p className="mt-3 text-[#6B6B6B] leading-relaxed">
                {benefit.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}
