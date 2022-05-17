import React from 'react';

import {
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';

export const User = () => {
    const {fname, lname} = useParams();
    const location = useLocation();
    const history = useNavigate();
  return (
      <>
        <h1> User {fname} {lname} page</h1> 
        <p>My current location is {location.pathname}</p>
        {
            location.pathname === `/user/shubham/khapra` ? 
            (<button onClick={ ()=>{history("/", { replace: true })}}>Click me</button>): null
        }
      </>
  )
}
