import Image from "next/image"
import Link from "next/link"

export default function Portfolio() {

  const projects = [
    {
      title: "Landing para SaaS",
      category: "Landing Page",
      image: "/projects/project1.jpg",
      link: "#"
    },
    {
      title: "Sitio corporativo",
      category: "Web Corporativa",
      image: "/projects/project2.jpg",
      link: "#"
    },
    {
      title: "Plataforma educativa",
      category: "Desarrollo Web",
      image: "/projects/project3.jpg",
      link: "#"
    },
    {
      title: "Landing de producto",
      category: "Landing Page",
      image: "/projects/project4.jpg",
      link: "#"
    }
  ]

  return (
    <section id="proyectos" className="bg-white">

      <div className="max-w-7xl mx-auto px-6 py-28">

        {/* HEADER */}
        <div className="max-w-2xl mb-16">

          <h2 className="text-3xl md:text-4xl font-bold text-[#2C2B2B]">
            Proyectos recientes
          </h2>

          <p className="mt-4 text-[#6B6B6B]">
            Algunos de los proyectos web que hemos desarrollado para
            empresas y profesionales que buscan fortalecer su presencia digital.
          </p>

        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (

            <Link
              key={index}
              href={project.link}
              className="group border border-[#E6DEDE] rounded-xl overflow-hidden hover:shadow-md transition"
            >

              {/* IMAGE */}
              <div className="relative h-[260px]">

                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />

              </div>

              {/* INFO */}
              <div className="p-6">

                <p className="text-sm text-[#6B6B6B]">
                  {project.category}
                </p>

                <h3 className="mt-1 text-xl font-semibold text-[#2C2B2B]">
                  {project.title}
                </h3>

              </div>

            </Link>

          ))}

        </div>

      </div>

    </section>
  )
}
