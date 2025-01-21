import { ThemeProvider } from "../components/theme-provider"
import { Stars } from "../components/stars"
import Header from "../components/header"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: {
    default: "Discord Justice",
    template: "%s | Discord Justice",
  },
  description: "Protecting Discord communities and fighting scammers with the power of justice!",
  icons: {
    icon: "https://github.com/hyuuuka/discord-justice-branding/blob/main/Enhanced-Logo-Transparent.png?raw=true",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <ThemeProvider defaultTheme="dark">
          <div className="bg-gradient min-h-screen">
            <Stars />
            <Header />
            <div className="pt-20">{children}</div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

