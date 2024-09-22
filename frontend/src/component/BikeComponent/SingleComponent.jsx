import React from 'react'
import './bikecomponent.css'

const SingleComponent = ({bike}) => {
  return (
    <div className='single-product-componetn'>

        <div className="image">
            <img src="" alt="product image" />

        </div>

        <div className="single-product-info">
            <p><span>name: </span>{bike?.name}</p>
            <p><span>serialNumber: </span>{bike?.serialNumber}</p>
            <p><span>description: </span>{bike?.description}</p>
            <p><span>type: </span>{bike?.bikeType}</p>
            <p><span>price: </span>{bike?.price}</p>
            <p><span>status: </span>{bike?.status}</p>
        </div>
        
            <button>rent bike</button>
    

        

      
    </div>
  )
}

export default SingleComponent
