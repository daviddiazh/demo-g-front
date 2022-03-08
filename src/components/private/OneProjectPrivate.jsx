import ReactQuill from "react-quill"

const OneProjectPrivate = (oneProject) => {

    return (
        <div key={oneProject.id}>
            <div>
                <img style={{width: "80px"}} src={oneProject?.oneProject.userDTO.pictureUrl} alt="Foto de perfil del usuario" />
                <span>Creado por</span>
                <span>{oneProject.oneProject.userDTO.name}</span>
            </div>

            <div>
                <span>Fecha de creación</span>
                <span>{oneProject.oneProject.fechaCreacion}</span>
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
        </div>
    )
}

const modules = {
    toolbar: false
};

export default OneProjectPrivate 