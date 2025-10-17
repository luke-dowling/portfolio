import "./_profile.scss"

import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"

import headshot from "@/images/headshot.jpg"
import { layoutAnimation, itemAnimation } from "@/Animations/layoutAnimation"

export const Profile = () => {
  return (
    <div className='profile'>
      <motion.div variants={layoutAnimation}>
        <motion.h1 variants={itemAnimation}>
          Profile<span>.</span>
        </motion.h1>

        <div className='profile-intro-container'>
          <motion.div variants={itemAnimation} className='intro'>
            <div className='img-container'>
              <img src={headshot} alt='Luke Dowlings headshot' />
            </div>
            <h2>Luke 👨‍💻🕺</h2>
            <p>web_dev / creative_coder / tap_dancer</p>
          </motion.div>

          <div>
            <motion.p variants={itemAnimation}>
              I’m a fullstack web developer passionate about building creative,
              user-focused applications that make a real impact.
            </motion.p>
            <motion.p variants={itemAnimation}>
              I love exploring new technologies, experimenting with ideas, and
              writing clean, maintainable code.
            </motion.p>
            <motion.p variants={itemAnimation}>
              Before stepping into the world of software engineering, I was a
              performer— so I might just be the only developer you’ll meet who
              can tap dance 😉
            </motion.p>
          </div>
        </div>
        <motion.p
          className='orange-line profile-tag-line'
          variants={itemAnimation}
        >
          Peace & code ✌️
        </motion.p>

        <motion.div
          variants={itemAnimation}
          className='button-group last-item-on-page'
        >
          <Link to='/projects'>
            <button>
              {" "}
              <FiArrowLeft style={{ verticalAlign: "middle" }} /> projects
            </button>
          </Link>
          <Link to='/contact'>
            <button>
              contact <FiArrowRight style={{ verticalAlign: "middle" }} />
            </button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  )
}
