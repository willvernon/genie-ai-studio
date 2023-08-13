import Image from 'next/image'
import React from 'react'
interface EmptyProps {
	label: string
}

export const VideoEmpty = ({ label }: EmptyProps) => {
	return (
		<div className="h-full p-20 flex flex-col items-center justify-center">
			<div className="relative ">
				<Image
					width={550}
					height={550}
					alt="empty"
					src="/video.png"
					quality={100}
				/>
			</div>
			<p className="text-muted-foreground text-sm text-center">{label}</p>
		</div>
	)
}
