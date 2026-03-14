export default function About() {
  return (
    <section id="nosotros" className="bg-white">

      <div className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">

        {/* TEXTO */}
        <div>

          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2B2B]">
            Construimos experiencias web con propósito
          </h2>

          <p className="mt-6 text-[#6B6B6B] leading-relaxed">
            En BDL Agency creemos que un sitio web no debe ser solo una
            presentación digital, sino una herramienta estratégica para
            comunicar el valor de una empresa y generar oportunidades
            de negocio.
          </p>

          <p className="mt-4 text-[#6B6B6B] leading-relaxed">
            Por eso cada proyecto comienza entendiendo el propósito del
            negocio, el público al que se dirige y los objetivos que
            se desean alcanzar. A partir de allí diseñamos y desarrollamos
            experiencias digitales que combinan estrategia, diseño y tecnología.
          </p>

          <p className="mt-4 text-[#6B6B6B] leading-relaxed">
            Nuestro enfoque busca crear sitios web claros, rápidos y
            bien estructurados que ayuden a las empresas a fortalecer
            su presencia digital y conectar mejor con sus clientes.
          </p>

        </div>

        {/* VISUAL */}
        <div className="border border-[#E6DEDE] rounded-xl p-10">

          <div className="space-y-8">

            <div>
              <h3 className="text-xl font-semibold text-[#2C2B2B]">
                Estrategia primero
              </h3>
              <p className="mt-2 text-[#6B6B6B]">
                Cada proyecto comienza con entender el objetivo del negocio.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2C2B2B]">
                Diseño con propósito
              </h3>
              <p className="mt-2 text-[#6B6B6B]">
                No diseñamos solo por estética, cada sección cumple una función.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#2C2B2B]">
                Tecnología moderna
              </h3>
              <p className="mt-2 text-[#6B6B6B]">
                Utilizamos herramientas actuales para crear sitios rápidos y escalables.
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
