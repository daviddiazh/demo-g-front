import actionsTypesAuth from "./actionsTypes/ActionsTypesAuth";

export const loginAction = (email, name, uid, photo, admin) => {
    return{
        type: actionsTypesAuth.LOGIN,
        payload: { email, name, uid, photo, admin }
    }
}

export const loggedAction = ( email, name, uid, photo, admin) => {
    return{
        type: actionsTypesAuth.LOGGED,
        payload: { email, name, uid, photo, admin }
    }
}

export const logoutAction = () => {
    return{
        type: actionsTypesAuth.LOGOUT,
        payload: null
    }
}
