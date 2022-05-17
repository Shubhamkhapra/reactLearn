import React, { createContext } from 'react';

import CompA from './CompA';

// Parent Component
// CHild component A
// child component B
// child COmponent C
// So react hooks provides a concept call context.
// React Context Api allows you to easily access data at different levels of the component tree,
// without passing props to every level

//  1.createContext()   2.Provider 3.Consumer

export let FirstName = createContext();
export let LastName = createContext();
export const Context = () => {
    return (
            <FirstName.Provider value="shubham">
                <LastName.Provider value="Khapra">

                {/* <CompC /> */} 
                <CompA />                
                </LastName.Provider>
            </FirstName.Provider>
    )
}

