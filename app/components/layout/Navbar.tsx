"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: "Inicio", href: "/" },
    { name: "Servicios", href: "#servicios" },
    { name: "Proceso", href: "#proceso" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Nosotros", href: "#nosotros" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 bg-[#F3EEE9]/90 backdrop-blur border-b border-[#E6DEDE]">
      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

          {/* LOGO */}
          <Link href="/" className="flex items-center gap-1">
            <span className="text-xl font-bold text-[#2C2B2B]">BDL</span>
            <span className="text-sm text-[#6B6B6B]">Agency</span>
          </Link>

          {/* MENU DESKTOP */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-sm text-[#6B6B6B] hover:text-[#2C2B2B] transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex">
            <a
              href="#contacto"
              className="px-4 py-2 text-sm rounded-md bg-[#2C2B2B] text-white hover:bg-[#444] transition"
            >
              Agendar reunión
            </a>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[#2C2B2B]"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-[#E6DEDE] bg-[#F3EEE9]">
          <div className="flex flex-col px-6 py-4 gap-4">

            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#6B6B6B] hover:text-[#2C2B2B]"
                onClick={() => setOpen(false)}
              >
                {link.name}
              </Link>
            ))}

            <a
              href="#contacto"
              className="mt-2 text-center bg-[#2C2B2B] text-white py-2 rounded-md"
            >
              Agendar reunión
            </a>

          </div>
        </div>
      )}
    </header>
  )
}
