import './styles/styles.scss';
import React from 'react';
import DashboardContainer from './containers/DashboardContainer';
import { BrowserRouter } from 'react-router-dom';

const App = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <DashboardContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
