import {useEffect, useState} from'react'
import { useDispatch, useSelector } from "react-redux";
import { loadAllProject, deleteProject } from '../../app/middleware/payloadProjects';
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


    const eliminarProject = (id) => {
      const Swal = require('sweetalert2')
      Swal.fire({
          title: '¿Estás seguro de eliminar el proyecto?',
          text: "En caso de si, esta acción no se puede revertir en el futuro.",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Si, eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
              dispatch(deleteProject(id))
              Swal.fire(
              'Eliminado!',
              'Tu proyecto se ha borrado correctamente.',
              'success'
            )
          }
          })
    }


    projects?.sort(function (a, b) {
        if (a.fechaCreacion[0] < b.fechaCreacion[0]) {
          return 1;
        }
        if (a.fechaCreacion[0] > b.fechaCreacion[0]) {
          return -1;
        }
    
        if(a.fechaCreacion[0] === b.fechaCreacion[0]){
          if(a.fechaCreacion[1] < b.fechaCreacion[1]){
            return 1;
          }else{
            return -1;
          }
        }
        // a must be equal to b
        return 0;
      });
      console.log(projects)
  
    
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

            {/* {user.admin ? (
                                
                                <button
                                    id={project.id}
                                    className="btn-danger"
                                    onClick={() => eliminarProject(project.id)}>
                                    Eliminar Comentario
                                </button>
            ) : null} */}

            {error && !isLoading && <h1>{error}</h1>}
        </div>
    )
}

export default ProjectsPagePrivate