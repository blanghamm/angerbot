import React from 'react';
import PropTypes from 'prop-types';

const Chat = ({ setInput, handleSubmit, input, messages }) => {
  const listItems = messages.map((d) => <p key={d.text.length}>{d.text}</p>);
  console.log(listItems);
  return (
    <div className='main-chat-box'>
      <div className='content-chat-box'>
        <div className='user-output-side'>{listItems}</div>
      </div>

      <div className='input-chat-box'>
        <form className='form-chat-box' onSubmit={handleSubmit}>
          <input
            onChange={(e) => setInput(e.target.value)}
            className='message-chat-box'
            type='text'
            placeholder='type message'
            value={input}
          ></input>
          <button className='button-chat-box' title='submit' value='submit'>
            Send
          </button>
        </form>
      </div>
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
