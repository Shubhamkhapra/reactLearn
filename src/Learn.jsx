import './index.css';

import React from 'react';

// ReactDOM.render('kya dikhna hai (JSX)', 'kha dikhna ha ', "callback function"); render method only one jsx used 
// ReactDOM.render(
//   [
//     <h1> Hello </h1>,
//     <p>Sk welcome</p>
//   ],
//   document.getElementById("root")
// );


const fname = "shubham";
const lname = "khapra";
const webUrl= "https://picsum.photos/";
const img1 = "https://picsum.photos/200/300";
const img2 = "https://picsum.photos/250/300";
const img3 = "https://picsum.photos/300/300";




const Learn = () =>{
    return (
        <>
        {/* <h1 contentEditable="true"> Hello </h1> */}
    <h1 > Hello </h1>
      
      <p className='heading'>{`${fname} ${lname}`} welcome {Math.random()}</p>
      <div className='img_div'>
        <img src={img1} alt='Random images'/>
        <img src={img2} alt='Random images'/>
         {/* <a href={webUrl}  rel="noreferrer">
  
        <img src={img3} alt='Random images'/>
        </a> */}
      </div>
  
  
  
      <div>
      <h1 style={ { fontSize: "2rem", color : "red",textAlign : "center"}}> Hello test {2+3} </h1>
      <p>{`${fname} ${lname}`} welcome</p>
      </div>
        </>
    )
};


export default Learn;

// -----------------js  pure full ----
// var h1 = document.createElement('h1');
// h1.innerHTML = "sk";
// document.getElementById("root").appendChild(h1);