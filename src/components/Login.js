import React, { useState } from 'react'
import './Login.css'
import login_img from '../Img/login_img.png'
import {  createUserWithEmailAndPassword,signInWithEmailAndPassword,updateProfile } from 'firebase/auth'
import{auth} from '../firebase'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'

function Login() {

  const [email,setEmail]=useState("") 
  const [password,setPassword]=useState("") 
  const [name,setName]=useState("") 
  const [profilePic,setProfilePic]=useState("") 
  const dispatch=useDispatch();

  const loginToApp=(e)=>{
     e.preventDefault();

     signInWithEmailAndPassword(auth,email,password).then((userAuth)=>{
      dispatch(login({
        email:userAuth.user.email,
        uid:userAuth.user.uid,
        displayName:userAuth.user.displayName,
        photoUrl:userAuth.user.photoURL,
      })
      );
     }).catch(err=>alert(err));
  };

  const register=(e)=>{
    e.preventDefault();
    if(!name){
      return alert('Please enter your name!')
    }

    // now we are going to create a user using the auth and after creating the user we will get the profile picture of the user and user name then we will  push the user into the redux data layer

    createUserWithEmailAndPassword(auth,email,password)
    .then((userAuth)=>{
      console.log(userAuth.user)
     updateProfile( userAuth.user,{
        // here we are assigning the values to the keys of the firebase with our values
        displayName:name,
        photoURL:profilePic,
      })
      .then(()=>{
        // now inside this we are pushing the user into the redux data layer using the dispatch
        dispatch(login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:name,
            photoUrl:profilePic,
        }));
      });
    }).catch(error=>alert(error));

  };
  return (
    <div className='login'>
     <img src={login_img} alt="" />

     <form >
      <input value={name} onChange={e=>
        setName(e.target.value)} type="text" placeholder='Full Name' />

      <input value={profilePic} onChange={e=>
        setProfilePic(e.target.value)}  type="text" placeholder='Profile pic Url' />

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
