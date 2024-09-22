import { ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_FAIL, ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT,
    ADD_BIKES_FAIL, ADD_BIKES_REQUEST, ADD_BIKES_SUCCESS,
    BIKE_DELETE_FAIL, BIKE_DELETE_REQUEST, BIKE_DELETE_SUCCESS,
    BIKE_EDIT_FAIL,BIKE_EDIT_REQUEST,BIKE_EDIT_SUCCESS
 } from "../constants/AdminConstants";

 const data = localStorage.getItem('admin')
 const admininfo = data ? JSON.parse(data) : null

 const initialState = {
    loading: false,
    adminData: admininfo,
    error: null,
  };

  export const adminLoginReducer = (state =initialState, action)=>{
    switch(action.type){
        case ADMIN_LOGIN_REQUEST:
            return {loading:true}
        case ADMIN_LOGIN_SUCCESS:
            return {loading:false, adminData:action.payload}
        case ADMIN_LOGIN_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }

}

// export const adminfooditemreducer = (state={loading:false, adminfood:[]}, action)=>{
//     switch(action.type){
//         case ADMIN_FOODITEM_REQUEST:
//             return {loading:true}
//         case ADMIN_FOODITEM_SUCCESS:
//             return {loading:false, adminfood:action.payload}
//         case ADMIN_FOODITEM_FAIL:
//             return{loading:false, error:action.payload}
//         case ADMIN_DETAIL_DELETE_SUCCESS:
//             return {
//                 ...state, 
//                 loading: false,
//                 adminfood: state.adminfood.filter(item => item._id !== action.payload) // Assuming payload contains the deleted item's ID
//             };        default:
//             return state
//     }
// }

export const BikeDeleteReducer = (state ={loading:false}, action)=>{
    switch(action.type){
        case BIKE_DELETE_REQUEST:
            return {loading:true}
        // case ADMIN_DETAIL_DELETE_SUCCESS:
        //     return {loading:false, deleteData:action.payload}
        case BIKE_DELETE_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }

}


export const AddBikeReducer = (state= {loading:false}, action)=>{
    switch(action.type){
        case ADD_BIKES_REQUEST:
            return {loading:true}
        case ADD_BIKES_SUCCESS:
            return {loading:false, fooddata: action.payload}
        case ADD_BIKES_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state

    }
}


export const editBikeReducer = (state = {loading:false}, action)=>{
    switch(action.type){
        case BIKE_EDIT_REQUEST:
            return {loading:true}
        case BIKE_EDIT_SUCCESS:
            return {loading:false, editdata: action.payload}
        case BIKE_EDIT_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state

    }
}