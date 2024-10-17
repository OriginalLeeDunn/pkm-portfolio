import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/home-page/ui/card"
import { Button } from "@/components/home-page/ui/button"

const posts = [
  { id: 1, title: "Blog Post 1", description: "A brief description of Blog Post 1", date: "2023-07-01" },
  { id: 2, title: "Blog Post 2", description: "A brief description of Blog Post 2", date: "2023-07-15" },
  { id: 3, title: "Blog Post 3", description: "A brief description of Blog Post 3", date: "2023-08-01" },
]

export default function BlogPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="space-y-6">
        {posts.map((post) => (
          <Card key={post.id}>
            <CardHeader>
              <CardTitle>{post.title}</CardTitle>
              <CardDescription>{post.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{post.description}</p>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/blog/${post.id}`}>Read More</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}