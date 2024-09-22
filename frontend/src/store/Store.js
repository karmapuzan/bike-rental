import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { getBikeReducer } from '../reducers/BikeReducer'
import { registerUserReducer, LoginUserReducer, getCurrenUserReducer } from '../reducers/UserReducer'
import { adminLoginReducer,BikeDeleteReducer,AddBikeReducer,editBikeReducer } from '../reducers/AdminReducer'


const rootReducer = combineReducers({

    getBike:getBikeReducer,

    loginuser:LoginUserReducer,
    registeruser:registerUserReducer,
    getcurrentuser: getCurrenUserReducer,


    adminlogin:adminLoginReducer,
    bikeDelete:BikeDeleteReducer,
    addBike:AddBikeReducer,
    editBike:editBikeReducer
})


const store = configureStore({
    reducer:rootReducer
})

export default store