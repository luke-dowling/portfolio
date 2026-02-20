import { useRef, useEffect } from 'react'
import { useInView, useAnimation } from 'framer-motion'

export const useScrollAnimation = (
  margin = '-100px 0px -200px 0px',
  initialX = -100,
  once = false,
) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { margin, once } as Parameters<typeof useInView>[1])
  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      controls.start({
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: 'easeOut' },
      })
    } else if (!once) {
      controls.start({
        opacity: 0,
        x: initialX,
        transition: { duration: 0.4, ease: 'easeIn' },
      })
    }
  }, [isInView, controls, initialX, once])

  return { ref, controls }
}
