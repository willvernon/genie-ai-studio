import Image from 'next/image'
import React from 'react'
import gfpgan from '@/public/models/gfpgan.png'
import musicgen from '@/public/models/musicgen.png'
import esrgan from '@/public/models/real-esrgan.png'
import sdxl from '@/public/models/sdxl.png'
import Footer from '@/components/landing/footer'
import Navbar from '@/components/landing/NavBar'

function ModelsPage() {
  return (
    <>
      <Navbar />
      <div className="grid-cols-1 text-center">
        <h4 className="text-4xl text-center mb-2 font-bold tracking-relaxed text-black">
          Models
        </h4>
        <span className="text-xs font-bold text-black  tracking-relaxed ">
          A few of the AI functions are using Chat GPT 3.5 Turbo,
          <br /> The Rest are the models below and adding new models asap.
        </span>
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
      <Footer />
    </>
  )
}

export default ModelsPage
