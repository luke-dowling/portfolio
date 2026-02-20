import { motion } from 'framer-motion'

import { useScrollAnimation } from '@/hooks/useScrollAnimation'
import { LogosAnimation } from '@/Animations/LogosAnimation'
import { PageHeading } from '@/components/ui/Heading'

const initial = { opacity: 0, x: -200 }

export const Profile = () => {
  const h1Anim = useScrollAnimation(undefined, undefined, true)
  const p1Anim = useScrollAnimation(undefined, undefined, true)
  const p2Anim = useScrollAnimation(undefined, undefined, true)
  const p3Anim = useScrollAnimation(undefined, undefined, true)
  const p4Anim = useScrollAnimation(undefined, undefined, true)

  return (
    <div className='page-container'>
      <PageHeading
        ref={h1Anim.ref}
        className='desktop:mb-4'
        initial={initial}
        animate={h1Anim.controls}
      >
        Hey there<span>.</span>
      </PageHeading>

      <div className='relative'>
        <div className='flex flex-row-reverse items-start'>
          <div>
            <motion.p
              ref={p1Anim.ref}
              className='text-justify'
              initial={initial}
              animate={p1Anim.controls}
            >
              I'm Luke, a fullstack web developer passionate about building creative, user-focused
              applications that make a real impact.
            </motion.p>
            <motion.p ref={p2Anim.ref} initial={initial} animate={p2Anim.controls}>
              I love exploring new technologies, experimenting with ideas, and writing clean,
              maintainable code.
            </motion.p>
            <motion.p ref={p3Anim.ref} initial={initial} animate={p3Anim.controls}>
              Before stepping into the world of software engineering, I was a performer— so I might
              just be the only developer you'll meet who can tap dance 😉
            </motion.p>
            <motion.p
              ref={p4Anim.ref}
              className='my-12'
              initial={initial}
              animate={p4Anim.controls}
            >
              Peace & code ✌️
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  )
}

// export const Profile = () => {
//   const h1Ref = useRef(null)
//   const isInView = useInView(h1Ref, { margin: '0px 0px -50% 0px' })
//   const controls = useAnimation()

//   useEffect(() => {
//     if (isInView) controls.start('animate')
//     else controls.start('exit')
//   }, [isInView, controls])

//   return (
//     <motion.div
//       className='page-container'
//       variants={layoutAnimation}
//       initial='initial'
//       animate={controls}
//     >
//       <motion.h1 ref={h1Ref} className='desktop:mb-4' variants={itemAnimation}>
//         Hey there<span>.</span>
//       </motion.h1>

//       <div className='desktop:flex desktop:flex-row-reverse desktop:items-start'>
//         <div>
//           <motion.p className='desktop:text-justify' variants={itemAnimation}>
//             I’m Luke, a fullstack web developer passionate about building creative, user-focused
//             applications that make a real impact.
//           </motion.p>
//           <motion.p variants={itemAnimation}>
//             I love exploring new technologies, experimenting with ideas, and writing clean,
//             maintainable code.
//           </motion.p>
//           <motion.p variants={itemAnimation}>
//             Before stepping into the world of software engineering, I was a performer— so I might
//             just be the only developer you’ll meet who can tap dance 😉
//           </motion.p>
//           <motion.p className='my-12' variants={itemAnimation}>
//             Peace & code ✌️
//           </motion.p>
//         </div>
//       </div>
//     </motion.div>
//   )
// }
