// "use client"

// import Link from "next/link"
// import { useState } from "react"

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-[#e5e7eb] bg-white">
//       <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-16 items-center justify-between">
//           {/* Logo */}
//         <Link href="/" className="flex items-center gap-2 font-bold text-xl text-slate-900">
//   <img
//     src="/modstack_horizontal.png"
//     alt="Modstack Solutions Logo"
//   className="w-[180px] h-[180px] object-contain"  />
// </Link>


//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-8">
//             <Link href="/" className="text-[#374151] hover:text-[#0f172a] transition">
//               Home
//             </Link>
//             <Link href="/services" className="text-[#374151] hover:text-[#0f172a] transition">
//               Services
//             </Link>
//             <Link href="/about" className="text-[#374151] hover:text-[#0f172a] transition">
//               About
//             </Link>
//             <Link href="/portfolio" className="text-[#374151] hover:text-[#0f172a] transition">
//               Portfolio
//             </Link>
//             <Link href="/blog" className="text-[#374151] hover:text-[#0f172a] transition">
//               Blog
//             </Link>
//             <Link
//               href="/contact"
//               className="px-4 py-2 bg-[#3b82f6] text-white rounded-lg hover:bg-[#1e40af] transition"
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden pb-4 space-y-2">
//             <Link href="/" className="block px-3 py-2 text-[#374151] hover:bg-[#f3f4f6] rounded">
//               Home
//             </Link>
//             <Link href="/services" className="block px-3 py-2 text-[#374151] hover:bg-[#f3f4f6] rounded">
//               Services
//             </Link>
//             <Link href="/about" className="block px-3 py-2 text-[#374151] hover:bg-[#f3f4f6] rounded">
//               About
//             </Link>
//             <Link href="/portfolio" className="block px-3 py-2 text-[#374151] hover:bg-[#f3f4f6] rounded">
//               Portfolio
//             </Link>
//             <Link href="/blog" className="block px-3 py-2 text-[#374151] hover:bg-[#f3f4f6] rounded">
//               Blog
//             </Link>
//             <Link href="/contact" className="block px-3 py-2 bg-[#3b82f6] text-white rounded">
//               Contact Us
//             </Link>
//           </div>
//         )}
//       </nav>
//     </header>
//   )
// }



// "use client"

// import Link from "next/link"
// import Image from "next/image"
// import { useState } from "react"

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "Services", href: "/services" },
//   { name: "About", href: "/about" },
//   { name: "Portfolio", href: "/portfolio" },
//   { name: "Blog", href: "/blog" },
//   { name: "Contact", href: "/contact" },
// ]

// export function Header() {
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

//   return (
//     <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
//       <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
//         <div className="flex h-12 items-center justify-between">

//           {/* Logo */}
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/modstack_horizontal.png"
//               alt="Modstack Solutions Logo"
//               width={120}
//               height={40}
//               priority
//               className="object-contain"
//             />
//           </Link>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center gap-10 text-sm font-medium">
//             {navItems.slice(0, 5).map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="text-neutral-700 hover:text-black transition duration-200"
//               >
//                 {item.name}
//               </Link>
//             ))}
//             <Link
//               href="/contact"
//               className="ml-4 text-neutral-700 hover:text-black transition"
//             >
//               Contact
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="md:hidden text-neutral-800"
//             onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={1.5}
//                 d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"}
//               />
//             </svg>
//           </button>
//         </div>

//         {/* Mobile Menu */}
//         {mobileMenuOpen && (
//           <div className="md:hidden mt-2 rounded-xl bg-white shadow-lg border border-neutral-200 overflow-hidden">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 href={item.href}
//                 className="block px-4 py-3 text-neutral-700 hover:bg-neutral-100 transition"
//                 onClick={() => setMobileMenuOpen(false)}
//               >
//                 {item.name}
//               </Link>
//             ))}
//           </div>
//         )}
//       </nav>
//     </header>
//   )
// }

"use client"

import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Blog", href: "/blog" },
  { name: "About Us", href: "/about" },
  { name: "Contact Us", href: "/contact" },
]

const BRAND_BLUE = "#2563eb"
const UNDERLINE_HEIGHT = "3px"

export function Header() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [underlineStyle, setUnderlineStyle] = useState({ left: 0, width: 0 })

  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const activeIndex = navItems.findIndex(i => i.href === pathname)
    const container = containerRef.current
    if (!container || activeIndex === -1) return

    const activeEl = container.children[activeIndex] as HTMLElement
    if (!activeEl) return

    setUnderlineStyle({
      left: activeEl.offsetLeft,
      width: activeEl.offsetWidth,
    })
  }, [pathname])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/80 backdrop-blur-md">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-12 items-center justify-between">

          {/* Logo */}
             <Link href="/" className="flex items-center">
        <Image
          src="/modstackbg.png"
          alt="Modstack Solutions Logo"
          width={140}
          height={60}
          priority
          className="h-25 w-auto object-contain"
        />
      </Link>

          {/* Desktop Menu */}
          <div className="relative hidden md:flex items-center gap-10 text-sm font-medium" ref={containerRef}>
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                className="relative py-2 text-neutral-700 hover:text-black transition"
              >
                {item.name}
              </Link>
            ))}

            {/* Sliding underline */}
            <span
              className="absolute bottom-0 transition-all duration-300 ease-in-out"
              style={{
                left: underlineStyle.left,
                width: underlineStyle.width,
                height: UNDERLINE_HEIGHT,
                backgroundColor: BRAND_BLUE,
                borderRadius: 999,
              }}
            />
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
        >
          <div className="mt-2 rounded-xl bg-white shadow-lg border border-neutral-200">
            {navItems.map(item => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 transition ${pathname === item.href
                  ? "text-blue-600 font-medium bg-blue-50"
                  : "text-neutral-700 hover:bg-neutral-100"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </header>
  )
}