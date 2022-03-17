import { postComentary } from "../../app/middleware/payloadProjects";
import { useSelector, useDispatch } from "react-redux";
import '../../../node_modules/react-quill/dist/quill.snow.css';
import ReactQuill from "react-quill"
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormComentary = ({ idProject, setRender }) => {

    const [ data, setData ] = useState("");
    const dispatch = useDispatch();
    const {user} = useSelector(state => state.auth);

    const comentarys = useSelector(state => state.oneProject.oneProject.comentarys)

    const submitForm = (e) => {
        //e.preventDefault();
        //dispatch(postComentary(user.uid, idProject, data, toast))
        //setData("");
        //setRender(true)
        
        if(comentarys.lenght === 1){
            dispatch(postComentary(user.uid, idProject, data, toast))
            setData("");
            setRender(true)
        }else{
            e.preventDefault();
            dispatch(postComentary(user.uid, idProject, data, toast))
            setData("");
            setRender(true)
        }        
    } 

    return (
        <div>
            <form onSubmit={(e) => submitForm(e)}>
                <label>Añade una respuesta.</label>
                <ReactQuill  className=""
                    modules={modules}
                    formats={formats}
                    value={data}
                    onChange={(e)=>{setData(e)}}
                ></ReactQuill>
                <button className="" type="submit">Enviar Comentario</button>
            </form>
            <ToastContainer
                position="top-right"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>

    )

}

const modules = {
    toolbar: [
        [{ header: "1" }, {header: "2"}, {header: [3, 4, 5, 6]}, {font: []}],
        [{ size: [] }],
        [ "bold", "italic", "underline", "strike", "blockquote" ],
        [{ list: "ordered", }, { list: "bullet" }],
        ["image"],
        ["clean"],
        ["code-block"],
    ],
};
const formats = [
	"header",
	"font",
	"size",
	"bold",
	"italic",
	"underline",
	"strike",
	"blockquote",
	"list",
	"bullet",
	"link",
	"image",
	"video",
	"code-block"
];

export default FormComentary