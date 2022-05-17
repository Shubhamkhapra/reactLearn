import React, { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';

import ToDoLists from './ToDoLists';

const ToDoList = () => {
    const [inputList, SetInputList] = useState("");
    const [Items, SetItems] = useState([]);


    const ItemEvent = (event) =>{
        SetInputList(event.target.value);
    }

    const ListItem = () =>{
        SetItems((oldItems) =>{
            return [...oldItems, inputList] ;
        });
        SetInputList("");

    }

    const deleteItems = (id) =>{
        SetItems((oldItems) => {
            return oldItems.filter((arrElemnt , index)=>{
                return index !== id;
            })
        })
    }
    return ( 
    <React.StrictMode> 
        <div className='main_div' >
            <div className='center_div'>
                <br />
                <h1 >ToDo List</h1> 
                <br />
                <input type="text" placeholder='Add A Item' name ="List" value={inputList} onChange={ItemEvent} />
                <Button onClick={ListItem} className="new_Btn"> <AddIcon /> </Button>

                <ol>
                    {/* <li>{inputList}</li> */}
                   {
                        Items.map( (itemVal, index) => {
                           return <ToDoLists key= {index} id = {index} text = {itemVal} onSelect = {deleteItems}/>
                        })
                   } 
                </ol>
            </div>
        </div>
    </React.StrictMode>
    );
};

export default ToDoList;