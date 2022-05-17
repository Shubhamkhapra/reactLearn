import React from 'react';

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <>
    <div>
      <a href='/' >AboutUs</a>
      <a href='/contact' >ContactUs</a>
      <br/><br/>
      <NavLink exact activeClassName='active_class' to="/">Click to view our about page</NavLink>
      <NavLink exact activeClassName='active_class' to="contact">Click to view our contact page</NavLink>
      {/* <br/><br/>
      <Link to="/">Click to view our about page</Link>
      <Link to="contact">Click to view our contact page</Link> */}

      

    </div>
    </>
  );
}

export default Navbar;