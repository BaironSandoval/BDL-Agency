import Link from "next/link"
import { Instagram, MessageCircle } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2C2B2B] text-white">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* MARCA */}
          <div>
            <h3 className="text-xl font-bold">BDL Agency</h3>

            <p className="mt-4 text-[#E6DEDE] leading-relaxed">
              Agencia enfocada en el diseño y desarrollo de sitios web
              estratégicos que ayudan a las empresas a comunicar su valor
              y fortalecer su presencia digital.
            </p>
          </div>

          {/* NAVEGACIÓN */}
          <div>
            <h4 className="font-semibold mb-4">Navegación</h4>

            <div className="flex flex-col gap-3 text-[#E6DEDE]">
              <Link href="#servicios" className="hover:text-white transition">Servicios</Link>
              <Link href="#proceso" className="hover:text-white transition">Proceso</Link>
              <Link href="#proyectos" className="hover:text-white transition">Proyectos</Link>
              <Link href="#nosotros" className="hover:text-white transition">Nosotros</Link>
              <Link href="#contacto" className="hover:text-white transition">Contacto</Link>
            </div>
          </div>

          {/* CONTACTO */}
          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>

            <div className="space-y-3 text-[#E6DEDE]">

              <p>contacto@bdlagency.com</p>
              <p>+57 300 000 0000</p>

              {/* REDES */}
              <div className="flex gap-5 mt-4">

                <Link
                  href="#"
                  className="text-[#E6DEDE] hover:text-[#F3EEE9] transition"
                >
                  <Instagram size={20} />
                </Link>

                <Link
                  href="#"
                  className="text-[#E6DEDE] hover:text-[#F3EEE9] transition"
                >
                  <MessageCircle size={20} />
                </Link>

              </div>

            </div>
          </div>

        </div>

        <div className="border-t border-[#6B6B6B] mt-12 pt-6 text-center text-sm text-[#E6DEDE]">
          © {new Date().getFullYear()} BDL Agency. Todos los derechos reservados.
        </div>

      </div>

    </footer>
  )
}
