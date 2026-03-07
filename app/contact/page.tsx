"use client"

import type React from "react"
import { useState, useRef, type FormEvent } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Mail, Phone, MapPin, Send, User, MessageSquare, PhoneCall, Info } from "lucide-react"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
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
      toast.error("Please fill in all required fields")
      return
    }

    setLoading(true)

    try {
      // Use your EmailJS credentials
      // You can also use environment variables for security
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "service_id",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "template_id",
        formRef.current!,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "public_key"
      )

      if (result.text !== "OK") throw new Error("Failed to send message")

      toast.success("Message sent successfully! We will get back to you soon.")
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      })
    } catch (err) {
      console.error("EmailJS Error:", err)
      toast.error("Something went wrong. Please try again later.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#f8fafc]">
      <Header />

      <main className="flex-1">
        {/* HERO */}
        <main className="flex-1">
          {/* Hero Section */}
          <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#020617] text-white py-20">

            {/* Radial Glow Overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.25),transparent_70%)]" />

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

              <h1 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
                Let’s Build Something Great
              </h1>

              <p className="max-w-2xl text-lg text-slate-300 leading-relaxed">
                Have a question or a project in mind? Reach out to us and let's transform your ideas into digital reality.
              </p>

            </div>
          </section>
        </main>

        {/* CONTENT */}
        <section className="py-24 -mt-10">
          <div className="mx-auto max-w-7xl px-4 grid grid-cols-1 lg:grid-cols-12 gap-12">

            {/* INFO - LEFT SIDE */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-3xl shadow-2xl shadow-blue-100/50 border border-blue-600 p-6 md:p-10 relative overflow-hidden">

                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">
                  Get in Touch
                </h2>

                <p className="text-slate-500 mb-6 md:mb-8">
                  Our team typically responds within 24 hours.
                </p>

                <div className="space-y-4 md:space-y-6">
                  {[
                    {
                      icon: <Mail className="w-5 h-5" />,
                      title: "Email",
                      value: "modstacksolutions@gmail.com",
                      href: "mailto:modstacksolutions@gmail.com",
                      color: "bg-blue-50 text-blue-600",
                    },
                    {
                      icon: <Phone className="w-5 h-5" />,
                      title: "Phone",
                      value: "+91 9702571015",
                      href: "tel:+919702571015",
                      color: "bg-emerald-50 text-emerald-600",
                    },
                    {
                      icon: <MapPin className="w-5 h-5" />,
                      title: "Location",
                      value: "Mumbai, Maharashtra, India",
                      color: "bg-orange-50 text-orange-600",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-4 p-3 md:p-4 rounded-xl hover:bg-slate-50 transition"
                    >
                      <div
                        className={`flex items-center justify-center w-10 h-10 md:w-11 md:h-11 rounded-xl ${item.color}`}
                      >
                        {item.icon}
                      </div>

                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                          {item.title}
                        </span>

                        {item.href ? (
                          <a
                            href={item.href}
                            className="text-sm md:text-base font-semibold text-slate-800 hover:text-blue-600 transition"
                          >
                            {item.value}
                          </a>
                        ) : (
                          <span className="text-sm md:text-base font-semibold text-slate-800">
                            {item.value}
                          </span>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </div>

            {/* FORM - RIGHT SIDE */}
            <div className="lg:col-span-8 bg-white rounded-3xl shadow-2xl shadow-blue-100/50 border border-blue-600 p-8 md:p-12 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -z-10 opacity-50" />
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-slate-900 mb-2">Send a Message</h2>
                <p className="text-slate-500">Fill out the form below and we'll be in touch shortly.</p>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input
                    label="Full Name"
                    name="name"
                    required
                    icon={<User className="w-4 h-4" />}
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    error={fieldErrors.name}
                  />

                  <Input
                    label="Email Address"
                    name="email"
                    type="email"
                    required
                    icon={<Mail className="w-4 h-4" />}
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    error={fieldErrors.email}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <Input
                    label="Phone Number"
                    name="phone"
                    icon={<PhoneCall className="w-4 h-4" />}
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                  />

                  <Input
                    label="Subject"
                    name="subject"
                    required
                    icon={<Info className="w-4 h-4" />}
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="How can we help?"
                    error={fieldErrors.subject}
                  />
                </div>

                {/* MESSAGE */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
                    <MessageSquare className="w-4 h-4 text-slate-400" />
                    Message <span className="text-red-500">*</span>
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project requirements, goals, and any specific questions you have..."
                    className={`
                      w-full h-44 rounded-2xl border px-5 py-4
                      outline-none resize-none transition-all duration-300
                      ${fieldErrors.message
                        ? "border-red-500 bg-red-50/30 focus:ring-4 focus:ring-red-500/10"
                        : "border-slate-200 bg-slate-50/30 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
                      }
                    `}
                  />

                  {fieldErrors.message && (
                    <p className="mt-1 text-xs text-red-500 font-medium">
                      {fieldErrors.message}
                    </p>
                  )}
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className="
  relative overflow-hidden group
  w-full
  flex items-center justify-center gap-3
  px-10 py-5
  rounded-2xl
  bg-blue-600
  text-base font-bold text-white
  shadow-xl shadow-blue-200
  transition-all duration-300
  hover:bg-blue-700 hover:-translate-y-1 hover:shadow-blue-300
  active:translate-y-0
  disabled:opacity-70
  disabled:cursor-not-allowed
  disabled:hover:translate-y-0
"
                >
                  {loading ? (
                    <>
                      <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-center mx-20 gap-2">
                        <span>Send Message</span>
                      </div>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div >
  )
}

/* INPUT COMPONENT */
function Input({ label, error, required, icon, ...props }: any) {
  return (
    <div className="space-y-2">
      <label className="flex items-center gap-2 text-sm font-semibold text-slate-700">
        {icon && <span className="text-slate-400">{icon}</span>}
        {label}
        {required && <span className="text-red-500">*</span>}
      </label>

      <div className="relative">
        <input
          {...props}
          className={`
            w-full rounded-2xl border px-5 py-4
            outline-none transition-all duration-300
            ${error
              ? "border-red-500 bg-red-50/30 focus:ring-4 focus:ring-red-500/10"
              : "border-slate-200 bg-slate-50/30 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10"
            }
          `}
        />
      </div>

      {error && (
        <p className="mt-1 text-xs text-red-500 font-medium">{error}</p>
      )}
    </div>
  )
}
