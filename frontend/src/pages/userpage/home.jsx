import React, { useEffect } from 'react'
import UserContainer from '../../component/container/UserContainer'
import AllBikeLIst from '../../component/BikeComponent/AllBikeLIst'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { GetBike } from '../../actions/BIkeAction'

const Home = () => {

  const dispatch = useDispatch()

  const {bikes} = useSelector((state)=> state.getBike)

  useEffect(()=>{
    dispatch(GetBike())

  },[])
  return (
    <UserContainer>
    <div> home page
     <AllBikeLIst bikes = {bikes}/>
    </div>
    </UserContainer>
  )
}

export default Home
