import actionsTypesMyProject from "./actionsTypes/ActionsTypeMyProjects";

export const myProjectsLoading = () => {
    return{
        type: actionsTypesMyProject.LOADING_SUCCESS_MY_PROJECTS
    }
}

export const myProjectsLoadSucces = (projects) => {
    return{
        type: actionsTypesMyProject.LOAD_SUCCESS_MY_PROJECTS,
        payload: projects
    }
}

export const myProjectsDelete = (id) => {
    return{
        type: actionsTypesMyProject.DELETE_SUCCESS,
        payload: id
    }
}

export const myProjectsLoadError = (error) => {
    return {
        type: actionsTypesMyProject.LOAD_FAILURE_MY_PROJECTS,
        payload: error
    }
}