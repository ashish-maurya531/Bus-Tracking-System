import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Login from './Login/Login.jsx'
//test

import './App.css'
import Portal from './Portal/Portal.jsx';


function App() {

  return (
    
    <BrowserRouter>
      <Routes>
          {/* <Route index element={<Home />} /> */}
          <Route path="login" element={<Login />} />
          <Route path="portal" element={<Portal />} />
   


      </Routes>
    </BrowserRouter>
    
   
  
);
}

export default App
