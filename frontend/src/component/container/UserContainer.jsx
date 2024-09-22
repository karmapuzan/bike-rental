import React from 'react'
import Footer from '../navbar/footer'
import Navbar from '../navbar/navbar'

const UserContainer = ({children}) => {
  return (
    <div>
        <Navbar/>
        
        {children}
        <Footer/>
      
    </div>
  )
}

export default UserContainer
