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
        <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Portfolio</h1>
            <p className="text-lg text-[#cbd5e1] max-w-2xl">
              Showcase of projects where we've helped businesses achieve their goals
            </p>
          </div>
        </section>

        {/* Filter Buttons */}
        <section className="bg-white border-b border-[#e5e7eb] sticky top-16 z-40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category === "All" ? null : category)}
                  className={`px-4 py-2 rounded-lg font-medium transition ${
                    (category === "All" && selectedCategory === null) || selectedCategory === category
                      ? "bg-[#3b82f6] text-white"
                      : "bg-[#f3f4f6] text-[#374151] hover:bg-[#e5e7eb]"
                  }`}
                >
                  {category}
                </button>
              ))}
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
        <section className="bg-[#3b82f6] text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Want to Bring Your Vision to Life?</h2>
            <p className="text-lg text-[#dbeafe] mb-8">
              Let's discuss how we can help create something amazing for your business.
            </p>
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-[#3b82f6] rounded-lg font-semibold hover:bg-[#f0f9ff] transition inline-block"
            >
              Get in Touch
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
