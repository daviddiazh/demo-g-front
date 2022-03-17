import { useEffect } from "react";
import ReactQuill from "react-quill"
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteProject } from '../../app/middleware/payloadProjects';

const OneProjectPrivate = (oneProject) => {

    const dispatch = useDispatch();

    const user = useSelector(state => state.auth.user);

    const navigate = useNavigate();

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
              navigate("/private/ProjectsPage/")
            }
            })
    }
    
    return (
        <div key={oneProject.id}>
            <div>
                <img style={{width: "80px"}} src={oneProject?.oneProject.userDTO.pictureUrl} alt="Foto de perfil del usuario" />
                <span>Creado por</span>
                <span>{oneProject.oneProject.userDTO.name}</span>
            </div>

            <div>
                <span>Fecha de creación: </span>
                <span>{oneProject.oneProject.fechaCreacion[0]}</span>
                <span> A las </span>
                <span>{oneProject.oneProject.fechaCreacion[1]}</span>
            </div>

            <div>
                <span>{oneProject.oneProject.project}</span>
            </div>


            <div className="">
                <ReactQuill value={oneProject.oneProject.descripcion}  
                    modules={modules}   
                    readOnly={true}
                />
            </div>

            {user.admin ? (
                                
                                <button
                                    id={oneProject.oneProject.id}
                                    className="btn-danger"
                                    onClick={() => eliminarProject(oneProject.oneProject.id)}>
                                    Eliminar Proyecto
                                </button>
          ) : null}
        </div>
    )
}

const modules = {
    toolbar: false
};

export default OneProjectPrivate 