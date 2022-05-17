import React from 'react';

import {
  Route,
  Switch,
} from 'react-router-dom';

import { About } from './About';
import { Contact } from './Contact';
import { MyErrors } from './MyErrors';

export const MyRouter = () => {
    const Name = ( )=> {
        return <h1>hello name</h1>;
    }
  return (
    <>
    <Switch >

        <Route exact path="/"  component={About}/>
        <Route exact path="/contact"  component={Contact}/>
        <Route path="/contact/name"  component={Name}/>
        <Route  component={MyErrors}/>
    
    </Switch>
        {/* <About />   
        <Contact /> */}
    </>
  )
}
