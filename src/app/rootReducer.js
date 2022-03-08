import { combineReducers } from "@reduxjs/toolkit";
import reducerProjects from "../reducers/ProjectsReducer";
import OneProjectReducer from "../reducers/OneProjectReducer";
import reducerAuth from "../reducers/AuthReducer";
import myProjectReducer from "../reducers/MyProjectsReducer";

const rootReducer = () => {
    return combineReducers({
        project: reducerProjects,
        auth: reducerAuth,
        oneProject: OneProjectReducer,
        myProject: myProjectReducer
    })
}

export default rootReducer;