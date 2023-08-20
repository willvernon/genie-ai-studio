import { Analytics } from '@vercel/analytics/react'
const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full  ">
      <div className="mx-auto max-w-screen-xl h-full w-full">{children}</div>
      <Analytics />
    </main>
  )
}

export default LandingLayout
