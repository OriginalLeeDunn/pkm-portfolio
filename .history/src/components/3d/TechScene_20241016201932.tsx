'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text, Float } from '@react-three/drei'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Cog() {
  const gltf = useLoader(GLTFLoader, '/models/Futuristic_Techy_COG__1017024135_refine.glb')
  const meshRef = useRef()

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.5
      meshRef.current.rotation.y += delta * 0.2
    }
  })

  return (
    <primitive 
      object={gltf.scene} 
      ref={meshRef}
      scale={[0.5, 0.5, 0.5]}
      position={[0, 0, 0]}
    />
  )
}

export default function TechScene() {
  return (
    <div className="w-full h-full">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Cog />
        <OrbitControls enableZoom={false} />
        <Environment preset="studio" />
      </Canvas>
    </div>
  )
}

function FloatingText({ position, text }) {
  return (
    <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
      <Text
        position={position}
        fontSize={0.5}
        color="#eceff4"
        anchorX="center"
        anchorY="middle"
      >
        {text}
      </Text>
    </Float>
  )
}

function ParticleField() {
  const particlesRef = useRef()

  const [positions, scales] = useMemo(() => {
    const positions = new Float32Array(1000 * 3)
    const scales = new Float32Array(1000)

    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      scales[i] = Math.random()
    }

    return [positions, scales]
  }, [])

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    const scales = particlesRef.current.attributes.scale.array

    for (let i = 0; i < scales.length; i++) {
      scales[i] = Math.abs(Math.sin(time + i))
    }

    particlesRef.current.attributes.scale.needsUpdate = true
  })

  return (
    <points>
      <bufferGeometry ref={particlesRef}>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-scale"
          count={scales.length}
          array={scales}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        transparent
        alphaTest={0.5}
        color="#5e81ac"
      />
    </points>
  )
}

export default function TechScene() {
  return (
    <Canvas camera={{ position: [0, 0, 5] }}>
      <color attach="background" args={['#2e3440']} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Cog position={[-2, 0, 0]} rotation={[0, 0, 0]} scale={1} speed={0.01} />
      <Cog position={[2, 0, 0]} rotation={[0, Math.PI / 4, 0]} scale={0.8} speed={-0.015} />
      <Cog position={[0, 2, 0]} rotation={[Math.PI / 4, 0, 0]} scale={1.2} speed={0.008} />
      <FloatingText  position={[-2, -2, 0]} text="Innovate" />
      <FloatingText position={[2, -2, 0]} text="Create" />
      <FloatingText position={[0, 2.5, 0]} text="Develop" />
      <ParticleField />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}