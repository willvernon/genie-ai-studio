import Image from 'next/image'
import React from 'react'
import gfpgan from '@/public/models/gfpgan.png'
import musicgen from '@/public/models/musicgen.png'
import esrgan from '@/public/models/real-esrgan.png'
import sdxl from '@/public/models/sdxl.png'
import Footer from '@/components/landing/footer'

function Models() {
	return (
		<>
			<div className="grid-cols-1 mt-24 text-black large:text-white">
				<h4 className="text-4xl font-bold text-center mb-2">Models</h4>
				<h4 className="text-xs font-bold text-center">
					A few of the AI functions are using Chat GPT 3.5 Turbo,
					The Rest are the models below and adding new models asap.
				</h4>
        
				<div className="flex flex-wrap mx-auto">
					<Image
						alt="unicorn"
						width={450}
						src={gfpgan}
						className="rounded-xl my-2 mx-auto"
					/>
					<Image
						alt="unicorn"
						width={450}
						src={musicgen}
						className="rounded-xl my-2 mx-auto"
					/>
				</div>
				<div className="flex flex-wrap mx-auto">
					<Image
						alt="unicorn"
						width={450}
						src={esrgan}
						className="rounded-xl my-2 mx-auto"
					/>
					<Image
						alt="unicorn"
						width={450}
						src={sdxl}
						className="rounded-xl my-2 mx-auto"
					/>
				</div>
			</div>
      
		</>
	)
}

export default Models
