import React, { useEffect } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import { login, logout, selectUser } from './features/userSlice';
import {auth} from './firebase'
import Widget from './components/Widget';

function App() {

  // Below we are pulling the user from the redux data layer using the selector
  const user = useSelector(selectUser)
  const dispatch=useDispatch();

  useEffect(()=>{
    auth.onAuthStateChanged((userAuth)=>{
      if(userAuth){
        //user is logged in 
        dispatch(
          login({
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl:userAuth.photoURL,
          })
        );
      }else{
        //user is logged out
        dispatch(logout());
      }

    })
  },[])


  return (
    <div className="app">
      {/* header */}
      <Header />

      {/* now we will say that if there is no user then render the login page else render the rest of the app */}

      {!user ?
        (<Login />) :

        < div className="app__body">
          {/* sidebar */}
          <Sidebar />
          {/* feed */}
          <Feed />
          {/* widgets */}
          <Widget/>
        </div>
      }



    </div >
  );
}

export default App;
