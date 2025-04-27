import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WithHeader from '@/layouts/WithHeader';
import Home from '@/pages/Home';
import Pricing from '@/pages/Pricing';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WithHeader />}>
          <Route index element={<Home />} />
          <Route path='/pricing' element={<Pricing />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;