import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { deleteProject } from "../../app/middleware/payloadProjects";
import ReactQuill from "react-quill";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProjectsPrivate = ({project}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  return (
    <div>
      <div className="">
        <div className="">
          <img
            src={project.userDTO.pictureUrl}
            width={80}
            className="Photo profile"
          />
          <span className="">
            Creado por {project.userDTO.name}
          </span>
        </div>

        <div className="">
          <span className="">Fecha de creacion {project.fechaCreacion}</span>
        </div>
        <div>
          <span>Estado del proyecto: {project.state}</span>
        </div>
      </div>
      <div className="">
        <span className="">
            {project.project}
        </span>
        <div className=""></div>
        <button onClick={()=>navigate(`/private/Project/${project.id}`)} className="">Ver el proyecto</button>
      </div>

        <div className="mt-4  ">
            <ReactQuill value={project.descripcion}  
                modules={modules}   
                readOnly={true}
            />
        </div>     
    </div>
  );
};

const modules = {
    toolbar: false
};

export default ProjectsPrivate; //TODO: Configurar boton de eliminar.



