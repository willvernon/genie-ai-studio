import React from 'react'
import { Separator } from '../ui/separator'
import {
  ApertureIcon,
  Code2Icon,
  ImageIcon,
  LayoutDashboardIcon,
  MessageSquareIcon,
  Music2Icon,
  Music3Icon,
  MusicIcon,
  VideoIcon,
  WandIcon
} from 'lucide-react'
import Link from 'next/link'

function glowbar() {
  return (
    <nav className="fixed bottom-0 w-full bg-transparent text-white py-4">
      <div className="grid items-start justify-center">
        <div className="relative">
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-pink-600 rounded-3xl blur-xl opacity-70 "></div>

          <div className="relative px-3 py-4 md:px-7  bg-white rounded-lg leading-none flex items-center space-x-2.5 md:space-x-5">
            <Link href="/conversation">
              <MessageSquareIcon className="w-6 h-6 md:w-8 md:h-8  text-slate-500 group-hover:text-white transition duration-200" />
            </Link>
            <Separator className="w-px h-6  bg-slate-300 opacity-25" />
            <Link href="/music">
              <MusicIcon className="w-6 h-6 md:w-8 md:h-8  text-slate-500 group-hover:text-white transition duration-200" />
            </Link>
            <Separator className="w-px h-6  bg-slate-300 opacity-25" />
            <Link href="/image">
              <ImageIcon className="w-6 h-6 md:w-8 md:h-8  text-slate-500 group-hover:text-white transition duration-200" />
            </Link>
            <Separator className="w-px h-6 bg-slate-300 opacity-25" />
            <Link href="/dashboard">
              <div className="w-16 h-12 md:w-20 md:h-16 bg-white rounded-full -mt-12 md:-mt-16">
                <LayoutDashboardIcon className="w-10 h-10 mt-[10px] pt-2 md:w-14 md:h-14 md:mt-0 text-slate-500 mx-auto text-center  " />
                <h4 className="text-[10px] md:text-sm text-center  text-slate-500 mt-1.5 md:mt-2">
                  dashboard
                </h4>
              </div>
            </Link>
            <Separator className="w-px h-6 bg-slate-300 opacity-25" />
            <Link href="/clear">
              <WandIcon className="w-6 h-6 md:w-8 md:h-8  text-slate-500 group-hover:text-white transition duration-200" />
            </Link>
            <Separator className="w-px h-6 bg-slate-300 opacity-25" />
            <Link href="/video">
              <VideoIcon className="w-6 h-6 md:w-8 md:h-8  text-slate-500 group-hover:text-white transition duration-200" />
            </Link>
            <Separator className="w-px h-6 bg-slate-300 opacity-25" />
            <Link href="/code">
              <Code2Icon className="w-6 h-6 md:w-8 md:h-8  text-slate-500 group-hover:text-white transition duration-200" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default glowbar
