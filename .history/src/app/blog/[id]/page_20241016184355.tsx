import { notFound } from 'next/navigation'

const posts = [
  { id: 1, title: "Blog Post 1", content: "Full content of Blog Post 1", date: "2023-07-01" },
  { id: 2, title: "Blog Post 2", content: "Full content of Blog Post 2", date: "2023-07-15" },
  { id: 3, title: "Blog Post 3", content: "Full content of Blog Post 3", date: "2023-08-01" },
]

export default function BlogPostPage({ params }: { params: { id: string } }) {
  const post = posts.find(p => p.id === parseInt(params.id))

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-500 mb-4">{post.date}</p>
      <div className="prose lg:prose-xl">
        <p>{post.content}</p>
      </div>
    </div>
  )
}