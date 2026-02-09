import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Image from "next/image"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Modstack Solutions - IT & Software Services",
  description:
    "Complete IT and software solutions delivering reliable, modern, and scalable digital solutions. Web development, mobile apps, cloud solutions, and IT consulting.",
  generator: "v0.app",
  keywords: [
    "IT services",
    "software development",
    "web development",
    "mobile apps",
    "cloud solutions",
    "IT consulting",
  ],
  icons: {
    icon: [
      {
        url: "/icon-light-32x32.png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/icon-dark-32x32.png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/icon_modss.svg",
        type: "image/svg+xml",
      },
    ],
    apple: "/apple-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={_geist.className}>

        {children}

        {/* Floating Social Buttons */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">

          {/* WhatsApp */}
          <a
            href="https://wa.me/919702571015"
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 rounded-full bg-white shadow-lg hover:scale-105 transition-all"
            aria-label="Chat on WhatsApp"
          >
            <Image
              src="/whatapp_icon.png"
              alt="WhatsApp"
              fill
              className="object-contain p-0"
            />
          </a>

          {/* Instagram */}
          {/* <a
            href="https://www.instagram.com/slaywith.clawdia?igsh=MTl4M3BvNGpsemVycA=="
            target="_blank"
            rel="noopener noreferrer"
            className="relative w-14 h-14 rounded-full bg-white shadow-lg hover:scale-105 transition-all"
            aria-label="Visit Instagram"
          >
            <Image
              src="/instagram_icon.png"
              alt="Instagram"
              fill
              className="object-contain p-3"
            />
          </a> */}
        </div>

        <Analytics />
      </body>
    </html>
  )
}