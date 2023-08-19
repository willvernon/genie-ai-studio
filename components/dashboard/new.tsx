'use client'

import { ArrowRight } from 'lucide-react'
import { useRouter } from 'next/navigation'

import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import GlowBar from '@/components/dashboard/glowbar'

import { tools } from '@/constants'

export default function HomePage() {
  const router = useRouter()

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h4 className="text-2xl text-slate-700 md:text-4xl font-bold text-center">
          Explore the power of AI
        </h4>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          Chat with the smartest AI - Experience the power of AI
        </p>
      </div>
      <div className="px-2 md:px-20 lg:px-32 space-y-4 ">
        {tools.map(tool => (
          <Card
            onClick={() => router.push(tool.href)}
            key={tool.href}
            className="p-4 bg-white rounded-lg flex items-center justify-between "
          >
            <div className="flex items-center gap-x-4">
              <div className={cn('p-2 w-fit rounded-md', tool.bgColor)}>
                <tool.icon className={cn('w-8 h-8', tool.color)} />
              </div>
              <div className="font-semibold">{tool.label}</div>
            </div>
            <ArrowRight className="w-5 h-5" />
          </Card>
        ))}
      </div>

      <div className="bg-gray-50 w-full -mt-44 flex items-center justify-center px-16">
        <div className="relative w-full max-w-xl">
          <div className="hidden md:block absolute top-0 -left-4 w-72 h-72 bg-orange-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate[pulse_1s_ease-in-out_infinite] "></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 -left-24 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="absolute -bottom-8 right-4 w-72 h-72 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse animation-delay-8000"></div>
          <div className="absolute -bottom-8 -right-6 w-72 h-72 bg-sky-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
          <div className="hidden md:block absolute -bottom-8 -right-6 w-72 h-72 bg-sky-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-8000"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70  animation-delay-8000 animate-blob"></div>

          {/* <div className="m-8 relative space-y-4">
            <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
              <div className="flex-1">
                <div className="h-4 w-48 bg-gray-300 rounded">Conversation</div>
              </div>
              <div>
                <div className="w-24 h-6 rounded-lg bg-purple-300">test1-2</div>
              </div>
            </div>
            <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
              <div className="flex-1">
                <div className="h-4 w-56 bg-gray-300 rounded">test2-1</div>
              </div>
              <div>
                <div className="w-20 h-6 rounded-lg bg-yellow-300">test2-2</div>
              </div>
            </div>
            <div className="p-5 bg-white rounded-lg flex items-center justify-between space-x-8">
              <div className="flex-1">
                <div className="h-4 w-44 bg-gray-300 rounded">test3-1</div>
              </div>
              <div>
                <div className="w-28 h-6 rounded-lg bg-pink-300">test3-2</div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  )
}
