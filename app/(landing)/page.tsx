import Landing from '@/components/landing/Landing'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import unicorn from '@/public/landing/unicorn.png'
import restore from '@/public/landing/restore.jpg'
import clear from '@/public/landing/clear.jpg'
import audio from '@/public/landing/audio.png'
import cat from '@/public/landing/cat.png'
import Footer from '@/components/landing/footer'

const LandingPage = () => {
	return (
		<section>
			<Landing />
			<section className="mt-20">
				<h3 className="my-12 mx-auto">Genie AI Studio</h3>
				<div className="columns-2 sm:columns-3 gap-4 my-8 mb-36">
					<div className="relative h-40 mb-4 border border-transparent ">
						<Image
							alt="unicorn"
							width={500}
							src={unicorn}
							className="rounded-xl my-2"
						/>
					</div>
					<div className="relative h-80 mb-4 sm:mb-0 border border-transparent">
						<Image
							alt="unicorn"
							width={500}
							src={clear}
							className="rounded-xl my-4"
						/>
					</div>
					<div className="relative h-40 sm:h-80 sm:mb-4 border border-transparent">
						<Image
							alt="unicorn"
							width={500}
							src={audio}
							className="rounded-xl mt-16"
						/>
					</div>
					<div className="relative h-40 mb-4 sm:mb-0 border border-transparent"></div>
					<div className="relative h-40 mb-4 border border-transparent">
						<Image
							alt="unicorn"
							width={500}
							src={restore}
							className="rounded-xl my-2 mt-10"
						/>
					</div>
					<div className="relative h-80 border border-transparent">
						<Image
							alt="unicorn"
							width={500}
							src={cat}
							className="rounded-xl mt-32"
						/>
					</div>
				</div>
				<div className="prose prose-neutral dark:prose-invert border border-transparent text-center ">
					<p>
						Genie AI Studio brings the newest features of AI assistance to you with Genie AI Studio
						<br />
						<p className='mx-4'>your all-in-one personal assistant for AI tools and resources.
						Explore all kinds of new Intelligent capabilities:</p>
					</p>
					
				</div>
				<Footer />
			</section>
		</section>
	)
}

export default LandingPage
