import Landing from '@/components/landing/Landing'

import Footer from '@/components/landing/footer'
import Navbar from '@/components/landing/NavBar'
import PhotoGrid from '@/components/landing/PhotoGrid'
import SmPhotoGrid from '@/components/landing/SmPhotoGrid'
import GlowBar from '@/components/dashboard/glowbar'

const LandingPage = () => {
  return (
    <div className="h-full ">
      <Navbar />
      {/* <GlowBar /> */}
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
