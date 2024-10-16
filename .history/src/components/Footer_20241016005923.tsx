import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full py-6 px-4 bg-background border-t">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-muted-foreground">© 2023 Your Name. All rights reserved.</p>
        <nav className="mt-4 md:mt-0">
          <ul className="flex space-x-4">
            <li><Link href="#" className="text-muted-foreground hover:text-foreground"><Github size={20} /></Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground"><Linkedin size={20} /></Link></li>
            <li><Link href="#" className="text-muted-foreground hover:text-foreground"><Twitter size={20} /></Link></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}