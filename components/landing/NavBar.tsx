'use client';


import { UserButton } from '@clerk/nextjs';
import clsx from 'clsx';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { LayoutGroup, motion } from 'framer-motion';

const navItems = {
  '/': {
    name: 'home',
  },
  '/models': {
    name: 'models',
  },
  '/contact': {
    name: 'contact',
  },
};

export default function Navbar() {
  let pathname = usePathname() || '/';
  // if (pathname.includes('/blog/')) {
  //   pathname = '/blog';
  // }

  return (
		<aside className="-ml-[8px] mb-16 tracking-tight">
			<div className="lg:sticky lg:top-20">
				<LayoutGroup>
					<nav
						className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto md:relative"
						id="nav"
					>
						<div className="flex flex-row space-x-0 pr-10 my-4">
							{Object.entries(navItems).map(([path, { name }]) => {
								const isActive = path === pathname
								return (
									<Link
										key={path}
										href={path}
										className={clsx(
											'transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle',
											{
												'text-neutral-500': !isActive,
											}
										)}
									>
										<span className="relative py-1 px-2">
											{name}
											{path === pathname ? (
												<motion.div
													className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-800 dark:bg-neutral-300 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
													layoutId="sidebar"
													transition={{
														type: 'spring',
														stiffness: 350,
														damping: 30,
													}}
												/>
											) : null}
										</span>
									</Link>
								)
							})}
						</div>
						<div className=" lg:absolute lg:right-0 space-x-0 lg:px-10 mt-4">
							<UserButton afterSignOutUrl="/" />
						</div>
					</nav>
				</LayoutGroup>
			</div>
		</aside>
  )
}
