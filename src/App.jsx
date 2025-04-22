import React from 'react';
import { Routes, Route } from 'react-router-dom';
import WithHeader from '@/layouts/WithHeader';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<WithHeader />}>
          <Route index element={<div>Home</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;