import { notFound } from 'next/navigation'
import dynamic from 'next/dynamic'

const ProjectViewer = dynamic(() => import('@/components/3d/ProjectViewer'), { ssr: false })

const projects = [
  { id: '1', title: "Project 1", description: "A detailed description of Project 1", modelUrl: "/models/Futuristic_Techy_COG__1017024135_refine.glb" },
  { id: '2', title: "Project 2", description: "A detailed description of Project 2", modelUrl: "/models/Futuristic_Techy_COG__1017024135_refine.glb" },
  { id: '3', title: "Project 3", description: "A detailed description of Project 3", modelUrl: "/models/Futuristic_Techy_COG__1017024135_refine.glb" },
]

export default function ProjectPage({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === params.id)

  if (!project) {
    notFound()
  }

  return (
    <div className="container mx-auto py-12">
      <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
      <ProjectViewer modelUrl={project.modelUrl} />
      <p className="text-lg mt-4">{project.description}</p>
    </div>
  )
}