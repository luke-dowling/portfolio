import { Canvas, useFrame } from '@react-three/fiber'
import { Html } from '@react-three/drei'
import { useRef, useState, useMemo } from 'react'
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

// horizontal
const ICON_POSITIONS: [number, number, number][] = [
  [0, 3.0, 0.2],
  [-0.5, 2.0, 0.4],
  [1.3, 1.7, -0.1],
  [-1.4, 0.4, 0.1],
  [0.1, 0, 0.0],
  [1.3, -0.9, 0.3],
  [-1.0, -1.7, -0.2],
  [1.5, -3, 0.2],
]

const CONNECTIONS: [number, number][] = [
  [0, 1],
  [1, 2],
  [1, 3],
  [2, 4],
  [3, 2],
  [3, 4],
  [4, 5],
  [4, 6],
  [5, 7],
  [6, 7],
]

const icons = [
  <SiNextdotjs key='next' />,
  <SiReact key='react' />,
  <SiTypescript key='ts' />,
  <SiJavascript key='js' />,
  <SiExpress key='express' />,
  <SiPostgresql key='pg' />,
  <SiMongodb key='mongo' />,
  <SiDocker key='docker' />,
]

const N_PTS = 60

function buildLine(from: [number, number, number], to: [number, number, number]): THREE.Line {
  const pts: THREE.Vector3[] = []
  for (let i = 0; i <= N_PTS; i++) {
    const t = i / N_PTS
    pts.push(
      new THREE.Vector3(
        from[0] + (to[0] - from[0]) * t,
        from[1] + (to[1] - from[1]) * t,
        from[2] + (to[2] - from[2]) * t,
      ),
    )
  }
  const geo = new THREE.BufferGeometry().setFromPoints(pts)
  geo.setDrawRange(0, 0)
  const mat = new THREE.LineBasicMaterial({ color: '#db583e', opacity: 0.4, transparent: true })
  return new THREE.Line(geo, mat)
}

function ConstellationScene({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const stateRef = useRef({ lineProgress: 0 })
  const [visibleIcons, setVisibleIcons] = useState(0)

  const lineProgressMV = useTransform(scrollYProgress, [0.15, 0.7], [0, CONNECTIONS.length])
  const iconProgressMV = useTransform(scrollYProgress, [0.0, 0.18], [0, icons.length])

  useMotionValueEvent(lineProgressMV, 'change', v => {
    stateRef.current.lineProgress = v
  })
  useMotionValueEvent(iconProgressMV, 'change', v => {
    setVisibleIcons(Math.round(v))
  })

  stateRef.current.lineProgress = lineProgressMV.get()

  const lineObjects = useMemo(
    () => CONNECTIONS.map(([a, b]) => buildLine(ICON_POSITIONS[a], ICON_POSITIONS[b])),
    [],
  )

  useFrame(() => {
    const { lineProgress } = stateRef.current
    lineObjects.forEach((line, i) => {
      const progress = Math.max(0, Math.min(1, lineProgress - i))
      line.geometry.setDrawRange(0, Math.floor(progress * (N_PTS + 1)))
    })
  })

  return (
    <>
      {lineObjects.map((obj, i) => (
        <primitive key={i} object={obj} />
      ))}
      {icons.map((icon, i) => (
        <group key={i} position={ICON_POSITIONS[i]}>
          <Html center>
            <div
              style={{
                color: '#db583e',
                width: '50px',
                fontSize: '50px',
                lineHeight: 1,
                opacity: visibleIcons > i ? 1 : 0,
                transition: 'opacity 0.4s ease',
                pointerEvents: 'none',
              }}
            >
              {icon}
            </div>
          </Html>
        </group>
      ))}
    </>
  )
}

export const LogosAnimation = () => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.1, 0.72, 0.85], [0, 1, 1, 0])

  return (
    <div ref={wrapperRef} className='w-full h-[120vh]'>
      <div className='sticky top-0 h-screen'>
        <motion.div style={{ opacity }} className='w-full h-full'>
          <Canvas
            camera={{ position: [0.3, 0.2, 5.5], fov: 68 }}
            style={{ width: '100%', height: '100%' }}
            frameloop='always'
          >
            <ConstellationScene scrollYProgress={scrollYProgress} />
          </Canvas>
        </motion.div>
      </div>
    </div>
  )
}
