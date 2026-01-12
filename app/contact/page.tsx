"use client"

import type React from "react"

import { useState, type FormEvent } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to submit form")
      }

      setSuccess(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })

      // Reset success message after 5 seconds
      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-[#cbd5e1] max-w-2xl">
              Let's discuss how we can help transform your business with modern technology solutions.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Contact Info */}
              <div className="p-8 rounded-xl bg-[#f9fafb] border border-[#e5e7eb]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-4">Email</h3>
                <a href="mailto:modstacksolutions@gmail.com" className="text-[#3b82f6] hover:text-[#1e40af] transition">
                  modstacksolutions@gmail.com
                </a>
              </div>

              <div className="p-8 rounded-xl bg-[#f9fafb] border border-[#e5e7eb]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-4">Phone</h3>
                <a href="tel:+91 9702571015" className="text-[#3b82f6] hover:text-[#1e40af] transition">
                  +91 9702571015
                </a>
              </div>

              <div className="p-8 rounded-xl bg-[#f9fafb] border border-[#e5e7eb]">
                <h3 className="text-lg font-bold text-[#0f172a] mb-4">Location</h3>
                <p className="text-[#6b7280]">Mumbai,Maharashtra,India</p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-[#f9fafb] p-8 rounded-xl border border-[#e5e7eb]">
              <h2 className="text-3xl font-bold text-[#0f172a] mb-8">Send us a Message</h2>

              {success && (
                <div className="mb-6 p-4 bg-[#dcfce7] border border-[#22c55e] text-[#166534] rounded-lg">
                  Thank you for your message! We'll get back to you shortly.
                </div>
              )}

              {error && (
                <div className="mb-6 p-4 bg-[#fee2e2] border border-[#ef4444] text-[#991b1b] rounded-lg">{error}</div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-[#374151] font-semibold mb-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6] outline-none transition"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-[#374151] font-semibold mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6] outline-none transition"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[#374151] font-semibold mb-2">Phone (Optional)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6] outline-none transition"
                    placeholder="+1 (234) 567-890"
                  />
                </div>

                <div>
                  <label className="block text-[#374151] font-semibold mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6] outline-none transition"
                    placeholder="Project Inquiry"
                  />
                </div>

                <div>
                  <label className="block text-[#374151] font-semibold mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg border border-[#d1d5db] focus:border-[#3b82f6] focus:ring-2 focus:ring-[#3b82f6] outline-none transition resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-6 py-3 bg-[#3b82f6] text-white rounded-lg font-semibold hover:bg-[#1e40af] transition disabled:bg-[#9ca3af] cursor-pointer"
                >
                  {loading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
