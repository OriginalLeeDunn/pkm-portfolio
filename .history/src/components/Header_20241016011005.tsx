import Link from 'next/link'
import { Button } from '@/components/home-page/ui/button'

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Your Name
        </Link>
        <nav>
          <ul className="flex space-x-4">
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/dashboard">Dashboard</Link></li>
            <li><Button asChild><Link href="/contact">Contact</Link></Button></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}