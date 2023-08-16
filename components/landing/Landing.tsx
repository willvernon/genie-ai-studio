'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

import { Button } from '../ui/button'
import glassApp from '../../public/landing/glass-app.png'
import glassAnd from '../../public/landing/glass-and.png'
import glassDev from '../../public/landing/glass-dev.png'
import glassWeb from '../../public/landing/glass-website.png'

function Landing() {
	return (
		<>
			<div className="max-w-5xl w-full mt-12 grid grid-cols-3">
				<div className="col-span-2 my-auto">
					<span className=" dark:text-white text-[#232323] text-8xl w-full  font-black">
						Genie
					</span>
					<br />
					<span className="dark:text-white text-[#232323] text-8xl w-full  font-black">
						AI Studio
					</span>
					<div className="ml-24 mt-12">
						<h4 className="ml-14 mb-2">Try for Free</h4>
						<Link
							href="/sign-in"
							className="m-2 "
						>
							<Button
								size={'lg'}
								variant={'landing'}
							>
								Login
							</Button>
						</Link>
						<Link
							href="/sign-up"
							className="m-2"
						>
							<Button
								size={'lg'}
								variant={'landing'}
							>
								Sign Up
							</Button>
						</Link>
					</div>
				</div>
				<div className=" mx-auto ">
					<div className="w-full mx-12 my-2">
						<span className="font-bold text-lg">Our Current AI Tools</span>
					</div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						className="m-2 shadow-lg shadow-[#aeaeae] rounded-xl"
					>
						<Link href="/image">
							<div className="w-full h-12 rounded-xl text-white bg-[#232323] border-l-4  border-slate-400 hover:border-[#6756ED] hover:border-y-[1px] ">
								<h4 className="text-center py-2 tracking-wide font-bold text-violet-400">
									Conversation
								</h4>
							</div>
						</Link>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						className="m-2 shadow-lg shadow-[#aeaeae] rounded-xl"
					>
						<Link href="/image">
							<div className="w-full h-12 rounded-xl text-white bg-[#232323] border-l-4  border-slate-400 hover:border-[#6756ED] hover:border-y-[1px] ">
								<h4 className="text-center py-2 tracking-wide font-bold text-pink-500">
									Image Generation
								</h4>
							</div>
						</Link>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						className="m-2 shadow-lg shadow-[#aeaeae] rounded-xl"
					>
						<Link href="/image">
							<div className="w-full h-12 rounded-xl text-white bg-[#232323] border-l-4  border-slate-400 hover:border-[#6756ED] hover:border-y-[1px] ">
								<h4 className="text-center py-2 tracking-wide font-bold text-red-400">
									Video Generation
								</h4>
							</div>
						</Link>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						className="m-2 shadow-lg shadow-[#aeaeae] rounded-xl"
					>
						<Link href="/image">
							<div className="w-full h-12 rounded-xl text-white bg-[#232323] border-l-4  border-slate-400 hover:border-[#6756ED] hover:border-y-[1px] ">
								<h4 className="text-center py-2 tracking-wide font-bold text-purple-500">
									Audio Generation
								</h4>
							</div>
						</Link>
					</motion.div>
					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						className="m-2 shadow-lg shadow-[#aeaeae] rounded-xl"
					>
						<Link href="/image">
							<div className="w-full h-12 rounded-xl text-white bg-[#232323] border-l-4  border-slate-400 hover:border-[#6756ED] hover:border-y-[1px] ">
								<h4 className="text-center py-2 tracking-wide font-bold text-emerald-400">
									Image Restoration
								</h4>
							</div>
						</Link>
					</motion.div>

					<motion.div
						whileHover={{ scale: 1.05 }}
						whileTap={{ scale: 0.9 }}
						transition={{ type: 'spring', stiffness: 400, damping: 10 }}
						className="m-2 shadow-lg shadow-[#aeaeae] rounded-xl"
					>
						<Link href="/image">
							<div className="w-full h-12 rounded-xl text-white bg-[#232323] border-l-4  border-slate-400 hover:border-[#6756ED] hover:border-y-[1px] ">
								<h4 className="text-center py-2 tracking-wide font-bold text-sky-400">
									Code Interpretation
								</h4>
							</div>
						</Link>
					</motion.div>
				</div>
			</div>
		</>
	)
}

export default Landing
