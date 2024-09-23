import React, { useEffect } from 'react'
import AdminContainer from '../../component/container/AdminContainer'
import { GetBike } from '../../actions/BIkeAction'
import { useDispatch,useSelector } from 'react-redux'
// import AllBikeLIst from '../../component/BikeComponent/AllBikeLIst'


const AdminBikes = () => {
  const dispatch = useDispatch()

  const {bikes} = useSelector((state)=> state.getBike)

  useEffect(()=>{
    dispatch(GetBike())

  },[])
    // const bikes = [
    //     {
    //       "name": "Mountain Bike",
    //       "serialNumber": "MTB123456",
    //       "description": "A high-performance mountain bike designed for rugged terrains.",
    //       "bikeType": "Mountain",
    //       "price": 1200,
    //       "status": "available"
    //     },
    //     {
    //       "name": "Road Bike",
    //       "serialNumber": "RDB987654",
    //       "description": "Lightweight road bike built for speed on paved surfaces.",
    //       "bikeType": "Road",
    //       "price": 1000,
    //       "status": "available"
    //     },
    //     {
    //       "name": "Hybrid Bike",
    //       "serialNumber": "HYB654321",
    //       "description": "Versatile hybrid bike suitable for both city streets and trails.",
    //       "bikeType": "Hybrid",
    //       "price": 800,
    //       "status": "unavailable"
    //     },
    //     {
    //       "name": "Electric Bike",
    //       "serialNumber": "ELB192837",
    //       "description": "An electric bike with pedal assist for effortless commuting.",
    //       "bikeType": "Electric",
    //       "price": 1500,
    //       "status": "maintenance"
    //     },
    //     {
    //       "name": "Folding Bike",
    //       "serialNumber": "FLD746382",
    //       "description": "Compact folding bike for easy storage and transport.",
    //       "bikeType": "Folding",
    //       "price": 700,
    //       "status": "available"
    //     },
    //     {
    //       "name": "BMX Bike",
    //       "serialNumber": "BMX345890",
    //       "description": "Durable BMX bike perfect for stunts and tricks.",
    //       "bikeType": "BMX",
    //       "price": 600,
    //       "status": "available"
    //     },
    //     {
    //       "name": "Touring Bike",
    //       "serialNumber": "TBG102938",
    //       "description": "Comfortable touring bike designed for long-distance rides.",
    //       "bikeType": "Touring",
    //       "price": 1300,
    //       "status": "available"
    //     },
    //     {
    //       "name": "Cruiser Bike",
    //       "serialNumber": "CRB473920",
    //       "description": "Stylish cruiser bike for relaxed rides along the beach or city.",
    //       "bikeType": "Cruiser",
    //       "price": 750,
    //       "status": "unavailable"
    //     },
    //     {
    //       "name": "Cyclocross Bike",
    //       "serialNumber": "CXB384756",
    //       "description": "A rugged cyclocross bike built for off-road racing.",
    //       "bikeType": "Cyclocross",
    //       "price": 1100,
    //       "status": "available"
    //     },
    //     {
    //       "name": "Gravel Bike",
    //       "serialNumber": "GRV295847",
    //       "description": "Gravel bike for mixed terrain riding and bikepacking adventures.",
    //       "bikeType": "Gravel",
    //       "price": 1400,
    //       "status": "available"
    //     }
    //   ]
  return (
    <AdminContainer>
      <div className='admin-cont'>
        <h1>admincontainer</h1>



            {bikes && bikes.map((bike,index)=>(

            <div className="adminBikes-content" key={index}>
               <p className='name'>{bike?.name}</p>
            <p className='serialNumber'>{bike?.serialNumber}</p>
            <p className='description'>{bike?.description}</p>
            <p className='bikeType'>{bike?.bikeType}</p>
            <p className='price'>{bike?.price}</p>
            <img src={bike?.image} className='image' alt="" />
            <div className='adminbtn'>
                <button>edit</button>
                <button>delete</button>
            </div>
            

            </div>
            ))}



    </div>
    </AdminContainer>
  
  )
}

export default AdminBikes
