import {useEffect, useState} from'react'
import { useDispatch, useSelector } from "react-redux";
import { loadAllProject } from '../../app/middleware/payloadProjects';
import ProjectPrivate from '../../components/private/ProjectsPrivate';

const ProjectsPagePrivate = () => {
    const dispatch = useDispatch()
    const {isLoading, projects, error}=useSelector(state=>state.project)
    const user = useSelector(state => state.auth.user)

    console.log("projects: ", projects)


    useEffect(()=>{
      dispatch(loadAllProject())
    },[])

    const [ filtro, setFiltro ] = useState("");
  
    
    return (
        <div className="">
            <input
                className=""
                placeholder="Buscar proyectos..."
                type="text"
                onChange={(e) => setFiltro(e.target.value.toUpperCase())}
                style={{width: "500px"}}
            ></input>  
            {isLoading && <h1>Cargando...</h1>}
            {/* {projects && !isLoading && projects.map((project)=>{
                return(
                    <ProjectPrivate key={project.id} project={project}/>
                )
            })} */}

            {projects && projects.filter(busqueda => busqueda.userDTO.name.toUpperCase().includes(filtro)).map((project) => {
                return(
                    <ProjectPrivate key={project.id} project={project} />
                )
            })}

            {error && !isLoading && <h1>{error}</h1>}
        </div>
    )
}

export default ProjectsPagePrivate