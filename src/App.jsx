import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WithHeader from '@/layouts/WithHeader';
import Home from '@/pages/Home';
import Pricing from '@/pages/Pricing';
import WithoutHeader from '@/layouts/WithoutHeader';
import Dashboard from '@/pages/Dashboard';
import Login from '@/pages/Login';
import Signup from '@/pages/Signup';
import DashboardLayout from '@/layouts/DashboardLayout';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WithHeader />}>
          <Route index element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
        </Route>

        <Route path="/" element={<WithoutHeader />}>
          <Route path='/' element={<DashboardLayout />}>
            <Route path='/dashboard' element={<Dashboard />} />
          </Route>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;