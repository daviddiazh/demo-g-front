import actionsTypesProjects from "../actions/actionsTypes/ActionsTypesProjects"

const initialState={

    isLoading:false,
    projects:null,
    error:null

}

const ProjectsReducer = (state = initialState, { type, payload }) => {
    switch(type){

        case actionsTypesProjects.LOADING:
            return {
                ...state,
                isLoading: true,
            }
        case actionsTypesProjects.LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                projects: payload
            }
        case actionsTypesProjects.LOAD_FAILURE:
            return {
                ...state,
                isLoading:false,
                error:payload
            }
        case actionsTypesProjects.DELETE_SUCCESS_PROJECT:
            return {
                ...state,
                projects: payload.filter(project => project.id !== payload.id)
            }
                

        default: return state;
    }
}

export default ProjectsReducer