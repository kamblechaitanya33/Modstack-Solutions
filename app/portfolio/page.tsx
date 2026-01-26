"use client"

import { useEffect, useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

interface PortfolioProject {
  id: string
  title: string
  description: string
  category: string
  client_name: string
  image_url: string
  results: string
  technologies: string[]
}

export default function PortfolioPage() {
  const [projects, setProjects] = useState<PortfolioProject[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  useEffect(() => {
    async function loadProjects() {
      try {
        const response = await fetch("/api/portfolio")
        const data = await response.json()
        setProjects(data.data || [])
      } catch (error) {
        console.error("Failed to load portfolio:", error)
      } finally {
        setLoading(false)
      }
    }

    loadProjects()
  }, [])

  const categories = ["All", ...new Set(projects.map((p) => p.category))]
  const filteredProjects =
    selectedCategory && selectedCategory !== "All" ? projects.filter((p) => p.category === selectedCategory) : projects

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white py-20">
          {/* Radial Glow Overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_70%)]" />

          <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
              Our Portfolio
            </h1>

            <p className="text-lg text-slate-300 max-w-2xl">
              Showcase of projects where we've helped businesses achieve their goals
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className=" z-40 border-b border-neutral-200 bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">

            <div className="flex flex-wrap items-center gap-2">
              {categories.map((category) => {
                const isActive =
                  (category === "All" && selectedCategory === null) ||
                  selectedCategory === category

                return (
                  <button
                    key={category}
                    onClick={() =>
                      setSelectedCategory(category === "All" ? null : category)
                    }
                    className={`
              relative
              px-4 py-1.5
              text-sm font-medium
              rounded-full
              transition-all duration-300
              backdrop-blur

              ${isActive
                        ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md shadow-blue-500/20"
                        : "text-neutral-700 bg-neutral-100 hover:bg-neutral-200"
                      }
            `}
                  >
                    {category}

                    {/* Subtle glow */}
                    {isActive && (
                      <span className="absolute inset-0 -z-10 rounded-full blur-md bg-blue-500/40" />
                    )}
                  </button>
                )
              })}
            </div>

          </div>
        </section>


        {/* Projects Grid */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {loading ? (
              <div className="text-center py-12">
                <p className="text-[#6b7280]">Loading projects...</p>
              </div>
            ) : filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className="bg-white rounded-xl overflow-hidden border border-[#e5e7eb] hover:shadow-xl transition"
                  >
                    <div className="h-48 bg-gradient-to-br from-[#e0e7ff] to-[#dbeafe] flex items-center justify-center">
                      <img
                        src={project.image_url || "/placeholder.svg"}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.src = "/placeholder.svg?height=300&width=400"
                        }}
                      />
                    </div>
                    <div className="p-6">
                      <span className="inline-block px-3 py-1 bg-[#eff6ff] text-[#3b82f6] text-sm font-semibold rounded-full mb-3">
                        {project.category}
                      </span>
                      <h3 className="text-xl font-bold text-[#0f172a] mb-2">{project.title}</h3>
                      <p className="text-[#6b7280] text-sm mb-4">{project.description}</p>
                      <p className="text-[#374151] font-semibold mb-4">Client: {project.client_name}</p>

                      {project.technologies && project.technologies.length > 0 && (
                        <div className="mb-4">
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.slice(0, 3).map((tech, i) => (
                              <span key={i} className="text-xs px-2 py-1 bg-[#f0f9ff] text-[#0369a1] rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <p className="text-sm text-[#059669] font-semibold">Results: {project.results}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-[#6b7280]">No projects found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-indigo-700 py-24 text-white">
          {/* Decorative background blur */}
          <div className="absolute inset-0">
            <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Want to Bring Your Vision to Life?
            </h2>

            <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl mx-auto leading-relaxed">
              Let’s discuss how we can help create something amazing for your business.
            </p>

            <div className="flex items-center justify-center">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-xl bg-white px-10 py-4 text-lg font-semibold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:bg-blue-50"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
