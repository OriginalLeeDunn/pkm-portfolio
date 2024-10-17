import { notFound } from 'next/navigation'

const projects = [
  { id: 1, title: "Project 1", description: "A detailed description of Project 1" },
  { id: 2, title: "Project 2", description: "A detailed description of Project 2" },
  { id: 3, title: "Project 3", description: "A detailed description of Project 3" },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id))

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <p className="text-lg">{project.description}</p>
    </div>
  )
}