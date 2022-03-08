import actionsTypesMyProject from "../actions/actionsTypes/ActionsTypeMyProjects";

const initialState = {
    isLoading: false,
    myProjects: null,
    error: null
}

const myProjectReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case actionsTypesMyProject.LOADING_SUCCESS_MY_PROJECTS:
            return {
                ...state,
                isLoading:true,
            }
        case actionsTypesMyProject.LOAD_SUCCESS_MY_PROJECTS:
            return {
                ...state,
                isLoading:false,
                myProjects:payload
            }
        case actionsTypesMyProject.LOAD_FAILURE_MY_PROJECTS:
            return {
                ...state,
                isLoading:false,
                error:payload
            }
        case actionsTypesMyProject.DELETE_SUCCESS:
            return{
                ...state,
                isLoading: false,
                error: null,
                myProjects: state.myProjects.filter(project => project.id !== payload)
            }
        default: return state;
    }
}

export default myProjectReducer;