import actionsTypesOneProject from "../actions/actionsTypes/ActionsTypeOneProject";

const initialState={
    oneProject:{},
    error:null,
    isLoading:false
}

const OneProjectReducer = (state = initialState, { type, payload }) => {
    switch(type){
        case actionsTypesOneProject.LOADING_SUCCESS_PROJECT:
            return{
                ...state,
                isLoading:true
            }
        case actionsTypesOneProject.LOAD_SUCCESS_PROJECT:
            return {
                ...state,
                oneProject:payload,
                isLoading:false
            }
        case actionsTypesOneProject.LOAD_FAILURE_PROJECT:
            return {
                ...state,
                error:payload,
                isLoading:false
            }
        default: return state;
    }
}

export default OneProjectReducer;
