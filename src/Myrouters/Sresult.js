import React from 'react';

export const Sresult = (props) => {
    const imgApi = `https://source.unsplash.com/user/erondu/600x400/?${props.word}`;
  return (
      <>
        <div className=''>
            <img src={imgApi} alt="UnSpash images"/>
        </div>
      </>
  )
}
