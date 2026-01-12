"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const faqs = [
  {
    question: "What services does Modstack Solutions offer?",
    answer:
      "We offer comprehensive IT and software services including web development, mobile applications, cloud solutions, IT consulting, and support & maintenance. Each service is tailored to meet your specific business needs.",
  },
  {
    question: "How long does a typical project take?",
    answer:
      "Project timelines vary based on scope and complexity. A simple website might take 4-8 weeks, while enterprise solutions could take several months. We provide detailed project plans and timelines during the initial consultation.",
  },
  {
    question: "Do you offer ongoing support after project completion?",
    answer:
      "Yes, we offer comprehensive post-launch support including monitoring, updates, bug fixes, and feature enhancements. We provide flexible support plans to match your needs.",
  },
  {
    question: "What technologies do you specialize in?",
    answer:
      "We work with modern technologies including React, Next.js, Node.js, Python, PostgreSQL, AWS, Google Cloud, and more. We choose technologies based on your project requirements and long-term goals.",
  },
  {
    question: "Can you work with existing systems or legacy code?",
    answer:
      "Absolutely. We have extensive experience modernizing legacy systems and integrating with existing infrastructure. We can assess your current setup and recommend the best approach.",
  },
  {
    question: "How do you handle project communication?",
    answer:
      "We maintain transparent communication through regular updates, weekly standups, and a dedicated project manager. You'll have clear visibility into project progress at all times.",
  },
  {
    question: "What is your hiring and team structure?",
    answer:
      "We have a diverse team of developers, designers, architects, and project managers. Depending on your project needs, we assemble the right team with relevant expertise.",
  },
  {
    question: "Do you offer flexible engagement models?",
    answer:
      "Yes, we offer project-based, time and materials, and retainer models. We can customize an engagement model that works best for your organization.",
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-lg text-[#cbd5e1] max-w-2xl">
              Find answers to common questions about our services and processes
            </p>
          </div>
        </section>

        {/* FAQ Content */}
        <section className="py-20 bg-white">
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-[#e5e7eb] rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#f9fafb] transition"
                  >
                    <h3 className="text-lg font-semibold text-[#0f172a]">{faq.question}</h3>
                    <svg
                      className={`w-5 h-5 text-[#3b82f6] transition-transform ${
                        openIndex === index ? "transform rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 14l-7 7m0 0l-7-7m7 7V3"
                      />
                    </svg>
                  </button>
                  {openIndex === index && (
                    <div className="px-6 py-4 bg-[#f9fafb] border-t border-[#e5e7eb]">
                      <p className="text-[#6b7280] leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#3b82f6] text-white py-20">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold mb-4">Still Have Questions?</h2>
            <p className="text-lg text-[#dbeafe] mb-8">
              Get in touch with our team. We're happy to help and answer any questions you might have.
            </p>
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-[#3b82f6] rounded-lg font-semibold hover:bg-[#f0f9ff] transition inline-block"
            >
              Contact Us
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
