import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom';


const Sidebar = () => {
  const [active,setActive]= useState(1);
  return (
    <div className='sidebar d-flex justify-content-between flex-column bg-dark text-white py-3 ps-2 pe-5 vh-100'>
      <div>
        <a href='#' className='p-3 text-decoration-none text-white'>
          <i className='bi bi-code-slash'></i>
          <span className='fs-4'> Sidebar</span>
        </a>
        <hr className='text-white mt-2' />
        <ul className='nav nav-pills flex-column mt-2'>
          <li className={ active === 1 ?'active nav-item p-2':'nav-item p-2'} onClick={e =>setActive(1)}>
            <Link to='/' className='p-3 text-decoration-none text-white'>
              <i className='bi bi-speedometer2 me-3 fs-5'></i>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className={ active === 2 ?'active nav-item p-2':'nav-item p-2'} onClick={e =>setActive(2)}>
            <Link to='/users' className='p-3 text-decoration-none text-white'>
              <i className='bi bi-people me-3 fs-5'></i>
              <span>Users</span>
            </Link>
          </li>
          <li className={ active === 3 ?'active nav-item p-2':'nav-item p-2'} onClick={e =>setActive(3)}>
            <Link to='orders' className='p-3 text-decoration-none text-white'>
              <i className='bi bi-table me-3 fs-5'></i>
              <span>Orders</span>
            </Link>
          </li>
          <li className={ active === 4 ?'active nav-item p-2':'nav-item p-2'} onClick={e =>setActive(4)}>
            <span className='p-3 text-decoration-none text-white'>
              <i className='bi bi-grid me-3 fs-5'></i>
              <span>Report</span>
            </span>
          </li>
        </ul>
      </div>
      <div>
        <hr className='text-decoration-none text-white' />
        <div className='nav-item'>
          <a href='#' className='p-1 text-white'>
            <i className='bi bi-person-circle me-3 fs-4'></i>
            <span>Raju</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
