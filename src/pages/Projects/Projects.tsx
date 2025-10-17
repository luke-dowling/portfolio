import "./_projects.scss"

import { Link } from "react-router-dom"
import { FiArrowLeft, FiArrowRight } from "react-icons/fi"
import { motion } from "framer-motion"
import { useState } from "react"

import { Project } from "@components/Project/Project"
import { projectsData } from "@/lib/data"
import { Pagination } from "@components/Project/Pagination"
import { itemAnimation } from "@/Animations/layoutAnimation"

export const Projects = () => {
  const [[currentProjectId, direction], setCurrentProjectId] = useState([0, 0])
  const [selectedProject, setSelectedProject] = useState(
    projectsData[currentProjectId]
  )

  function setProject(newProjectId: number, newDirection?: number) {
    if (!newDirection) newDirection = newProjectId - currentProjectId
    setCurrentProjectId([newProjectId, newDirection])
    setSelectedProject(projectsData[newProjectId])
  }

  return (
    <div className='projects'>
      <motion.h1 variants={itemAnimation}>
        Projects<span>.</span>
      </motion.h1>

      <div className='projects-container'>
        <Project
          currentProjectId={currentProjectId}
          direction={direction}
          setProject={setProject}
          project={selectedProject}
        />
        <Pagination
          currentProjectId={currentProjectId}
          setProject={setProject}
        />
      </div>
      <motion.div
        variants={itemAnimation}
        className='button-group last-item-on-page'
      >
        <Link to={"/profile"}>
          <button>
            {" "}
            <FiArrowLeft style={{ verticalAlign: "middle" }} /> profile
          </button>
        </Link>

        <Link to={"/contact"}>
          <button>
            contact <FiArrowRight style={{ verticalAlign: "middle" }} />
          </button>
        </Link>
      </motion.div>
    </div>
  )
}
