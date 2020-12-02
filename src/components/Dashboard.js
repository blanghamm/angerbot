import React, { useState } from 'react';
import { Route, Redirect } from 'wouter';
import Navigation from './Navigation';
import ChatContainer from '../containers/ChatContainer';
import Animation from './Animation';
import Info from './Info';

const Dashboard = () => {
  const [nav, setNav] = useState(true);
  return (
    <div className='dashboard'>
      <Navigation setNav={setNav} />
      <div className='dashboard-content'>
        {nav ? <ChatContainer /> : <Info />}
        <Route path='/reload' key='reload'>
          <Redirect href='/' />
        </Route>

        <Animation />
      </div>
    </div>
  );
};

export default Dashboard;
