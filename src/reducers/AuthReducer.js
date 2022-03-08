import actionsTypesAuth from "../actions/actionsTypes/ActionsTypesAuth";

const initialState = {
    user: {},
}

const reducerAuth = (state = initialState, {type, payload}) => {

    switch(type){
        case actionsTypesAuth.LOGIN:
            return{
                ...state,
                user: payload,
            }
        case actionsTypesAuth.LOGGED:
            return{
                ...state,
                user: payload,
            }
        case actionsTypesAuth.LOGOUT:
            return{
                ...state,
                user: null,
            }
        default: return state;
    }

}

export default reducerAuth;