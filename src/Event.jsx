import React, { useState } from 'react';

const Event = () => {
    const purple = "#8e44ad";
    let Name = "Click Me";
    const [bg,Setbg] = useState(purple);
    const [name,SetName] = useState(Name);
    const bgChange = () => {
        let newBg = "#34495e" 
        Setbg(newBg);
        SetName("ouch !! 🐺")
    }
    const bgBack = () =>{
        Setbg(purple);
        SetName("Ayyo!! 😠");
    }
    return ( 
    <> 
    
        <div className='main' style={{backgroundColor: bg}}>
            <button onClick={bgChange} onDoubleClick = {bgBack} >
            {name}
            </button>
        </div> 
    </>
    );
};

export default Event;