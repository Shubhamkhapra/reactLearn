import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React, {
  useEffect,
  useState,
} from 'react';

import axios from 'axios';

export const ApiAxios = () => {
    const [num, setNum] = useState();
    const [Name, setName] = useState();
    const [move, setMoves] = useState();

    useEffect( ()=>{
       const getData = async() =>{
            const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${num}`);
            setName(res.data.name)
            setMoves(res.data.moves.length)
            
        }
        getData();
    })
   
  return (
    <React.StrictMode>
        <h1 className='text-center'>You choice <span className='text-danger'> {num} </span> value </h1>
        <h1 className='text-center'>My name is  <span className='text-danger'>{Name} </span>  </h1>
        <h1 className='text-center'>i have <span className='text-danger'>{move} </span>   moves </h1>
        <select value={num} onChange={(event) =>{
            setNum(event.target.value);
        }} className="text-center mx-5">
            <option value="1">1</option>
            <option value="25">25</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
        </select>
    </React.StrictMode>

  )
}
