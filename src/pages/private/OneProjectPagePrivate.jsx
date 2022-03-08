import { useDispatch,useSelector } from "react-redux";
import { loadById, getUserProject } from '../../app/middleware/payloadProjects';
import OneProjectPrivate from '../../components/private/OneProjectPrivate';
import {useEffect, useState} from'react'
import { useParams } from "react-router-dom";
import FormComentary from "../../components/private/FormComentary";
import ViewComentary from "../../components/private/ViewComentary";

const OneProjectPagePrivate = () => {
    const {id}=useParams();

    const dispatch = useDispatch()
    const {oneProject} = useSelector(state => state.oneProject)
    const [render, setRender] = useState(true)

    console.log(render)
    useEffect(async () =>{
        await dispatch(loadById(id))
        setRender(false)
    },[render])

    return (
    
        <div className="">
            {oneProject?.comentarys && 
            <>  
                 <OneProjectPrivate oneProject={oneProject}/>
                 <span className=""> Respuestas {oneProject.comentarys.length}</span>
                <ViewComentary privated={true} />
                 <FormComentary idProject={oneProject.id} setRender={setRender}></FormComentary> {/*dispatch(loadById(id, setConsulta))*/}
            </>     
            }
        </div> 
    )
}

export default OneProjectPagePrivate