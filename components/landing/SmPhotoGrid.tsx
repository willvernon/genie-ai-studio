'use client'
import React from 'react'
import Image from 'next/image'
import unicorn from '@/public/landing/unicorn.png'
import restore from '@/public/landing/restore.jpg'
import clear from '@/public/landing/clear.jpg'
import audio from '@/public/landing/audio.png'
import cat from '@/public/landing/cat.png'

export default function SmPhotoGrid() {
  return (
    <section className="mt-20">
      <h4 className="mt-12 mb-4 mx-auto text-center text-xl font-bold tracking-relaxed text-black">
        Examples
      </h4>
      <div className="prose prose-neutral dark:prose-invert border border-transparent text-center text-black mb-6 mx-8">
        <p>
          Genie AI Studio brings the newest features of AI assistance to you
          with Genie AI Studio your all-in-one personal assistant for AI tools
          and resources. Explore all kinds of new Intelligent capabilities:
        </p>
      </div>
      <div className=" flex flex-wrap mx-20 gap-12">
        <div className="">
          <Image
            alt="unicorn"
            width={700}
            src={unicorn}
            className="rounded-xl "
            quality={100}
          />
        </div>
        <div className="">
          <Image
            alt="unicorn"
            width={700}
            src={clear}
            className="rounded-xl "
            quality={100}
          />
        </div>
        {/* <div className="">
          <Image
            alt="unicorn"
            width={700}
            src={audio}
            className="rounded-xl"
            quality={100}
          />
        </div> */}
        <div className="">
          <Image
            alt="unicorn"
            width={700}
            src={restore}
            className="rounded-xl "
            quality={100}
          />
        </div>
        <div className="">
          <Image
            alt="unicorn"
            width={700}
            src={cat}
            className="rounded-xl "
            quality={100}
          />
        </div>
      </div>
    </section>
  )
}
