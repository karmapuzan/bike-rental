import React from 'react'
import AdminContainer from '../../component/container/AdminContainer'
import './admin.css'

const AdminPanel = () => {
  return (
    <AdminContainer>
    <div className='admin-panel-cont'>
        <h1>admin</h1>

        <div className="admin-panel-continer">
            <div className="admin-panal-card">
                    Rentals
            </div>
            <div className="admin-panal-card">
                    Top Bikes
            </div>
        </div>
      
    </div>
    </AdminContainer>
  )
}

export default AdminPanel

