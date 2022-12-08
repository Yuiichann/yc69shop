import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import routes from './routes';

const App = () => {
  return (
    <>
      <Routes>
        {routes.map((route) => (
          <Route
            path={route.path}
            element={<route.element />}
            key={route.path}
          />
        ))}
      </Routes>
    </>
  );
};

export default App;
