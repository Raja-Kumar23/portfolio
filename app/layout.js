import { Inter, Poppins, Space_Grotesk } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
})
const spaceGrotesk = Space_Grotesk({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
})

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
    <html lang="en" className={`${inter.variable} ${poppins.variable} ${spaceGrotesk.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#00d4ff" />
      </head>
      <body>{children}</body>
    </html>
  )
}
