import React, { useState } from 'react'
import './Login.css'
import login_img from '../Img/login_img.png'

function Login() {

  const [email,setEmail]=useState("") 
  const [password,setPassword]=useState("") 
  const [name,setName]=useState("") 
  const [pic,setPic]=useState("") 

  const loginToApp=(e)=>{
     e.preventDefault();
  }

  const register=(e)=>{
    e.preventDefault();
    if(!name){
      return alert('Please enter your name!')
    }

    // now we are going to create a user using the auth and after creating the user we will get the profile picture of the user and user name then we will  push the user into the redux data layer



  }
  return (
    <div className='login'>
     <img src={login_img} alt="" />

     <form >
      <input value={name} onChange={e=>
        setName(e.target.value)} type="text" placeholder='Full Name' />

      <input value={pic} onChange={e=>
        setPic(e.target.value)}  type="text" placeholder='Profile pic Url' />

      <input value={email} onChange={e=>
        setEmail(e.target.value)} type="email" placeholder='Email' />

      <input value={password} onChange={e=>
        setPassword(e.target.value)} type="password" placeholder='Password' />

      <button type='submit' onClick={loginToApp}>Sign In</button>
     </form>

     <p>Not a member?{' '}
      <span className='login__register' onClick={register}>Register Now</span>
     </p>

    </div>
  )
}

export default Login
