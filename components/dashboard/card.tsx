'use client'
import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

import Link from 'next/link'
import React from 'react'
import { tools } from '@/constants'
import { cn } from '@/lib/utils'

function NewCard() {
  const router = useRouter()
  return (
    <div className=" w-full  z-10 flex items-center justify-center px-16">
      <div className="relative w-full max-w-xl">
        <div className="hidden md:block absolute top-0 -left-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animation-delay-1000 animate-blob "></div>
        <div className="absolute top-0 -right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-1000"></div>
        <div className="hidden md:block absolute -bottom-8 -left-24 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-lg opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 right-4 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-2000"></div>
        <div className="absolute -bottom-8 -right-6 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="hidden md:block absolute -bottom-8 -right-6 w-72 h-72 bg-sky-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-1000"></div>
        {/* <div className="absolute top-0 -right-4 w-72 h-72 bg-green-100 rounded-full mix-blend-multiply filter blur-2xl opacity-70  animation-delay-8000 animate-blob"></div> */}
      </div>
    </div>
  )
}

export default NewCard
