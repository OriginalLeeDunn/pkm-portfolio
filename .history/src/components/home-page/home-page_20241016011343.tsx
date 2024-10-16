'use client'

import React from 'react'
import { Button } from "@/components/home-page/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/home-page/ui/card"
import { Input } from "@/components/home-page/ui/input"
import { Github, Linkedin, Twitter, Mountain } from "lucide-react"
import Link from "next/link"

export function HomePageComponent() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Mountain className="h-6 w-6" />
          <span className="sr-only">PKM Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Dashboard
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Projects
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-black">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
                  Welcome to My PKM Portfolio
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-300 md:text-xl">
                  Manage my projects, track my time, and showcase my work all in one place.
                </p>
              </div>
              <div className="space-x-4">
                <Button>Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center">How It Works</h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 mt-16 items-start">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Create Projects</h3>
                <p className="text-sm text-gray-500">Easily create and manage your projects in one place.</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Track Time</h3>
                <p className="text-sm text-gray-500">Log your hours and monitor productivity with our time tracking feature.</p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Showcase Your Work</h3>
                <p className="text-sm text-gray-500">Build your portfolio and share your achievements with the world.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16">Features</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>User Authentication</CardTitle>
                </CardHeader>
                <CardContent>Secure login and registration system to protect your data.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Project Management</CardTitle>
                </CardHeader>
                <CardContent>Organize and track your projects with ease.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Blog Integration</CardTitle>
                </CardHeader>
                <CardContent>Share your thoughts and insights with an integrated blogging platform.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Time Tracking</CardTitle>
                </CardHeader>
                <CardContent>Monitor your productivity with built-in time tracking tools.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Interactive Dashboard</CardTitle>
                </CardHeader>
                <CardContent>Visualize your progress with charts and statistics.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>LLM Query Interface</CardTitle>
                </CardHeader>
                <CardContent>Interact with your data using natural language queries.</CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Get Started?</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Join now and take control of your personal knowledge management and portfolio.
                </p>
              </div>
              <Button className="w-[200px]">Explore Dashboard</Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16">Latest Blog Posts</h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Maximizing Productivity with PKM</CardTitle>
                  <CardDescription>Posted on June 1, 2023</CardDescription>
                </CardHeader>
                <CardContent>Learn how to boost your productivity using Personal Knowledge Management techniques.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Building an Effective Digital Portfolio</CardTitle>
                  <CardDescription>Posted on May 15, 2023</CardDescription>
                </CardHeader>
                <CardContent>Tips and tricks for creating a standout digital portfolio to showcase your work.</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>The Power of Time Tracking</CardTitle>
                  <CardDescription>Posted on May 1, 2023</CardDescription>
                </CardHeader>
                <CardContent>Discover how time tracking can transform your work habits and improve efficiency.</CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get in Touch</h2>
                <p className="max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed mx-auto">
                  Have questions or feedback? We'd love to hear from you.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-gray-500">
                  By subscribing, you agree to our Terms of Service and Privacy Policy.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 PKM Portfolio. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
        <div className="flex gap-4">
          <Link className="text-gray-500" href="#">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link className="text-gray-500" href="#">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link className="text-gray-500" href="#">
            <Twitter className="h-4 w-4" />
            <span className="sr-only">Twitter</span>
          </Link>
        </div>
      </footer>
    </div>
  )
}
export default HomePageComponent;