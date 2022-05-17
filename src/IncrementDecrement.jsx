import React, { useState } from 'react';

import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveIcon from '@mui/icons-material/Remove';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

const IncrementDecrement = () => {
    let [count,
        setCount] = useState(0);
    const IncNum = () => {
        setCount(count += 1);

    }
    const DecNum = () => {
        if (count > 0) {
            setCount(count -= 1)
        } else 
            alert("Not Negative number")
    }
    return (
        <React.StrictMode>
            <div className='main_div'>
                <div className='center_div'>

                    <h1>
                        {count}
                    </h1>
                    <Button onClick={IncNum} className="btn-green">
                        <AddRoundedIcon/>
                    </Button>
                    <Tooltip title="Delete">
                    <Button onClick={DecNum} className="btn-red">
                        <RemoveIcon/>
                    </Button>
                    </Tooltip>
                </div>
            </div>
        </React.StrictMode>
    )
};

export default IncrementDecrement;