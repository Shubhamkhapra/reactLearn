import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

import { NavLink } from 'react-router-dom';

function NavbarNew() {
  return (
    <>
    <div className='d-flex justify-content-around flex-wrap bg-black text-white  text-wrap lh-base pt-3 pb-3'>
      <NavLink exact className='bg-black text-decoration-none'  activeClassName='active_class' to="./">AboutUs</NavLink>

      <NavLink exact className='bg-black text-decoration-none'  activeClassName='active_class' to="./contact">contactUs</NavLink>

      <NavLink exact className='bg-black text-decoration-none'  activeClassName='active_class' to="./services">Services</NavLink>
      
      <NavLink exact className='bg-black text-decoration-none'  activeClassName='active_class' to="./search">Search</NavLink>
      
      <NavLink exact className='bg-black text-decoration-none'  activeClassName='active_class' to="./user/shubham/khapra">User</NavLink>
      
    
    </div>
    </>
  );
}

export default NavbarNew;