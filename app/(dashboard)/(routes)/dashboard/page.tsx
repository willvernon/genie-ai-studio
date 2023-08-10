'use client'

import { Card } from '@/components/ui/card'
import { ArrowRight, MessageSquare } from 'lucide-react'
import { cn } from '@/lib/utils'

const tools = [
	{
		label: 'Conversation',
		icon: MessageSquare,
		color: 'text-violet-400',
		bgColor: 'bg-violet-400/10',
		href: '/conversation',
	},
]

const DashboardPage = () => {
	return (
		<div>
			<div className="mb-8 space-y-4">
				<h2 className="text-2xl md:text-4xl font-bold text-center">
					Explore the power of AI
				</h2>
				<p className="text-muted-foreground font-light text-sm md:text-lg text-center">
					Chat with the smartest AI in the world. Ask it to generate music,
					code, or even video
				</p>
			</div>
			<div className="px-4 md:px-20 lg:px-32 space-y-4">
				{tools.map((tool) => (
					<Card
						key={tool.href}
						className="p-4 border-black/5 flex items-center justify-between hover:shadow-md transition cursor-pointer"
					>
						<div className="flex items-center gap-x-4">
							<div className={cn('w-fit rounded-md p-2', tool.bgColor)}>
								<tool.icon className={cn('w-8 h-8', tool.color)} />
							</div>
							<div className="font-semibold">{tool.label}</div>
						</div>
						<ArrowRight />
					</Card>
				))}
			</div>
		</div>
	)
}
export default DashboardPage
