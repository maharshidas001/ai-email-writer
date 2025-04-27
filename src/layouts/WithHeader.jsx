import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react';
import { Outlet } from 'react-router-dom';

const WithHeader = ({ children }) => {
  return (
    <>
      <Header />
      <main>
        {children}
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default WithHeader;