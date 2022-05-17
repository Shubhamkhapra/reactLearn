import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, { useState } from 'react';

import { Sresult } from './Sresult';

export const Search = () => {
     const [img, setImg] = useState("");
    const inputEvent  = (event) =>{
        const data = event.target.value;
        setImg(data);
    }
  return (
    <> 
        <div className='text-center wid-90 p-4 '>
            <input type="text" placeholder='Search Anything' className='form-control text-center  ' style={{width:"200px"}}  onChange={inputEvent} value={img}/>
            {img ?<Sresult word={img} />: null }
        </div>
    </>
  )
}
