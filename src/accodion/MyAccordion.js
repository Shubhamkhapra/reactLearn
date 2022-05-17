import React, { useState } from 'react';

export const MyAccordion = ({question, answer}) => {
  const [show , setShow] = useState(false);
  return (
    <React.StrictMode>
        <div className='main-heading'> 
          <p onClick={() =>  setShow(!show)}> {show ? "➖" :  " ➕" }</p>
          <h3>{question}</h3>
         </div>
        {show && <p className='answers'>{answer}</p>}
    </React.StrictMode>
  )
}

export default MyAccordion;