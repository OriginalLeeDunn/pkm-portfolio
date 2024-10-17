import Link from 'next/link'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/home-page/ui/card"
import { Button } from "@/components/home-page/ui/button"

const projects = [
  { id: 1, title: "Project 1", description: "A brief description of Project 1" },
  { id: 2, title: "Project 2", description: "A brief description of Project 2" },
  { id: 3, title: "Project 3", description: "A brief description of Project 3" },
]

export default function ProjectsPage() {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild>
                <Link href={`/projects/${project.id}`}>View Project</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}