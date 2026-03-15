import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DBL Agency",
  description: "Agencia de desarrollo web enfocada en crear sitios estratégicos que convierten visitantes en clientes. Diseñamos y desarrollamos sitios web y landing pages con un enfoque estratégico basado en los objetivos de cada negocio. Cada sección, cada estructura y cada interacción tiene un propósito.",
  icons: {
    icon: "/logo.png",
  },
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
