import Link from 'next/link'
import { Button } from '@/components/home-page/ui/button'
import dynamic from 'next/dynamic'

const HeroScene = dynamic(() => import('@/components/3d/HeroScene'), { ssr: false })

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full h-[60vh] relative">
        <HeroScene />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Original Lee Dunn</h1>
            <p className="text-xl md:text-2xl mb-8">Web Developer & 3D Artist</p>
            <Button asChild>
              <Link href="/projects">View Projects</Link>
            </Button>
          </div>
        </div>
      </div>
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          {/* Add ProjectCard components here */}
        </div>
      </section>
    </div>
  )
}