import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"] })
const geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata = {
  title: "Raja Kumar - Web Developer & Tech Enthusiast",
  description:
    "Advanced portfolio with 3D animations, modern design, and Firebase integration. Showcasing projects, skills, and achievements.",
  keywords: "web developer, portfolio, React, Next.js, Firebase, 3D animations",
  authors: [{ name: "Raja Kumar" }],
  openGraph: {
    title: "Raja Kumar - Web Developer",
    description: "Advanced portfolio with 3D animations and modern design",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Raja Kumar - Web Developer",
    description: "Advanced portfolio with 3D animations and modern design",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00d4ff" />
      </head>
      <body className={`${geistSans.className} ${geistMono.className}`}>{children}</body>
    </html>
  )
}
