import { Canvas, useFrame } from '@react-three/fiber'
import { Html, OrbitControls } from '@react-three/drei'
import { useRef, useState, useMemo, useEffect } from 'react'
import * as THREE from 'three'
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiReact,
  SiJavascript,
  SiDocker,
  SiNextdotjs,
  SiExpress,
} from 'react-icons/si'

const icons = [
  <SiReact style={{ fontSize: '40px' }} key='react' />,
  <SiNextdotjs style={{ fontSize: '40px' }} key='next' />,
  <SiTypescript style={{ fontSize: '40px' }} key='ts' />,
  <SiJavascript style={{ fontSize: '40px' }} key='js' />,
  <SiPostgresql style={{ fontSize: '40px' }} key='pg' />,
  <SiExpress style={{ fontSize: '40px' }} key='express' />,
  <SiMongodb style={{ fontSize: '40px' }} key='mongo' />,
  <SiDocker style={{ fontSize: '40px' }} key='docker' />,
]

function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(media.matches)
    const listener = () => setPrefersReducedMotion(media.matches)
    media.addEventListener('change', listener)
    return () => media.removeEventListener('change', listener)
  }, [])

  return prefersReducedMotion
}

interface GlobeWithIconsProps {
  prefersReducedMotion: boolean
}

function GlobeWithIcons({ prefersReducedMotion }: GlobeWithIconsProps) {
  const groupRef = useRef<THREE.Group>(null)

  // Generate fixed positions on a sphere for each icon
  const iconPositions = useMemo(() => {
    const positions: THREE.Vector3[] = []
    const radius = 2

    // Distribute icons evenly around the sphere using Fibonacci sphere
    const goldenRatio = (1 + Math.sqrt(5)) / 2

    for (let i = 0; i < icons.length; i++) {
      const theta = (2 * Math.PI * i) / goldenRatio
      const phi = Math.acos(1 - (2 * (i + 0.5)) / icons.length)

      const x = radius * Math.sin(phi) * Math.cos(theta)
      const y = radius * Math.sin(phi) * Math.sin(theta)
      const z = radius * Math.cos(phi)

      positions.push(new THREE.Vector3(x, y, z))
    }

    return positions
  }, [])

  // Rotate the entire group slowly
  useFrame(() => {
    if (prefersReducedMotion || !groupRef.current) return
    groupRef.current.rotation.y += 0.003
  })

  return (
    <group ref={groupRef}>
      {icons.map((icon, i) => (
        <IconMarker key={i} position={iconPositions[i]} prefersReducedMotion={prefersReducedMotion}>
          {icon}
        </IconMarker>
      ))}
    </group>
  )
}

interface IconMarkerProps {
  children: React.ReactNode
  position: THREE.Vector3
  prefersReducedMotion: boolean
}

function IconMarker({ children, position, prefersReducedMotion }: IconMarkerProps) {
  const ref = useRef<THREE.Group>(null)

  // Make icon always face the camera
  useFrame(({ camera }) => {
    if (ref.current) {
      ref.current.quaternion.copy(camera.quaternion)
    }
  })

  // Calculate distance from center for intensity effect
  const distance = position.length()
  const intensity = Math.max(0, 1.2 - distance / 2)

  return (
    <group ref={ref} position={[position.x, position.y, position.z]}>
      <Html center>
        <div
          style={{
            width: '40px',
            height: '40px',
            color: '#db583e',
            transition: 'all 0.2s ease',
            opacity: prefersReducedMotion ? 1 : 0.8 + intensity * 0.2,
          }}
        >
          {children}
        </div>
      </Html>
    </group>
  )
}

export const LogosAnimation = () => {
  const prefersReducedMotion = usePrefersReducedMotion()

  return (
    <Canvas
      camera={{ position: [0, 2, 5] }}
      className='home-logo-animation'
      frameloop={prefersReducedMotion ? 'demand' : 'always'}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[5, 5, 5]} intensity={1} />
      <pointLight position={[-5, -5, -5]} intensity={0.5} />

      <GlobeWithIcons prefersReducedMotion={prefersReducedMotion} />

      <OrbitControls enableZoom={false} />
    </Canvas>
  )
}
