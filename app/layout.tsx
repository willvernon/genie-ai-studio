import './globals.css'

import clsx from 'clsx'
import type { Metadata } from 'next'
import localFont from 'next/font/local'
import { ClerkProvider } from '@clerk/nextjs'
import { Inter } from 'next/font/google'

import NavBar from '@/components/landing/NavBar'
import { ToasterProvider } from '@/components/toaster-provider'
import { ModalProvider } from '@/components/modal-provider'
import { CrispProvider } from '@/components/crisp-provider'

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
				className={clsx(
					'text-white bg-white  dark:text-white dark:bg-[#161616] ',
					graphik.variable
				)}
			>
				<CrispProvider />
				<body className="antialiased max-w-5xl mb-40 flex flex-col md:flex-row my-4">
					<ToasterProvider />

					<main className="flex-auto min-w-0  mt-6 flex flex-col px-2 md:px-0">
						<NavBar />
						<ModalProvider />
						{children}
					</main>
				</body>
			</html>
		</ClerkProvider>
	)
}
