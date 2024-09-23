import { REGISTER_USER_FAIL, REGISTER_USER_REQUEST,REGISTER_USER_SUCCESS,
    LOGIN_USER_FAIL,LOGIN_USER_REQUEST,LOGIN_USER_SUCCESS, GET_CURRENT_USER_FAIL,
     GET_CURRENT_USER_REQUEST, GET_CURRENT_USER_SUCCESS, GET_ALL_USER_FAIL, GET_ALL_USER_REQUEST, GET_ALL_USER_SUCCESS
 } from "../constants/userConstants";

export const registerUserReducer = (state= {loading:false}, action) =>{
    switch(action.type){
        case REGISTER_USER_REQUEST:
            return {loading:true}
        case REGISTER_USER_SUCCESS:
            return {loading:false, registeruser:action.payload}
        case REGISTER_USER_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}

export const LoginUserReducer = (state= {loading:false}, action) =>{
    switch(action.type){
        case LOGIN_USER_REQUEST:
            return {loading:true}
        case LOGIN_USER_SUCCESS:
            return {loading:false, loginuser:action.payload}
        case LOGIN_USER_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}

export const getCurrenUserReducer = (state={loading:false}, action)=>{
    switch(action.type){
        case GET_CURRENT_USER_REQUEST:
            return {loading:false}
        case GET_CURRENT_USER_SUCCESS:
            return {loading:false, user:action.payload}
        case GET_CURRENT_USER_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }

 }

 export const DisplayUserReducer = (state = {loading:false}, action)=>{
    switch(action.type){
        case GET_ALL_USER_REQUEST:
            return {loading:true}
        case GET_ALL_USER_SUCCESS:
            return {loading:false, UserData:action.payload}
        case GET_ALL_USER_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}