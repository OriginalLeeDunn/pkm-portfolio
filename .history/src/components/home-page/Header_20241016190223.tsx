import Link from 'next/link'
import { Button } from '@/components/home-page/ui/button'

export default function Header() {
  return (
    <header className="w-flex py-3 px-20 bg-background">
      <div className="container mx-auto flex justify-between px-40 items-center">
        <Link href="/" className="text-2xl font-bold px-4">
          Original Lee Dunn
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Button asChild><Link href="/projects">Projects</Link></Button></li>
            <li><Button asChild><Link href="/blog">Blog</Link></Button></li>
            <li><Button asChild><Link href="/dashboard">Dashboard</Link></Button></li>
            <li><Button asChild><Link href="/contact">Contact</Link></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
