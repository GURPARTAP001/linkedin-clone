import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="app">
      {/* header */}
      <Header />

{/* app body */}
    <div className="app__body">
      {/* sidebar */}
      <Sidebar/>
      {/* feed */}
      {/* widgets */}
    </div>
     
    </div>
  );
}

export default App;
