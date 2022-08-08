import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import AppRoutes from '../Routes';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <h1>Hey Website work</h1>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
