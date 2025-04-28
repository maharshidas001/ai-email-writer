import Sidebar from '@/components/Sidebar';
import React from 'react';
import { Outlet } from 'react-router-dom';

const DashboardLayout = ({ children }) => {
  return (
    <>
      <section className='p-2 flex'>
        <Sidebar />
        {children}
        <Outlet />
      </section>
    </>
  )
}

export default DashboardLayout;