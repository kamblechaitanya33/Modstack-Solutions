import Link from "next/link"

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
            cloud infrastructure and IT consulting.
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
