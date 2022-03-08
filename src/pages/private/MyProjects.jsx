import { useDispatch,useSelector } from "react-redux"
import { useEffect } from "react"
import { getUserProject } from "../../app/middleware/payloadProjects"
import ProjectsPrivate from "../../components/private/ProjectsPrivate"


 
const MyProjects = () => {
    const dispatch = useDispatch()
    const {user}=useSelector(state=> state.auth)
    const {
        isLoading,
        myProjects,
        error
    } = useSelector(state => state.myProject)
    
    useEffect(() =>{
        dispatch(getUserProject(user.uid));
       console.log(myProjects)
    },[])

    return (
        <div className="">
        {isLoading && <h1>Cargando...</h1>}
        {myProjects && !isLoading && myProjects.map((project)=>{
            return(
                <ProjectsPrivate key={project.id} project={project}/>
                )
        })}
        
            {error && <h1> Error {error} </h1>}

        </div>
    )
}

export default MyProjects