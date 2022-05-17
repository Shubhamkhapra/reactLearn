import React, { useState } from 'react';

import DeleteIcon from '@mui/icons-material/Delete';

const ToDoLists = (props) => {

    const [line,
        setLine] = useState(false);
    const cutIt = () => {
        setLine(true);
    }
    return (
        <React.StrictMode>
            <div className='todo_style'>
                <span onClick={cutIt}>
                    <DeleteIcon/> {/* <i className='fa fa-times' aria-hidden = "true"  onClick={() => {
                        props.onSelect(props.id);
                    }} /> */}
                </span>
                <li
                    style={{
                    textDecoration: line
                        ? "line-through"
                        : "none"
                }}>{props.text}</li>
            </div>
        </React.StrictMode>
    );
};

export default ToDoLists;