import { act } from "react-dom/test-utils";
import actionsTypesProjects from "./actionsTypes/ActionsTypesProjects";

export const projectsLoading = () => {
    return{
        type: actionsTypesProjects.LOADING,
    }
}

export const projectsLoadSucces = (projects) => {
    return{
        type: actionsTypesProjects.LOAD_SUCCESS,
        payload: projects
    }
} 

export const projectsLoadError = (error) => {
    return{
        type: actionsTypesProjects.LOAD_FAILURE,
        payload: error
    }
}

export const deleteProjectLoad = (project) => {
    return{
        type: actionsTypesProjects.DELETE_SUCCESS_PROJECT,
        payload: project
    }
}
