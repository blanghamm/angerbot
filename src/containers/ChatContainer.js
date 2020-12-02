import React, { useState } from 'react';
import ChatTest from '../components/ChatTest';

const ChatContainer = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  const requestOptions = {
    crossDomain: true,
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify([{ text: input }]),
  };
  // eslint-disable-next-line no-unused-vars
  function fetchAPIQuery() {
    try {
      fetch(
        'https://angerbotflow.eu-gb.cf.appdomain.cloud/testing',
        requestOptions
      )
        .then((response) => response.json())
        .then((data) =>
          setMessages((messages) => [
            ...messages,
            { text: data[1].output.generic[0].text },
          ])
        );
    } catch {
      (e) => console.log(e);
    }
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    fetchAPIQuery();
    setMessages((messages) => [...messages, { text: input }]);
    setInput('');
  };
  return (
    <ChatTest
      setInput={setInput}
      handleSubmit={handleSubmit}
      input={input}
      messages={messages}
    />
  );
};

export default ChatContainer;
