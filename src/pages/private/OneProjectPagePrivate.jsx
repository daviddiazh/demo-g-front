import { useDispatch, useSelector } from "react-redux";
import { loadById, getUserProject, deleteComentary } from '../../app/middleware/payloadProjects';
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
    const user = useSelector(state => state.auth.user);
    console.log("user: ", user)

    console.log(render)
    useEffect(async () =>{
        await dispatch(loadById(id))
        setRender(false)
    },[render])

    const eliminarComentario = (id) => {
        const Swal = require('sweetalert2')
        Swal.fire({
            title: '¿Estás seguro de eliminar el comentario?',
            text: "En caso de si, esta acción no se puede revertir en el futuro.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Si, eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(deleteComentary(id))
                Swal.fire(
                'Eliminado!',
                'Tu pregunta se ha borrado correctamente.',
                'success'
              )
            }
            })
    }


    return (
    
        <div className="">
            {oneProject?.comentarys && 
            <>  
                 <OneProjectPrivate oneProject={oneProject}/>
                 <span className=""> Respuestas {oneProject.comentarys.length}</span>
                 <ViewComentary privated={true} deleteComentary={eliminarComentario}/>
                 <FormComentary idProject={oneProject.id} setRender={setRender}></FormComentary> {/*dispatch(loadById(id, setConsulta))*/}
                 
                {/* <ViewAnswer key={comentary.id} comentary={comentary} deleteComentary={deleteComentary}/> */}



            </>     
            }
        </div> 
    )
}

export default OneProjectPagePrivate