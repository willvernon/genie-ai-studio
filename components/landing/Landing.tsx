'use client'
import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useAuth } from '@clerk/nextjs'

import { Button } from '../ui/button'

function LandingHero() {
  const { isSignedIn } = useAuth()
  return (
    <>
      <div className="max-w-5xl w-full mx-auto -mt-24 md:mt-24 grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-wrap  my-20 md:ml-6 ml-4">
          <span className=" dark:text-white text-[#161616] text-7xl  md:text-6xl lg:text-8xl w-full  font-black">
            Genie
          </span>
          <br />
          <span className="dark:text-white text-[#161616] text-7xl  md:text-6xl lg:text-8xl  w-full  font-black">
            AI Studio
          </span>
          <div className="">
            <Link href={isSignedIn ? '/dashboard' : '/sign-up'}>
              <Button
                variant="upgrade"
                className="md:text-lg p-4 md:p-6 rounded-full font-semibold"
              >
                Try it For Free
              </Button>
            </Link>
          </div>
        </div>
        <div className=" mx-auto md:mt-0">
          <div className="w-full mx-10 my-2">
            <span className="font-bold text-lg dark:text-white text-[#161616]">
              Our Current AI Tools
            </span>
          </div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
            className="m-2 shadow-lg shadow-[#aeaeae] rounded-xl"
          >
            <Link href="/image">
              <div className="w-full h-12 rounded-xl text-white bg-[#232323] border-l-4  border-slate-400 hover:border-[#6756ED] hover:border-y-[1px] ">
                <h4 className="text-center pt-[14px] tracking-wide font-bold text-violet-400 text-base">
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
                <h4 className="text-center pt-[14px] tracking-wide font-bold text-pink-500 text-base">
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
                <h4 className="text-center pt-[14px] tracking-wide font-bold text-red-400 text-base">
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
                <h4 className="text-center pt-[14px] tracking-wide font-bold text-purple-500 text-base">
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
                <h4 className="text-center  pt-[14px] tracking-wide font-bold text-emerald-400 text-base">
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
                <h4 className="text-center pt-[12px] tracking-wide font-bold text-sky-400 text-sm md:text-lg">
                  Code Interpretor
                </h4>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default LandingHero
