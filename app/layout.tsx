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

const graphik = localFont({
	src: [
		{
			path: '../public/fonts/Graphik-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: '../public/fonts/Graphik-Medium.ttf',
			weight: '600',
			style: 'bold',
		},
	],
	variable: '--font-graphik',
	display: 'swap',
})

const orbitron = localFont({
  src: [
    {
      path: '../public/fonts/Orbitron-Regular.ttf',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/Orbitron-bold.ttf',
      weight: '600',
      style: 'bold'
    },
		{
      path: '../public/fonts/Orbitron-black.ttf',
      weight: '900',
      style: 'black'
    }
  ],
  variable: '--font-orbitron',
  display: 'swap'
})

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
	title: 'Genie AI',
	description: 'AI Platform',
}


export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
    <ClerkProvider>
      <html
        lang="en"
        suppressHydrationWarning
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
