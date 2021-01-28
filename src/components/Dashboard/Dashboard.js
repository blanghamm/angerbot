import React, { useState, useEffect } from 'react';
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
  const [options, setOptions] = useState([]);
  const [intent, setIntent] = useState([]);

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

  const addData = (data) => {
    setMessages((messages) => [
      ...messages,
      {
        robotText: data[1].output.generic[0].text,
        userInput: false,
      },
    ]);
    const toneIntent = data[0].tones[0];
    toneIntent
      ? setIntent([
          {
            intentDesc: data[0].tones[0].tone_id,
          },
        ])
      : setIntent([]);

    const filteredOptions = data[1].output.generic[1];
    filteredOptions ? setOptions(filteredOptions.options) : setOptions([]);
  };

  // eslint-disable-next-line no-unused-vars
  function fetchAPIQuery() {
    try {
      fetch(BASE_URL, requestOptions)
        .then((response) => response.json())
        .then((data) => addData(data));
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

  const handleSuggestions = (input) => {
    setInput(input);
    fetchAPIQuery();
    setMessages((messages) => [
      ...messages,
      { userText: input, userInput: true },
    ]);
    setInput('');
    setOptions([]);
  };

  useEffect(() => {
    fetchAPIQuery();
  }, []);

  return (
    <div className='dashboard'>
      <Navigation setMessages={setMessages} />
      <div className='dashboard-content'>
        <Route exact path='/'>
          <Chat
            setInput={setInput}
            handleSubmit={handleSubmit}
            handleSuggestions={handleSuggestions}
            input={input}
            messages={messages}
            options={options}
          />
        </Route>
        <Route path='/info'>
          <Info />
        </Route>
        <Route path='/reload' key='reload'>
          <Redirect to='/' />
        </Route>

        <Animation intent={intent} />
      </div>
    </div>
  );
};

export default Dashboard;
