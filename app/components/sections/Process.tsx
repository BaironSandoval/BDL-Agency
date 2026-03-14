export default function Process() {
  const steps = [
    {
      number: "01",
      title: "Descubrimiento",
      description:
        "Analizamos tu negocio, tus objetivos y el tipo de clientes que deseas atraer para definir el propósito del sitio.",
    },
    {
      number: "02",
      title: "Estrategia",
      description:
        "Definimos la estructura del sitio, arquitectura del contenido y secciones necesarias para lograr el objetivo del proyecto.",
    },
    {
      number: "03",
      title: "Diseño y Desarrollo",
      description:
        "Diseñamos la interfaz y desarrollamos el sitio utilizando tecnologías modernas optimizadas para rendimiento.",
    },
    {
      number: "04",
      title: "Lanzamiento",
      description:
        "Publicamos el sitio optimizado, asegurando velocidad, accesibilidad y una experiencia fluida para los usuarios.",
    },
  ]

  return (
    <section id="proceso" className="bg-[#F3EEE9]">

      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* HEADER */}
        <div className="max-w-2xl mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2B2B]">
            Nuestro proceso de trabajo
          </h2>

          <p className="mt-4 text-[#6B6B6B]">
            Cada proyecto sigue una metodología clara que nos permite
            construir sitios web estratégicos alineados con los objetivos
            de cada negocio.
          </p>

        </div>

        {/* STEPS */}
        <div className="grid md:grid-cols-4 gap-10">

          {steps.map((step, index) => (

            <div key={index} className="relative">

              <div className="text-4xl font-bold text-[#E6DEDE]">
                {step.number}
              </div>

              <h3 className="mt-4 text-xl font-semibold text-[#2C2B2B]">
                {step.title}
              </h3>

              <p className="mt-3 text-[#6B6B6B] leading-relaxed">
                {step.description}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  )
}
