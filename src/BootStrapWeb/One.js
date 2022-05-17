import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

import React from 'react';

const One = () => {
    return (
        <React.StrictMode>
            <h1 className='text-center text-danger my-5 text-capitalizes'> Welcome </h1>
            <div className="container">
            <div className="row">
                <div className="col">
                    <div className="card" >
  <img src="https://picsum.photos/200/303" className="card-img-top" alt="..." height="200px" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                </div>
                <div className="col">
                    <div className="card" >
  <img src="https://picsum.photos/200/301" className="card-img-top" alt="..." height="200px" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                </div>
                <div className="col">
                    <div className="card" >
  <img src="https://picsum.photos/200/300" className="card-img-top" alt="..." height="200px" />
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
                </div>
            </div>
            </div> 
        </React.StrictMode>
    )
}

export default One;