import actionsTypesOneProject from "./actionsTypes/ActionsTypeOneProject";

export const oneProjectLoadSucces = ( project ) => {
    return{
        type: actionsTypesOneProject.LOAD_SUCCESS_PROJECT,
        payload: project
    }
}

export const oneProjectLoading = () => { //TODO: Revisarlo como parametro de entrada.
    return{
        type: actionsTypesOneProject.LOADING_SUCCESS_PROJECT,
    }
}

export const oneProjectLoadError = (error) => {
    return{
        type: actionsTypesOneProject.LOAD_FAILURE_PROJECT,
        payload: error
    }
}