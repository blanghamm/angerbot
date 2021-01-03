import './styles/styles.scss';
import React from 'react';
import Dashboard from './components/Dashboard';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Dashboard />
      </BrowserRouter>
    </div>
  );
};

export default App;
