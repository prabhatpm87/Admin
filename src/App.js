import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Users from './components/Users';
import Order from './components/Order';

function App() {
  return (
    <BrowserRouter>
    <div className='d-flex'>
      <div className='w-auto'>
        <Sidebar />
      </div>
      <div className='col'>
       
        <Routes>
          <Route path='/' element={<><Navbar/><Home/></>}></Route>
          <Route path='/users' element={<><Users/></>}></Route>
          <Route path='/orders' element={<><Order/></>}></Route>
        </Routes>
        
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
