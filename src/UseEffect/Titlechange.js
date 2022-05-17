import React, {
  useEffect,
  useState,
} from 'react';

const Titlechnage = () =>{
    const [num, SetNum] = useState(0);
    useEffect( () => {
        
        document.title = `You clicked me ${num}`;
        
    })
    
    return (
        <>
            <button onClick={() => { SetNum(num+1)}}>Click me {num}</button>
        </>
    )
}

export default Titlechnage;