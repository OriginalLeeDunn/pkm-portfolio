'use client'

import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei'

export function HeroSceneComponent() {
  return (
    <Canvas>
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <pointLight position={[-10, -10, -10]} />
      <Sphere args={[1, 100, 200]} scale={2.5}>
        <MeshDistortMaterial
          color="#8352FD"
          attach="material"
          distort={0.3}
          speed={1.5}
          roughness={0}
        />
      </Sphere>
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}