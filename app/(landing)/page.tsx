import Landing from '@/components/landing/Landing'
import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import unicorn from '@/public/landing/unicorn.png'
import restore from '@/public/landing/restore.jpg'
import clear from '@/public/landing/clear.jpg'
import audio from '@/public/landing/audio.png'
import cat from '@/public/landing/cat.png'
import Footer from '@/components/landing/footer'
import Navbar from '@/components/landing/NavBar'
import PhotoGrid from '@/components/landing/PhotoGrid'
import SmPhotoGrid from '@/components/landing/SmPhotoGrid'

const LandingPage = () => {
  return (
    <div className="h-full ">
      <Navbar />
      <Landing />
      <div className="hidden md:block">
        <PhotoGrid />
      </div>
      <div className=" md:hidden">
        <SmPhotoGrid />
      </div>
      <Footer />
    </div>
  )
}

export default LandingPage
