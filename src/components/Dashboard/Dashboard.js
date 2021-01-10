import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Navigation from '../Navigation';
import Chat from '../Chat';
import Animation from '../Animation';
import Info from '../Info';

// eslint-disable-next-line no-undef
const BASE_URL = process.env.REACT_APP_ANGERBOT_API_URL;

const Dashboard = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const requestOptions = {
    crossDomain: true,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
      'Access-Control-Allow-Headers': 'Origin, X-Requested-With',
    },
    body: JSON.stringify([{ text: input }]),
  };
  // eslint-disable-next-line no-unused-vars
  function fetchAPIQuery() {
    try {
      fetch(BASE_URL, requestOptions)
        .then((response) => response.json())
        .then((data) =>
          setMessages((messages) => [
            ...messages,
            { robotText: data[1].output.generic[0].text, userInput: false },
          ])
        );
    } catch {
      (e) => console.log(e);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAPIQuery();
    setMessages((messages) => [
      ...messages,
      { userText: input, userInput: true },
    ]);
    setInput('');
  };
  return (
    <div className='dashboard'>
      <Navigation setMessages={setMessages} />
      <div className='dashboard-content'>
        <Route exact path='/'>
          <Chat
            setInput={setInput}
            handleSubmit={handleSubmit}
            input={input}
            messages={messages}
          />
        </Route>
        <Route path='/info'>
          <Info />
        </Route>
        <Route path='/reload' key='reload'>
          <Redirect to='/' />
        </Route>

        <Animation />
      </div>
    </div>
  );
};

export default Dashboard;
