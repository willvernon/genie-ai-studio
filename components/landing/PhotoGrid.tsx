'use client'
import React from 'react'
import Image from 'next/image'
import unicorn from '@/public/landing/unicorn.png'
import restore from '@/public/landing/restore.jpg'
import clear from '@/public/landing/clear.jpg'
import audio from '@/public/landing/audio.png'
import cat from '@/public/landing/cat.png'

export default function PhotoGrid() {
  return (
    <section className="mt-20">
      <h3 className="my-12 mx-auto">Genie AI Studio</h3>
      <div className=" columns-3 gap-4 my-8 md:mb-20">
        <div className="relative h-40 mb-0 md:mb-4 border border-transparent ">
          <Image
            alt="unicorn"
            width={500}
            src={unicorn}
            className="rounded-xl my-2"
          />
        </div>
        <div className="relative h-80 md:mb-4 sm:mb-0 border border-transparent">
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
          Genie AI Studio brings the newest features of AI assistance to you
          with Genie AI Studio
          <br />
          your all-in-one personal assistant for AI tools and resources. Explore
          all kinds of new Intelligent capabilities:
        </p>
      </div>
    </section>
  )
}
