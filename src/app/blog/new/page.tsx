'use client'

import { useState } from 'react'
import { Button } from '@/components/home-page/ui/button'
import { Input } from '@/components/home-page/ui/input'
import RichTextEditor from '@/components/home-page/RichTextEditor'

export default function NewBlogPost() {
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement blog post submission
    console.log({ title, content })
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Create New Blog Post</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Input
            type="text"
            placeholder="Blog post title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <RichTextEditor value={content} onChange={setContent} />
        <Button type="submit">Publish Post</Button>
      </form>
    </div>
  )
}