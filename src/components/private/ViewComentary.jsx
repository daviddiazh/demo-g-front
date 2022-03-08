import ReactQuill from "react-quill";
import { useSelector } from "react-redux";
import "../../../node_modules/react-quill/dist/quill.snow.css";

const ViewComentary = () => {

  const comentarys = useSelector(state => state.oneProject.oneProject.comentarys)
  
  return <div>
    {comentarys.map(comentary => {
      return (
        <div key={comentary.id}>
          <div className="">
            <div className="">
              <img style={{ width: '80px' }} src={comentary.userDTO.pictureUrl} className="" />
              <span className="">
                Creado por
              </span>
              <span className="">
                {comentary.userDTO.name}
              </span>
            </div>

            <div className="">
              <span className="">Fecha de respuesta</span>
              <span className="">
                {comentary.fechaCreacio}
              </span>
            </div>
          </div>

          <div className="mt-4  ">
            <ReactQuill value={comentary.comentary} modules={modules} readOnly={true} />
          </div>
        </div>
      );
    })
    }
  </div>
};

const modules = {
  toolbar: false,
};


export default ViewComentary;
