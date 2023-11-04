import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'


export const metadata: Metadata = {
  title: {
    default: 'A-corporate',
    template: '%s | A-corporate',
  },
  description: 'Demonstration for Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <head>
      <script src="https://www.google.com/recaptcha/api.js?render=6LfVUuYoAAAAAIIKAsdo-LnK3N1X4ZOFas6Fav-1" async defer></script>
      </head>
      <body>{children}</body>
    </html>
  )
}
