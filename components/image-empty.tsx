import Image from 'next/image'
import React from 'react'
interface EmptyProps {
	label: string
}

export const Empty = ({ label }: EmptyProps) => {
	return (
		<div className="h-full p-20 flex flex-col items-center justify-center">
			<div className="relative ">
				<Image
					width={250}
					height={250}
					alt="empty"
					src="/astro.png"
					quality={100}
				/>
			</div>
			<p className=" mt-8 text-muted-foreground text-sm text-center">{label}</p>
		</div>
	)
}
