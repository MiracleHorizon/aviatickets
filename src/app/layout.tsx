import { PropsWithChildren } from 'react'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600']
})

export const metadata: Metadata = {
  title: 'Aviatickets',
  description: 'Application for searching and purchasing air tickets'
}

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
