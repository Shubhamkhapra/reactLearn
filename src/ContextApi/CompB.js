import React, { useContext } from 'react';

import {
  FirstName,
  LastName,
} from './Context';

const CompB = () => {
    const Fname = useContext(FirstName);
    const Lname = useContext(LastName);
    return (
        <h1> My Name is {Fname} {Lname}</h1>
    ) ;
}
export default CompB;