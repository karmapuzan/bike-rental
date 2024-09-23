import React from 'react'
import { useNavigate, Link  } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import { adminlogin } from '../../actions/AdminAction';
import { useState,useEffect } from 'react';
import AdminContainer from '../../component/container/AdminContainer';

const AdminLogin = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const {adminData, loading, error} = useSelector((state)=>state.adminlogin)
  
  // useEffect(() => {
  //   if (adminData) {
  //     navigate('/admin');
  //   }
  // }, [adminData, navigate]);

  const handleAdminLogin = (e) => {
    e.preventDefault();
    dispatch(adminlogin({ email, password }));
  };
  return (
    
    <div>
        <h1>login</h1>

        <form onSubmit={handleAdminLogin}>
            
            <input
              type="email"
              name="email"
              id="email"
              placeholder='example@gmail.com'
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
            
            <input
              type="password"
              name="password"
              id="password"
              placeholder='enter your password'
              value={password}
              onChange={(e) => setpassword(e.target.value)}
            />
            <button type="submit">Login</button>

            <div className="error-loading">
              {error && <p>{error}</p>}
              {loading && <p>loading ...</p>}
            </div>
            
          </form>
      
    </div>
    
  )
}

export default AdminLogin
