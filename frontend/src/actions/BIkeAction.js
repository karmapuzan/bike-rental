import { GET_BIKE_FAIL, GET_BIKE_REQUEST, GET_BIKE_SUCCESS } from "../constants/BikeConstants";
import axios from 'axios'


export const GetBike = ()=> async(dispatch)=>{
    dispatch({type:GET_BIKE_REQUEST})

    try{
        const {data} = await axios.get('/api/v1/bike/getbike')
        dispatch({type:GET_BIKE_SUCCESS, payload:data.data})
        console.log("bike data", data)

    }catch(error){

        console.log("error", error.response.data)
    dispatch({type: GET_BIKE_FAIL, payload:error.response && error.response.data.message ?
       error.response.data.message : error.message})
    }

}