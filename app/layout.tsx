import './globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import NavBar from '@/components/landing/NavBar'
import { ToasterProvider } from '@/components/toaster-provider'
import { ModalProvider } from '@/components/modal-provider'
import { CrispProvider } from '@/components/crisp-provider'
import './globals.css'
import { Orbitron } from 'next/font/google'

const graphik = localFont({
  src: [
    {
      path: '../public/fonts/Graphik-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/Graphik-Medium.ttf',
      weight: '600',
      style: 'bold'
    }
  ],
  variable: '--font-graphik',
  display: 'swap'
})

const orbitron = Orbitron({
	subsets: ['latin'],
  variable: '--font-orbitron'
})

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Genie AI',
  description: 'AI Platform'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
        className={`${orbitron.variable}`}
      >
        {/* <CrispProvider /> */}
        <body className={clsx('text-white bg-white', graphik.variable)}>
          <ToasterProvider />
          <ModalProvider />
          {children}
        </body>
        <Analytics />
      </html>
    </ClerkProvider>
  )
}
