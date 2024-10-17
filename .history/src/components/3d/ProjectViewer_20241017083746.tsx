'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function Model({ url }: { url: string }) {
  const { scene } = useGLTF(url)
  return <primitive object={scene} />
}

export default function ProjectViewer({ modelUrl }: { modelUrl: string }) {
  return (
    <div className="w-full h-[400px]">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.9} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <Model url={modelUrl} />
        <OrbitControls />
      </Canvas>
    </div>
  )
}