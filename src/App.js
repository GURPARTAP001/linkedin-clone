import React from 'react';
import './App.css';
import { useSelector } from 'react-redux'
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Feed from './components/Feed';
import Login from './components/Login';
import { selectUser } from './features/userSlice';

function App() {

  // Below we are pulling the user from the redux data layer using the selector
  const user = useSelector(selectUser)


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
        </div>
      }



    </div >
  );
}

export default App;
