import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WithHeader from '@/layouts/WithHeader';
import Home from '@/pages/Home';
import Pricing from '@/pages/Pricing';
import WithoutHeader from './layouts/WithoutHeader';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WithHeader />}>
          <Route index element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
        </Route>

        <Route path="/dashboard" element={<WithoutHeader />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;