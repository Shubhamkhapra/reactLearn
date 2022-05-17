import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

const BootStrap = () => {
    return (
        <React.StrictMode>
            
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Dropdown button
                </button>
                <ul className='dropdown-menu'  aria-labelledby='dropdownMenuButton1'>
                    <li>
                        <a className="dropdown-item" href="google.com">Action</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="google.com">Another action</a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="google.com">Something else here</a>
                    </li>
                </ul>
            </div>
        </React.StrictMode>
    )
}

export default BootStrap;