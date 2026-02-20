import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useRef, useMemo } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent, MotionValue } from 'framer-motion'
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
  <SiReact key='react' />,
  <SiNextdotjs key='next' />,
  <SiTypescript key='ts' />,
  <SiJavascript key='js' />,
  <SiPostgresql key='pg' />,
  <SiExpress key='express' />,
  <SiMongodb key='mongo' />,
  <SiDocker key='docker' />,
]

const sphericalCoords = icons.map((_, i) => {
  const goldenRatio = (1 + Math.sqrt(5)) / 2
  const theta = (2 * Math.PI * i) / goldenRatio
  const phi = Math.acos(1 - (2 * (i + 0.5)) / icons.length)
  return { theta, phi }
})

function GlobeWithIcons({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const groupRef = useRef<THREE.Group>(null)
  const iconRefs = useRef<(THREE.Group | null)[]>([])
  const stateRef = useRef({ radius: 0, rotation: 0, cameraZ: 6 })

  const radiusMV = useTransform(scrollYProgress, [0.25, 0.65], [0, 2.5])
  // Rotation starts later than radius — pause before orbiting begins
  const rotationMV = useTransform(scrollYProgress, [0.4, 0.65], [0, Math.PI * 1.5])
  const cameraMV = useTransform(scrollYProgress, [0.25, 0.65], [6, 2])

  useMotionValueEvent(radiusMV, 'change', v => {
    stateRef.current.radius = v
  })
  useMotionValueEvent(rotationMV, 'change', v => {
    stateRef.current.rotation = v
  })
  useMotionValueEvent(cameraMV, 'change', v => {
    stateRef.current.cameraZ = v
  })

  // Seed initial values
  stateRef.current.radius = radiusMV.get()
  stateRef.current.rotation = rotationMV.get()
  stateRef.current.cameraZ = cameraMV.get()

  const { camera } = useThree()

  useFrame(() => {
    const { radius, rotation, cameraZ } = stateRef.current
    camera.position.z = cameraZ
    if (groupRef.current) groupRef.current.rotation.y = rotation
    iconRefs.current.forEach((ref, i) => {
      if (!ref) return
      const { theta, phi } = sphericalCoords[i]
      ref.position.set(
        radius * Math.sin(phi) * Math.cos(theta),
        radius * Math.sin(phi) * Math.sin(theta),
        radius * Math.cos(phi),
      )
    })
  })

  return (
    <group ref={groupRef}>
      {icons.map((icon, i) => (
        <group
          key={i}
          ref={el => {
            iconRefs.current[i] = el
          }}
        >
          <Html center>
            <div
              style={{ color: '#db583e', fontSize: '32px', lineHeight: 1, pointerEvents: 'none' }}
            >
              {icon}
            </div>
          </Html>
        </group>
      ))}
    </group>
  )
}

export const LogosAnimation = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.6, 0.75], [0, 1, 1, 0])

  return (
    <div ref={wrapperRef} className='w-full h-[120vh]'>
      <div className='sticky top-0 h-screen flex items-center justify-center'>
        <motion.div style={{ opacity }} className='w-full h-full'>
          <Canvas
            camera={{ position: [0, 0, 6] }}
            style={{ width: '100%', height: '100%' }}
            frameloop='always'
          >
            <ambientLight intensity={0.5} />
            <pointLight position={[5, 5, 5]} intensity={1} />
            <GlobeWithIcons scrollYProgress={scrollYProgress} />
          </Canvas>
        </motion.div>
      </div>
    </div>
  )
}
