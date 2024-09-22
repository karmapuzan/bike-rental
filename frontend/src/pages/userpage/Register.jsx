// import React, { useEffect, useState } from 'react'
// import UserContainer from '../../component/container/UserContainer'
// import { UserRegister } from '../../actions/UserAction'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import './user.css';


// const Register = () => {
//     const dispatch = useDispatch()
//     const navigate = useNavigate()
//     const [name, setname] = useState("")
//     const [email, setemail] = useState("")
//     const [address, setaddress] = useState("")
//     const [password, setpassword] = useState("")
//     const [contact, setcontact] = useState("")

//     const {registeruser, loading, error} = useSelector((state)=> state.registeruser) 

//     console.log("registeruser", registeruser)





//     const handleRegister = (e)=>{
//         e.preventDefault()
//         dispatch(UserRegister(name, email, password, address, contact))
//         setaddress("")
//         setname("")
//         setemail("")
//         setpassword("")
//         setcontact("")
//     }

//     useEffect(()=>{
//         if(registeruser){
//             navigate('/login')

//         }
//     },[])
// return (
//     <UserContainer>
//         <section className='main'>
//     <div className="container" >
//         <h1>User Register</h1>
//         <form className="form" onSubmit={handleRegister}>
//             <div className='input-box'>
//                 <label htmlFor="name">name</label>
//                 <input type="text" name="name" id="name" value={name} onChange={(e)=>setname(e.target.value)}/>
//             </div>

//             <div className='input-box'>
//             <label htmlFor="email">email</label>
//             <input type="email" name="email" id="email" value={email} onChange={(e)=>setemail(e.target.value)}/>
//             </div>

//             <div className='input-box'>
//             <label htmlFor="address">address</label>
//             <input type="text" name="address" id="address" value={address} onChange={(e)=>setaddress(e.target.value)}/>
//             </div>

//             <div className='input-box'>
//             <label htmlFor="password">password</label>
//             <input type="password" name="password" id="password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
//             </div>

//             <div className='input-box'>
//             <label htmlFor="contact">contact: </label>
//             <input type="number" name="contact" id="contact" value={contact} onChange={(e)=>setcontact(e.target.value)}/>
//             </div>         
            
            
            
    

//             <button type="submit">register</button>
//         </form>

//         <div className="error-loading">
//         <p>{error && <p>error</p>}</p> 
//         {loading && <p>loading ... </p>}
//         </div>

//     </div>
//     </section>
//     </UserContainer>
// )
// }

// export default Register



import React, { useEffect, useState } from 'react';
import UserContainer from '../../component/container/UserContainer';
import { UserRegister } from '../../actions/UserAction';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');
    const [contact, setContact] = useState('');

    const { registeruser, loading, error } = useSelector((state) => state.registeruser);

    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(UserRegister(name, email, password, address, contact));

        setName('');
        setEmail('');
        setAddress('');
        setPassword('');
        setContact('');
    };

    useEffect(() => {
        if (registeruser) {
            navigate('/login');
        }
    }, [registeruser, navigate]);

    return (
        <UserContainer>
            <div>
                <h1>Register</h1>

                <form onSubmit={handleRegister}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        name="address"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <label htmlFor="contact">Contact</label>
                    <input
                        type="number"
                        name="contact"
                        id="contact"
                        value={contact}
                        onChange={(e) => setContact(e.target.value)}
                    />

                    <button type="submit" disabled={loading}>
                        Register
                    </button>
                </form>

                <div className="error-loading">
                    {error && <p>{error}</p>}
                    {loading && <p>Loading ... </p>}
                </div>
            </div>
        </UserContainer>
    );
};

export default Register;
