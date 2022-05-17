import React from 'react';

import {
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';

import { About } from './About';
import { Contact } from './Contact';
// import { Error } from './Error';
import { Search } from './Search';
import { Services } from './Services';
import { User } from './User';

// import Navbar from './Navbar';

export const MyRouterLatest = () => {
    const Name = ( )=> {
        return <h1>hello name</h1>;
    }
  return (
    <Routes >
        {/* <Navbar /> */}
        <Route exact path="/"  element={<About name="About" />}/>
        <Route exact path="/contact"  element={<Contact name="Contact" />}/>
        <Route exact path="/services"  element={<Services name="Services"/>}/>
        <Route exact path="/search"  element={<Search />} /> 
        <Route exact path="/user" > 
          <Route exact path=":fname/:lname"  element={<User />}/>
        </Route>
        <Route path="/contact/name"  element={<Name />}/>
          <Route path='*' element={<Navigate  replace to ="/" />} />
        </Routes>
        
        )
      }
      
// <Route path='*' element={<Error/> } />