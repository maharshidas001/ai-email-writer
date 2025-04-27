import React from 'react';
import { Outlet } from 'react-router-dom';

const WithoutHeader = ({ children }) => {
  return (
    <>
      <main>
        {children}
        <Outlet />
      </main>
    </>
  )
}

export default WithoutHeader;