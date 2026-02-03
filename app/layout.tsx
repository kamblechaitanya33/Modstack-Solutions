import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
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
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {children}

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-transform"
          />
        </a>

        <Analytics />
      </body>
    </html>
  )
}

