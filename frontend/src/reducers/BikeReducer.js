import { GET_BIKE_FAIL,GET_BIKE_REQUEST,GET_BIKE_SUCCESS } from "../constants/BikeConstants";


export const getBikeReducer = (state={loading:false}, action)=>{
    switch(action.type){
        case GET_BIKE_REQUEST:
            return {loading:true}
        case GET_BIKE_SUCCESS:
            return {loading:false, bikes:action.payload}
        case GET_BIKE_FAIL:
            return {loading:false, error:action.payload}
        default:
            return state
    }
}