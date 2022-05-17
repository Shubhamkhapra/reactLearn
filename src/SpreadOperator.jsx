import React from 'react';

const SpreadOperator = () => {
    const fullName = ["shubham", "khapra", "ynr"];
    const bioData = [1, ...fullName, 26,"Male" ];


    // object des structuring  
    var [first,  ...last] = fullName;

    // most use full used 
    const name= {
        fname : "sk",
        lname : "khapra",
    }

    const Biodata = {
        id : 1,
        ...name ,
        age : 6 ,
        gender : "male "

    }
    console.log(Biodata);

    console.log(fullName);
    console.log(bioData);
    console.log(first);
    console.log(last);
    return (
        <React.StrictMode>

        

        </React.StrictMode>
    )
}

export default SpreadOperator;