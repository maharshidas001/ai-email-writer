import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WithHeader from '@/layouts/WithHeader';
import Home from '@/pages/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WithHeader />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;