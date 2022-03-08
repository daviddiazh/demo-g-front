import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCreated = () => {
  return (
    <div>
        <h1>Gracias por crear este proyecto</h1>
        <Link to="/private/MyProjects">Ver mis proyectos</Link>
    </div>
  )
}

export default ProjectCreated