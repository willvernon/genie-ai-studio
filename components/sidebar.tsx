'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Montserrat } from 'next/font/google'
import { usePathname } from 'next/navigation'

import { FreeCounter } from '@/components/free-counter'
import logo from '../../public/logo.png'
import { cn } from '@/lib/utils'
import {
	Code,
	ImageIcon,
	LayoutDashboard,
	Music,
	MessageSquare,
	Settings,
	VideoIcon,
} from 'lucide-react'

const montserrat = Montserrat({
	weight: '600',
	subsets: ['latin'],
})

const routes = [
	{
		label: 'Dashboard',
		icon: LayoutDashboard,
		href: '/dashboard',
		color: 'text-slate-400',
	},
	{
		label: 'Conversation',
		icon: MessageSquare,
		href: '/conversation',
		color: 'text-violet-400',
	},
	{
		label: 'Image Generation',
		icon: ImageIcon,
		href: '/image',
		color: 'text-pink-700',
	},
	{
		label: 'Video Generation',
		icon: VideoIcon,
		href: '/video',
		color: 'text-orange-400',
	},
	{
		label: 'Music Generation',
		icon: Music,
		href: '/music',
		color: 'text-emerald-400',
	},
	{
		label: 'Code Generation',
		icon: Code,
		href: '/code',
		color: 'text-sky-400',
	},
	{
		label: 'Settings',
		icon: Settings,
		href: '/settings',
	},
]

interface SidebarProps {
	apiLimitCount: number
}

const Sidebar = ({ apiLimitCount = 0 }: SidebarProps) => {
	const pathname = usePathname()
	return (
		<div className="space-y-4 py-4 flex flex-col h-full bg-slate-800 text-white">
			<div className="px-3 py-2 flex-1">
				<Link
					href="/dashboard"
					className="flex items-center pl-3 mb-14"
				>
					<div className="relative w-8 h-10 mr-4">
						<Image
							fill
							alt="Logo"
							src={logo}
						/>
					</div>
					<h1 className={cn('text-xl px-2 font-bold ', montserrat.className)}>
						Genie AI Studio
					</h1>
				</Link>
				<div className="space-y-1">
					{routes.map((route) => (
						<Link
							href={route.href}
							key={route.href}
							className={cn(
								'text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition',
								pathname === route.href
									? 'text-white bg-slate-200/10'
									: 'text-zinc-400 bg-transparent'
							)}
						>
							<div className="flex items-center space-x-3 px-3 py-2 rounded-md  cursor-pointer">
								<route.icon className={cn('w-5 h-5 mr-3', route.color)} />
								{route.label}
							</div>
						</Link>
					))}
				</div>
			</div>
			<FreeCounter 
				apiLimitCount={apiLimitCount}
			/>
		</div>
	)
}

export default Sidebar
