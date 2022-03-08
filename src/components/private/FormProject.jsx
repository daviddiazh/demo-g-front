import useFormData from "../../hooks/UseFormData";
import { postProject } from "../../app/middleware/payloadProjects";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import { useState } from "react";


const FormProject = () => {

    const [ data, setData ] = useState("");
    const navigate = useNavigate();
    const { user } = useSelector(state => state.auth);
    const { form, formData, updateFormData } = useFormData();

    const submitForm = (e) => {
        e.preventDefault();
        const form2 = { ...formData, descripcion: data }
        postProject(form2, navigate)
    }

    return (
        <div>
            <form ref={form} onSubmit={submitForm} onChange={updateFormData} className="" >
                <label>Titulo del Proyecto</label>
                <input type="text" name="project" className="" />
                <input type="text" name="userId" hidden value={user.uid} className=""/>
                <label>Estado inicial del proyecto</label>
                <select name="state" required defaultValue="" >
                    <option disabled type=""value=""></option>
                    <option type="String">ACTIVO</option>
                    <option type="String">PAUSADO</option>
                    <option type="String">CULMINADO</option>
                </select>
                <label>Categoria del proyecto</label>
                <select required name="category" defaultValue="" >
                    <option disabled type=""value=""></option>
                    <option type="String">IDENTIDAD_DE_MARCA</option>
                    <option type="String">ESTRATEGIA_COMUNICACION_DIGITAL</option>
                    <option type="String">COMUNICACION_AUDIOVISUAL</option>
                </select>
                <label>Descripcion del proyecto</label>
                <ReactQuill className=""
                    modules={modules}
                    formats={formats}
                    value={data}
                    onChange={(e)=>{setData(e)}}
                ></ReactQuill> 
                <button type="submit" className="">Crear Proyecto</button>
            </form>
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

export default FormProject
