import api from "../store/Api";
import axios from "axios";
import { ADMIN_LOGIN_REQUEST,ADMIN_LOGIN_FAIL, ADMIN_LOGIN_SUCCESS, ADMIN_LOGOUT,
    ADD_BIKES_FAIL, ADD_BIKES_REQUEST, ADD_BIKES_SUCCESS,
    BIKE_DELETE_FAIL, BIKE_DELETE_REQUEST, BIKE_DELETE_SUCCESS,
    BIKE_EDIT_FAIL,BIKE_EDIT_REQUEST,BIKE_EDIT_SUCCESS
 } from "../constants/AdminConstants";


export const adminlogin = (email, password)=> async(dispatch)=>{
    dispatch({type:ADMIN_LOGIN_REQUEST, payload:{email, password}})

    try {
        console.log("tyring", email, password)
        const response = await axios.post('/api/v1/admin/login', { email, password });
        console.log("data action", response.data)
        dispatch({type:ADMIN_LOGIN_SUCCESS, payload:response.data.data.user})
        localStorage.setItem('admin' , JSON.stringify(response.data.data.user))
        localStorage.setItem('accessToken', response.data.data.accessToken)
        localStorage.setItem("refreshToken", response.data.data.refreshToken)
        
    } catch (error) {
        console.log("error", error.response.data)
        dispatch({type:ADMIN_LOGIN_FAIL, payload:error.response && error.response.data.message? error.response.data.message : error.message})

        
    }
}
export const adminLogout = ()=> async(dispatch)=>{
    localStorage.removeItem('admin')
    localStorage.removeItem('accessToken')
    localStorage.removeItem('refreshToken')

    dispatch({type:ADMIN_LOGOUT})
    document.location.href = '/adminlogin'

}


// export const AdminGetBikes = ()=> async(dispatch)=>{
//     dispatch({type:ADD_BIKES_REQUEST})

//     try {
       
//         const {data}= await axios.get('/api/v1/bike/getbike')
//         dispatch({type:ADD_BIKES_SUCCESS, payload:data.data})
    
        

        
//     } catch (error) {
//         console.log("admin bikes ", error?.response.data.message, error)
//         dispatch({type:ADD_BIKES_FAIL, payload:error.response && error.response.data?.message ? error.response.data?.message : error.message})


        
//     }
// }


export const AdminBikeDelete = (id) => async(dispatch)=>{
    dispatch({type:BIKE_DELETE_REQUEST, payload:id})

    try {
        console.log("typing delteing", id)
        await axios.delete(`/api/v1/bike/deletebike/${id}`)
        dispatch({type:BIKE_DELETE_SUCCESS, payload:id})
        
    } catch (error) {
        console.log("error", error.response)
        dispatch({type:BIKE_DELETE_FAIL, payload:error.response && error.response?.data.message ? error.response.data.message: error.message})
        

        
    }
}


export const adminAddBikes = (name, serialNumber, description, bikeType, price,image)=>async(dispatch)=>{
    dispatch({type:ADD_BIKES_REQUEST})

    try {
        console.log("trying", image)
        const {data} = await axios.post('/api/v1/bike/addbike', {name, serialNumber, description, bikeType, price,image},
           { headers: {
                'Content-Type': 'multipart/form-data',
            },}

        )
        dispatch({type:ADD_BIKES_SUCCESS, payload:data.data})
        console.log("fooditem data", data.data)
        
    } catch (error) {
        console.log("error", error.response)
        dispatch({type:ADD_BIKES_FAIL, payload:error.response && error.response?.data.message?error.response?.data.message: error.message })

        
    }
}

export const adminUpdateBike = (id, updateData)=> async(dispatch)=>{
    dispatch({type:BIKE_EDIT_REQUEST, payload:id})
    const config = {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    try {
        const {data} = await api.patch(`/api/v1/bike/updatebike/${id}`, updateData, config)
        dispatch({type:BIKE_EDIT_SUCCESS, payload:data.data})
        
    } catch (error) {
        dispatch({type:BIKE_EDIT_FAIL, payload:error.response && error.response.data.message ? error.response.data.message : error.message})
        

        
    }


}