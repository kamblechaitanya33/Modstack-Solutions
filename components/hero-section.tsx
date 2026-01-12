"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"


export function HeroSection() {
  return (
    <section className="min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white flex items-center">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full py-20">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Complete IT & Software Solutions for Modern Business
          </h1>
          <p className="text-lg md:text-xl text-[#cbd5e1] mb-8 max-w-2xl">
            Transform your business with reliable, modern, and scalable digital solutions. From web and mobile apps to
            cloud in
            frastructure and IT consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 bg-[#3b82f6] text-white rounded-lg font-semibold hover:bg-[#1e40af] transition text-center"
            >
              Get Started
            </Link>
            <Link
              href="/portfolio"
              className="px-8 py-4 border-2 border-[#3b82f6] text-[#3b82f6] rounded-lg font-semibold hover:bg-[#3b82f6] hover:text-white transition text-center"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  )

}

export function PopupScreen() {
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    setShowPopup(true)
  }, [])

  if (!showPopup) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
      <div className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-gradient-to-br from-white to-slate-100 shadow-2xl animate-fadeIn">

        {/* ❌ Close Icon */}
        <button
          onClick={() => setShowPopup(false)}
          className="absolute top-4 right-4 z-10 text-gray-500 hover:text-black text-xl font-semibold transition"
        >
          ✕
        </button>

        {/* 🔹 CONTENT WRAPPER */}
        <div className="flex flex-col md:flex-row">

          {/* 🖼 IMAGE SECTION */}
          <div className="md:w-1/2 p-5 flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100">
            <div className="relative w-full max-w-[420px] aspect-[3/4] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/image1.jpg"
                alt="Birthday Celebration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* 📝 TEXT SECTION */}
          <div className="md:w-1/2 p-6 md:p-10 flex flex-col justify-center text-center md:text-left">
            <span className="inline-block mb-2 text-sm font-semibold tracking-wide text-blue-600 uppercase">
              Special Wishes 🎂
            </span>

            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              Happy Birthday <span className="text-blue-600">Arbaz</span> 🎉
            </h2>

            <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed">
              From the <strong>Modstack Solutions</strong> team —
              wishing you a day full of smiles, success, and unforgettable moments.
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mx-auto md:mx-0 inline-flex items-center justify-center gap-2 px-7 py-3 rounded-lg bg-blue-600 text-white font-semibold shadow-md hover:bg-blue-700 hover:shadow-lg transition-all"
            >
              🎁 Close
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
