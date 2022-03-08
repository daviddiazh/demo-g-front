import { projectsLoading, projectsLoadSucces, projectsLoadError, deleteProjectLoad } from "../../actions/ProjectsActions"; 
import { oneProjectLoadSucces, oneProjectLoadError, oneProjectLoading } from "../../actions/OneProjectActions";
import { myProjectsLoadSucces, myProjectsLoading, myProjectsLoadError, myProjectsDelete } from "../../actions/MyProjectsActions";
import { loginAction } from "../../actions/AuthorActions";
import axios from "axios";


const urlBase = "http://localhost:8080";

export const loadAllProject = () => (dispatch) => {

    dispatch(projectsLoading())

    const options = {
        method: 'GET',
        url: `${urlBase}/getAll`,
        headers: { 'Content-Type': 'application/json' }
    };

    axios.request(options).then(function(response){
        dispatch(projectsLoadSucces(response.data))
    }).catch(function(error){
        dispatch(projectsLoadError(error.message))
    });

}

export const loadById = (id) => (dispatch) => {
    dispatch(oneProjectLoading())
    const options = {
        method: 'GET',
        url: `${urlBase}/get/${id}`,
        headers: { 'Content-Type': 'application/json' }
    };

    axios.request(options).then(function(response){
        dispatch(oneProjectLoadSucces(response.data))
    }).catch(function(error){
        dispatch(oneProjectLoadError(error.message))
    });
}

export const postProject = (project, navigate) => {

    const options = {
        method: 'POST',
        url: `${urlBase}/create`,
        headers: { 'Content-Type': 'application/json' },
        data: project
    };

    axios.request(options).then(function (response){
        navigate("/private/ProjectCreated") //ProjectsPage
    }).catch(function (error){
        console.error(error);
    });

}

export const postComentary = ( userId, projectId, data, toast ) => (dispatch) => {

    const options = {
        method: 'POST',
        url: `${urlBase}/add`,
        headers: { 'Content-Type': 'application/json' },
        data: { userId: userId, projectId: projectId, comentary: data }
    };

    axios.request(options).then(function(response){

        toast.success('Comentario creado con exito', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
        console.log(response.data)
        dispatch(oneProjectLoadSucces(response.data))

    }).catch(function (error){
        console.error(error.message);
    });

}

export const deleteComentary = (id) => (dispatch) => {

    const options = {
        method: 'DELETE',
        url: `${urlBase}/comentary/${id}`
    };

    axios.request(options).then(function (response){
        dispatch(loadById(response.data))
    }).catch(function(error){
        console.error(error);
    });

}

export const deleteProject = ( id, toast ) => (dispatch) => {

    const options = {
        method: 'DELETE',
        url: `${urlBase}/delete/${id}`
    };

    axios.request(options).then(function (response){
        dispatch(loadAllProject())

        toast.success('Comentario eliminado con exito', {
            position: "top-right",
            autoClose: 2500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    }).catch(function (error){
        console.error(error);
    });

}

export const getUserProject = ( userId ) => (dispatch) => {

    dispatch(myProjectsLoading())

    const options = {
        method: 'GET',
        url: `${urlBase}/getOwnerAll/${userId}`,
        headers: {'Content-Type': 'application/json'}
    };

    axios.request(options).then(function(response){
        dispatch(myProjectsLoadSucces(response.data));
    }).catch(function (error){
        dispatch(myProjectsLoadError(error.message));
    });

}

export const postUser = (email, uid, url, name ) => async (dispatch) => {

    const options = {
        method: 'POST',
        url: `${urlBase}/createUser`,
        headers: { 'Content-Type': 'application/json' },
        data: { uid: uid, email: email, pictureUrl: url, name: name }
    };

    await axios.request(options).then(function (response){
        console.info(response.data);
    }).catch(function (error){
        console.error(error);
    });

}

export const getUser=(uid)=> async(dispatch)=>{

    const options = {
      method: 'GET',
      url: `${urlBase}/getUser/${uid}`,
      headers: {'Content-Type': 'application/json'},
    };
    
    await axios.request(options).then(function (response) {
      dispatch(loginAction(response.data.email, response.data.name, response.data.uid, response.data.pictureUrl));
    }).catch(function (error) {
      console.error(error);
    });
}

export const updateName=(data)=>(dispatch)=>{

    const options = {
      method: 'PUT',
      url: `${urlBase}/updateUser`,
      headers: {'Content-Type': 'application/json'},
      data: data
    };
    
    axios.request(options).then(function (response) {
        dispatch(loginAction(response.data));
    }).catch(function (error) {
        console.error(error);
    });
  
}

