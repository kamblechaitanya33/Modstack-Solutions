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

      if (!response.ok) throw new Error("Failed to submit form")

      setSuccess(true)
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" })
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
        <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white py-20">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_70%)]" />

  <div className="relative mx-auto max-w-7xl px-4 w-full">
    <h1 className="text-5xl font-extrabold tracking-tight mb-4">
      Let’s Build Something Great
    </h1>

    <p className="max-w-2xl text-lg text-slate-300">
      Reach out to discuss your ideas, projects, or collaborations.
    </p>
  </div>
</section>

        {/* CONTACT CONTENT */}
        <section className="py-24">
          <div className="mx-auto max-w-6xl px-4 grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* INFO CARDS – VERTICALLY CENTERED */}
            <div className="flex flex-col justify-center space-y-6 min-h-full">
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
                    <h3 className="font-semibold text-slate-900">{item.title}</h3>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-blue-600 hover:underline"
                      >
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
                    value={formData.name}
                    placeholder="Enter your name"
                    onChange={handleChange}
                  />

                  <Input
                    label="Email ID"
                    name="email"
                    type="email"
                    value={formData.email}
                    placeholder="Enter your email address"
                    onChange={handleChange}
                  />
                </div>

                <Input
                  label="Phone No"
                  name="phone"
                  value={formData.phone}
                  placeholder="Enter your phone number"
                  onChange={handleChange}
                />

                <Input
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  placeholder="Enter subject"
                  onChange={handleChange}
                />

                {/* MESSAGE */}
                <div>
                  <label className="block text-sm font-semibold text-slate-700">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Describe your project..."
                    className="
        mt-2 w-full h-40 rounded-xl border border-slate-300
        px-4 py-3 text-slate-800
        focus:ring-2 focus:ring-blue-500 focus:border-blue-500
        outline-none resize-none overflow-y-auto
        placeholder:text-slate-400
      "
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
      w-full flex items-center justify-center gap-2
      rounded-xl bg-blue-600 px-6 py-4
      font-semibold text-white
      hover:bg-blue-700 transition
      disabled:opacity-60 disabled:cursor-not-allowed
    "
                >
                  <Send size={18} />
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

function Input({ label, ...props }: any) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-700">
        {label}
      </label>
      <input
        {...props}
        className="
          mt-2 w-full rounded-xl border border-slate-300
          px-4 py-3 text-slate-800
          focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          outline-none
          placeholder:text-slate-400
        "
      />
    </div>
  )
}

