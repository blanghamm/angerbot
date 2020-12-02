import React, { useState } from 'react';

const Info = () => {
  const [info, setInfo] = useState('turd');
  return (
    <div className='info-container'>
      <button onClick={() => setInfo('poo')}>{info}</button>
    </div>
  );
};

export default Info;
