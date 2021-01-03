import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { PaperPlaneTilt } from 'phosphor-react';
import Messages from '../Messages';
const Chat = ({ setInput, handleSubmit, input, messages }) => {
  const messagesEndRef = useRef(null);
  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  useEffect(scrollToBottom, [messages]);
  return (
    <div className='chat-container'>
      <div className='chat-messages' id='messageList'>
        <div className='chat-messages-inner'>
          {messages.map((messages, index) => (
            <Messages key={index} message={messages} />
          ))}
        </div>
        <div ref={messagesEndRef} />
      </div>
      <form className='chat-bottom' onSubmit={handleSubmit}>
        <input
          className='chat-text-input'
          placeholder='Aa'
          type='text'
          onChange={(e) => setInput(e.target.value)}
          value={input}
          required={true}
        ></input>
        <button className='chat-send' type='submit' disabled={!input}>
          {!input ? (
            <PaperPlaneTilt
              className='chat-send-icon'
              weight='bold'
              size={32}
              cursor='not-allowed'
            />
          ) : (
            <PaperPlaneTilt
              className='chat-send-icon'
              weight='bold'
              size={32}
              cursor='pointer'
            />
          )}
        </button>
      </form>
    </div>
  );
};

Chat.propTypes = {
  setInput: PropTypes.func,
  handleSubmit: PropTypes.func,
  input: PropTypes.string,
  messages: PropTypes.array,
};

export default Chat;
