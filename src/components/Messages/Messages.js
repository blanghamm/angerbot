import React from 'react';
import PropTypes from 'prop-types';

const Messages = ({ message }) => {
  const active = message.userInput ? '-user' : '-robot';
  return (
    <div className={`message-container ${active}`}>
      <div className='message-inner'>
        {message.userInput ? (
          <div className={`message-content ${active}`}>{message.userText}</div>
        ) : (
          <div className={`message-content ${active}`}>{message.robotText}</div>
        )}
      </div>
    </div>
  );
};

Messages.propTypes = {
  message: PropTypes.object,
  userInput: PropTypes.bool,
};

export default Messages;
