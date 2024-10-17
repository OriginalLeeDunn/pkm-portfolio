'use client'

import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Text } from '@react-three/drei'
import * as THREE from 'three'

function Cog({ position, rotation, scale }) {
  const meshRef = useRef()
  const toothCount = 8
  const innerRadius = 0.5
  const outerRadius = 1
  const toothDepth = 0.2

  const geometry = useMemo(() => {
    const shape = new THREE.Shape()
    shape.moveTo(innerRadius, 0)
    for (let i = 0; i < toothCount; i++) {
      const angle = (i / toothCount) * Math.PI * 2
      const nextAngle = ((i + 1) / toothCount) * Math.PI * 2
      shape.lineTo(outerRadius * Math.cos(angle), outerRadius * Math.sin(angle))
      shape.lineTo((outerRadius + toothDepth) * Math.cos(angle + 0.05), (outerRadius + toothDepth) * Math.sin(angle + 0.05))
      shape.lineTo((outerRadius + toothDepth) * Math.cos(nextAngle - 0.05), (outerRadius + toothDepth) * Math.sin(nextAngle - 0.05))
      shape.lineTo(outerRadius * Math.cos(nextAngle), outerRadius * Math.sin(nextAngle))
    }
    shape.lineTo(innerRadius, 0)

    const extrudeSettings = {
      steps: 1,
      depth: 0.2,
      bevelEnabled: false,
    }

    return new THREE.ExtrudeGeometry(shape, extrudeSettings)
  }, [])

  useFrame((state) => {
    meshRef.current.rotation.z += 0.01
  })

  return (
    <mesh ref={meshRef} position={position} rotation={rotation} scale={scale} geometry={geometry}>
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