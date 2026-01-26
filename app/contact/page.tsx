"use client"

import type React from "react"
import { useState, type FormEvent } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send } from "lucide-react"

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
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({})

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setFieldErrors(prev => ({ ...prev, [name]: "" }))
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    const errors: Record<string, string> = {}

    if (!formData.name.trim()) errors.name = "Name is required"
    if (!formData.email.trim()) errors.email = "Email is required"
    if (!formData.subject.trim()) errors.subject = "Subject is required"
    if (!formData.message.trim()) errors.message = "Message is required"

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      return
    }

    setLoading(true)
    setError("")
    setSuccess(false)

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      if (!response.ok) throw new Error("Failed to submit form")

      setSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })

      setTimeout(() => setSuccess(false), 5000)
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white py-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_70%)]" />
          <div className="relative mx-auto max-w-7xl px-4">
            <h1 className="text-5xl font-extrabold mb-4">
              Let’s Build Something Great
            </h1>
            <p className="max-w-2xl text-lg text-slate-300">
              Reach out to discuss your ideas, projects, or collaborations.
            </p>
          </div>
        </section>

        {/* CONTENT */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* INFO */}
            <div className="flex flex-col justify-center space-y-6">
              {[
                {
                  icon: <Mail />,
                  title: "Email",
                  value: "modstacksolutions@gmail.com",
                  href: "mailto:modstacksolutions@gmail.com",
                },
                {
                  icon: <Phone />,
                  title: "Phone",
                  value: "+91 9702571015",
                  href: "tel:+919702571015",
                },
                {
                  icon: <MapPin />,
                  title: "Location",
                  value: "Mumbai, Maharashtra, India",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 p-6 rounded-2xl bg-white shadow-lg hover:shadow-xl transition"
                >
                  <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    {item.href ? (
                      <a href={item.href} className="text-blue-600 hover:underline">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-slate-600">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* FORM */}
            <div className="lg:col-span-2 bg-white/80 backdrop-blur rounded-3xl shadow-xl border border-slate-200 p-10">
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                Send a Message
              </h2>

              {success && (
                <div className="mb-6 rounded-lg bg-green-100 text-green-700 px-4 py-3">
                  ✅ Message sent successfully!
                </div>
              )}

              {error && (
                <div className="mb-6 rounded-lg bg-red-100 text-red-700 px-4 py-3">
                  ❌ {error}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    error={fieldErrors.name}
                  />

                  <Input
                    label="Email ID"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    error={fieldErrors.email}
                  />
                </div>

                <Input
                  label="Phone No"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                />

                <Input
                  label="Subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter subject"
                  error={fieldErrors.subject}
                />

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700">
                    Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe your project..."
                    className={`
                      mt-2 w-full h-40 rounded-xl border px-4 py-3
                      outline-none resize-none
                      ${
                        fieldErrors.message
                          ? "border-red-500 focus:ring-2 focus:ring-red-500"
                          : "border-slate-300 focus:ring-2 focus:ring-blue-500"
                      }
                    `}
                  />

                  {fieldErrors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
                    w-full
                    inline-flex items-center justify-center gap-2
                    px-6 py-4
                    rounded-lg
                    bg-gradient-to-r from-[#2563eb] to-[#1e40af]
                    text-sm font-semibold text-white
                    shadow-md
                    transition-all
                    hover:shadow-lg
                    disabled:opacity-60
                    disabled:cursor-not-allowed
                  "
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
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

/* INPUT COMPONENT */
function Input({ label, error, required, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        {...props}
        className={`
          mt-2 w-full rounded-xl border px-4 py-3
          outline-none
          ${
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-500"
              : "border-slate-300 focus:ring-2 focus:ring-blue-500"
          }
        `}
      />

      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  )
}
