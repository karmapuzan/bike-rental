import React, { useEffect } from 'react'
import UserContainer from '../../component/container/UserContainer'
import AllBikeLIst from '../../component/BikeComponent/AllBikeLIst'
import axios from 'axios'

const Home = () => {

const fetchproduct =async()=>{

  const response = await axios.get('/api/v1/bike/getbike')
  console.log("response", response)
}

  useEffect(()=>{
    fetchproduct()

  },[])
  return (
    <UserContainer>
    <div> home page
     <AllBikeLIst/>
    </div>
    </UserContainer>
  )
}

export default Home
