import React, { useEffect } from 'react'
import AdminContainer from '../../component/container/AdminContainer'
import { GetBike } from '../../actions/BIkeAction'
import { useDispatch,useSelector } from 'react-redux'
// import AllBikeLIst from '../../component/BikeComponent/AllBikeLIst'
import { AdminBikeDelete } from '../../actions/AdminAction'


const AdminBikes = () => {
  const dispatch = useDispatch()

  const {bikes} = useSelector((state)=> state.getBike)

  useEffect(()=>{
    dispatch(GetBike())

  },[])

  const handleEdit = (id)=>{
    console.log("editing",id)

  }
  const handleDelete = (id)=>{
    console.log("deleting",id)
    dispatch(AdminBikeDelete(id))

  }

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
                <button onClick={()=>handleEdit(bike?._id)}>edit</button>
                <button onClick={()=>handleDelete(bike?._id)}>delete</button>
            </div>
            

            </div>
            ))}



    </div>
    </AdminContainer>
  
  )
}

export default AdminBikes
