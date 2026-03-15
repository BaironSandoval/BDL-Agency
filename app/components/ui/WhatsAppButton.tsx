"use client"

import { MessageCircle } from "lucide-react"

export default function WhatsAppButton() {
  const phone = "+573228588926"

  const message = "Hola, quiero información sobre desarrollo de sitios web"

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#2C2B2B] text-white shadow-lg hover:bg-[#444] transition"
    >
      <MessageCircle size={26} />
    </a>
  )
}