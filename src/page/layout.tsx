import React from "react"
import "./globals.css"

type Props = {
  children: React.ReactNode
}

export default function RootLayout({ children }: Props) {
  // Converted from a Next.js root layout to a plain React layout component.
  // If you need HTML-level tags like <html> or <body>, add them in your
  // index.html or the top-level app entry for your React app.
  return <div className={`font-sans antialiased`}>{children}</div>
}
