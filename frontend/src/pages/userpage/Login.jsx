import React, { useEffect, useState } from 'react'
import UserContainer from '../../component/container/UserContainer'
import { UserLogin } from '../../actions/UserAction'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState("")
    const {loginuser, loading, error} = useSelector((state)=>state.loginuser)
    console.log(loginuser)

    const handleLogin = (e)=>{
        e.preventDefault()
         dispatch(UserLogin(email, password))
        
    }

    useEffect(()=>{
        if(loginuser){
            alert("login success")
            navigate('/')
        }

    },[])
  return (
    <UserContainer>
    <div>
        <h1>login</h1>

        <form onSubmit={handleLogin}>
            <label htmlFor="login">email: </label>
            <input type="text" name="login" id="login" value={email}  onChange={(e)=>setemail(e.target.value)}/>

            <label htmlFor="password">password</label>
            <input type="password" name="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>

            <button type="submit">login</button>
        </form>
        <div className="error-loading">
            {error && <p>{error}</p>}
            {loading && <p>loading ..</p>}
        </div>
      
    </div>
    </UserContainer>
  )
}

export default Login
