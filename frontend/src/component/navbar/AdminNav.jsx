import React from 'react'
import { Link } from 'react-router-dom'

const AdminNav = () => {
  return (
    <div className='admin-navbar'>
    <div className="admin-nav-logo">
        <h1>Admin panel</h1>
    </div>
    <div className="admin-nav-page-link">
        <p><Link className='link' to="">Admin</Link></p>
        <p><Link className='link' to="">BIkes</Link></p>
        <p><Link className='link' to="">Users</Link></p>
        <p><Link className='link' to="">Add bikes</Link></p>

        <p>logout</p>
        
    </div>
  
</div>
  )
}

export default AdminNav
