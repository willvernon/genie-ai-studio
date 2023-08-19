'use client'

import { UserButton } from '@clerk/nextjs'
import clsx from 'clsx'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { LayoutGroup, motion } from 'framer-motion'
import { useAuth } from '@clerk/nextjs'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'

const navItems = {
  '/': {
    name: 'landing'
  },
  '/models': {
    name: 'models'
  },
  '/contact': {
    name: 'contact'
  }
}

export default function NewNavbar() {
  const { isSignedIn } = useAuth()
  let pathname = usePathname() || '/'
  // if (pathname.includes('/blog/')) {
  //   pathname = '/blog';
  // }

  return (
    <aside className="md:ml-[12px] md:mb-16 mb-8 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <LayoutGroup>
          <nav
            className="flex flex-row items-start relative px-0 pb-0 fade  md:relative"
            id="nav"
          >
            <div className="flex flex-row space-x-0 mx-auto my-4 text-neutral-700">
              {Object.entries(navItems).map(([path, { name }]) => {
                const isActive = path === pathname
                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx(
                      'transition-all  hover:text-[#6756ED] dark:hover:text-neutral-200 flex align-middle',
                      {
                        'text-neutral-500': !isActive
                      }
                    )}
                  >
                    <span className="relative py-1 px-2 md:text-xl text-bold">
                      {name}
                      {path === pathname ? (
                        <motion.div
                          className="absolute h-[1px] top-7 mx-2 inset-0 bg-neutral-800 dark:bg-neutral-300 z-[-1] dark:bg-gradient-to-r from-transparent to-neutral-900"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 350,
                            damping: 30
                          }}
                        />
                      ) : null}
                    </span>
                  </Link>
                )
              })}
              <div className="pl-4 ">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </nav>
        </LayoutGroup>
      </div>
    </aside>
  )
}
