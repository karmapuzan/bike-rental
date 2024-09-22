import {combineReducers, configureStore} from '@reduxjs/toolkit'
import { getBikeReducer } from '../reducers/BikeReducer'
import { registerUserReducer, LoginUserReducer, getCurrenUserReducer } from '../reducers/UserReducer'


const rootReducer = combineReducers({

    getBike:getBikeReducer,

    loginuser:LoginUserReducer,
    registeruser:registerUserReducer,
    getcurrentuser: getCurrenUserReducer,
})


const store = configureStore({
    reducer:rootReducer
})

export default store