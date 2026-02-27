import { motion } from 'framer-motion'
import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { Heading, Text } from '@/components/ui/Typography'

const initial = { opacity: 0, x: -200 }

export const Profile = () => {
  const h1Anim = useScrollAnimation(undefined, undefined, undefined, undefined, true)
  const p1Anim = useScrollAnimation(undefined, undefined, undefined, undefined, true)
  const p2Anim = useScrollAnimation(undefined, undefined, undefined, undefined, true)
  const p3Anim = useScrollAnimation(undefined, undefined, undefined, undefined, true)
  const p4Anim = useScrollAnimation(undefined, 0, -100, undefined, true)
  const hrAnim = useScrollAnimation(undefined, -50, undefined, 0, true)

  return (
    <section id='profile' className='page-container'>
      <Heading ref={h1Anim.ref} className='md:mb-4' initial={initial} animate={h1Anim.controls}>
        Hey there<span>.</span>
      </Heading>

      <div className='flex flex-col'>
        <Text ref={p1Anim.ref} initial={initial} animate={p1Anim.controls}>
          I'm Luke, a fullstack web developer passionate about building creative, user-focused
          applications that make a real impact.
        </Text>
        <Text ref={p2Anim.ref} initial={initial} animate={p2Anim.controls}>
          I love exploring new technologies, experimenting with ideas, and writing clean,
          maintainable code.
        </Text>
        <Text ref={p3Anim.ref} initial={initial} animate={p3Anim.controls}>
          Before stepping into the world of software engineering, I was a performer— so I might just
          be the only developer you'll meet who can tap dance 😉
        </Text>

        <div className='flex items-baseline gap-4 mt-24 mb-12'>
          <motion.span
            ref={hrAnim.ref}
            initial={{ x: '-50%', scaleX: 0, opacity: 0 }}
            animate={hrAnim.controls}
            className='h-1 flex-1 align-baseline bg-primary-orange'
          ></motion.span>
          <Text
            ref={p4Anim.ref}
            initial={{ x: 0, y: 30, opacity: 0 }}
            animate={p4Anim.controls}
            className='font-semibold'
          >
            Peace & code ✌️
          </Text>
        </div>
      </div>
    </section>
  )
}
