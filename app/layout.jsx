import "./globals.css"
import "./portfolio.css"

export const metadata = {
  title: "Raja Kumar | Web Developer",
  description:
    "A passionate web developer crafting modern, responsive user interfaces. Building innovative solutions and creating seamless digital experiences.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Favicon from public folder */}
        <link rel="icon" href="/mypp.png" type="image/png" />

        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>{children}</body>
    </html>
  )
}
