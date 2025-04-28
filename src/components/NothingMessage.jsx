import React from 'react';

const NothingMessage = ({ message = 'Not available' }) => {
  return (
    <>
      <div className='flex flex-col items-center'>
        <div className='text-8xl'>☝️</div>
        <p className='text-2xl font-bold text-center'>{message}</p>
      </div>
    </>
  )
}

export default NothingMessage;