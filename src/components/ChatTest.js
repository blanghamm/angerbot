import React from 'react';
import PropTypes from 'prop-types';
import { PaperPlaneTilt } from 'phosphor-react';

const ChatTest = ({ setInput, handleSubmit, input, messages }) => {
  const listItems = messages.map((d) => <p key={d.text.length}>{d.text}</p>);
  return (
    <div className='chat-container'>
      <div className='chat-messages'>{listItems}</div>
      <form className='chat-bottom' onSubmit={handleSubmit}>
        <input
          className='chat-text-input'
          placeholder='Aa'
          type='text'
          onChange={(e) => setInput(e.target.value)}
          value={input}
        ></input>
        <button className='chat-send' type='submit'>
          <PaperPlaneTilt
            className='chat-send-icon'
            weight='bold'
            size={32}
            cursor='pointer'
          />
        </button>
      </form>
    </div>
  );
};

ChatTest.propTypes = {
  setInput: PropTypes.func,
  handleSubmit: PropTypes.func,
  input: PropTypes.string,
  messages: PropTypes.array,
};

export default ChatTest;
