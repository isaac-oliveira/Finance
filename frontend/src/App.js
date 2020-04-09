import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AuthRoute from './routes/AuthRoute';

function App() {
  return (
    <BrowserRouter>
      <AuthRoute />
    </BrowserRouter>
  );
}

export default App;
