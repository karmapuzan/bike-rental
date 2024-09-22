import React from 'react'

const AdminLogin = () => {

    const handleLogin = ()=>{
        console.log("loggin in")
    }
  return (
    <div>
        <h1>login</h1>

        <form onSubmit={handleLogin}>
            <label htmlFor="login">email: </label>
            <input type="text" name="login" id="login" />

            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" />

            <button type="submit">login</button>
        </form>
      
    </div>
  )
}

export default AdminLogin
