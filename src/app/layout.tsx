import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'iPhone 17 Simulator - iOS 26.1',
  description: 'Simulation d\'un iPhone 17 avec iOS 26.1',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex items-center justify-center p-4">
        {children}
      </body>
    </html>
  )
}
