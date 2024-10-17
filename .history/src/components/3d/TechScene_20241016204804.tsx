'use client'

import { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { ErrorBoundary } from 'react-error-boundary'

function Cog({ position, rotation, scale, speed = 0.01, color = "#88c0d0" }) {
  const meshRef = useRef()
  const gltf = useLoader(GLTFLoader, '/models/Futuristic_Techy_COG__1017024135_refine.glb')

  useFrame((state) => {
    meshRef.current.rotation.y += speed
  })

  return (
    <primitive
      ref={meshRef}
      object={gltf.scene.clone()} // Clone the scene to allow multiple instances with different properties
      position={position}
      rotation={rotation}
      scale={scale}
    >
      <meshStandardMaterial color={color} metalness={0.8} roughness={0.2} />
    </primitive>
  )
}

function FloatingText({ position, text }) {
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.1
  })

  return (
    <Text
      ref={meshRef}
      position={position}
      fontSize={0.5}
      color="#eceff4"
      anchorX="center"
      anchorY="middle"
    >
      {text}
    </Text>
  )
}

function ParticleField() {
  const particlesRef = useRef()
  const particleCount = 1000
  const particleSpeed = 0.02

  const [positions, velocities] = useMemo(() => {
    const positions = new Float32Array(particleCount * 3)
    const velocities = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10

      velocities[i * 3] = (Math.random() - 0.5) * particleSpeed
      velocities[i * 3 + 1] = (Math.random() - 0.5) * particleSpeed
      velocities[i * 3 + 2] = (Math.random() - 0.5) * particleSpeed
    }

    return [positions, velocities]
  }, [])

  useFrame(() => {
    const positionArray = particlesRef.current.attributes.position.array

    for (let i = 0; i < particleCount; i++) {
      positionArray[i * 3] += velocities[i * 3]
      positionArray[i * 3 + 1] += velocities[i * 3 + 1]
      positionArray[i * 3 + 2] += velocities[i * 3 + 2]

      // Boundary check and collision
      for (let j = 0; j < 3; j++) {
        if (Math.abs(positionArray[i * 3 + j]) > 5) {
          velocities[i * 3 + j] *= -1
        }
      }
    }

    particlesRef.current.attributes.position.needsUpdate = true
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

function FallbackComponent({ error }) {
  return (
    <div style={{ color: 'red', width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <h1>Error loading 3D scene: {error.message}</h1>
    </div>
  )
}

export default function TechScene() {
  return (
    <ErrorBoundary FallbackComponent={FallbackComponent}>
      <Canvas camera={{ position: [0, 0, 5] }}>
        <color attach="background" args={['#2e3440']} />
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <Cog position={[-2, 0, 0]} rotation={[0, 0, 0]} scale={1} speed={0.01} color="#88c0d0" />
          <Cog position={[2, 0, 0]} rotation={[0, Math.PI / 4, 0]} scale={0.8} speed={-0.015} color="#81a1c1" />
          <Cog position={[0, 2, 0]} rotation={[Math.PI / 4, 0, 0]} scale={1.2} speed={0.008} color="#5e81ac" />
          <Cog position={[0, -2, 0]} rotation={[0, 0, 0]} scale={0.5} speed={0.02} color="#ebcb8b" />
        </Suspense>
        <FloatingText position={[-2, -2, 0]} text="Innovate" />
        <FloatingText position={[2, -2, 0]} text="Create" />
        <FloatingText position={[0, 2.5, 0]} text="Develop" />
        <ParticleField />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </ErrorBoundary>
  )
}