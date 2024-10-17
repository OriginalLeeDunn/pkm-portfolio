import Link from 'next/link'
import { Button } from '@/components/home-page/ui/button'
import dynamic from 'next/dynamic'

const TechScene = dynamic(() => import('@/components/3d/TechScene'), { ssr: false })

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background">
      <div className="w-full h-[80vh] relative">
        <TechScene />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-foreground">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Your Name</h1>
            <p className="text-xl md:text-2xl mb-8">Web Developer & 3D Artist</p>
            <Button asChild variant="outline">
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}