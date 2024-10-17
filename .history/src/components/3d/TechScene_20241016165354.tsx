'use client'

import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { OrbitControls, Text, useGLTF } from '@react-three/drei'
import * as THREE from 'three'
import { TextureLoader } from 'three/src/loaders/TextureLoader'

function Cog({ position, rotation, scale }) {
  const { nodes } = useGLTF('/models/cog.glb')
  const meshRef = useRef()

  useFrame((state) => {
    meshRef.current.rotation.y += 0.01
  })

  return (
    <mesh
      ref={meshRef}
      position={position}
      rotation={rotation}
      scale={scale}
      geometry={nodes.Cog.geometry}
    >
      <meshStandardMaterial color="#88c0d0" metalness={0.8} roughness={0.2} />
    </mesh>
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
  const particleTexture = useLoader(TextureLoader, '/textures/particle.png')

  useEffect(() => {
    const particles = particlesRef.current
    const positions = new Float32Array(1000 * 3)
    const scales = new Float32Array(1000)

    for (let i = 0; i < 1000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 10
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10
      positions[i * 3 + 2] = (Math.random() - 0.5) * 10
      scales[i] = Math.random()
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particles.setAttribute('scale', new THREE.BufferAttribute(scales, 1))
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
      <bufferGeometry ref={particlesRef} />
      <pointsMaterial
        size={0.05}
        map={particleTexture}
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
      <Cog position={[-2, 0, 0]} rotation={[0, 0, 0]} scale={1} />
      <Cog position={[2, 0, 0]} rotation={[0, Math.PI / 4, 0]} scale={0.8} />
      <Cog position={[0, 2, 0]} rotation={[Math.PI / 4, 0, 0]} scale={1.2} />
      <FloatingText position={[-2, -2, 0]} text="Innovate" />
      <FloatingText position={[2, -2, 0]} text="Create" />
      <FloatingText position={[0, 2.5, 0]} text="Develop" />
      <ParticleField />
      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}