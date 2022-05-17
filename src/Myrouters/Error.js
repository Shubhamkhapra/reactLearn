import '../../node_modules/bootstrap/dist/css/bootstrap.css';

import React from 'react';

import { NavLink } from 'react-router-dom';

export const Error = () => {
  return (
      <div className='bg-light text-black text-center'>
      <h1>404 </h1>
      <p>Error page not found</p>
      <NavLink to="./"> GoBack </NavLink>
      </div>
    
  )
}
