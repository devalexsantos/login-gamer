import './globals.css'
import type { Metadata } from 'next'
import { Play } from 'next/font/google'

const play = Play({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Login Gamer - Login Informática',
  description: 'Um mundo Gamer para você aproveitar.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className="scroll-smooth">
      <body className={play.className}>{children}</body>
    </html>
  )
}
