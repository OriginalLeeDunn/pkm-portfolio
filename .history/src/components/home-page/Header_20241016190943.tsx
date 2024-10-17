import Link from 'next/link'
import { Button } from '@/components/home-page/ui/button'
import { ThemeToggle } from '@/components/home-page/ThemeToggle'

export default function Header() {
  return (
    <header className="w-full py-6 px-4 bg-background">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Your Name
        </Link>
        <nav className="flex items-center space-x-4">
          <Link href="/projects">Projects</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/dashboard">Dashboard</Link>
          <Button asChild><Link href="/contact">Contact</Link></Button>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  )
}