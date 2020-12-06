import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'wouter';
import {
  ChatCircleText,
  Info as InfoIcon,
  Trash,
  Link as LinkIcon,
} from 'phosphor-react';

const Navigation = ({ setMessages }) => {
  return (
    <div className='nav-container'>
      <div className='nav-title'>
        Anger
        <br />
        Bot
        <br />
        v1
      </div>

      <div className='nav-icons'>
        <Link href='/'>
          <div className='nav-selector' />
          <ChatCircleText
            className='chat-circle-icon'
            weight='bold'
            size={32}
            cursor='pointer'
          />
        </Link>
        <Link href='/info'>
          <InfoIcon
            className='info-icon'
            weight='bold'
            size={32}
            cursor='pointer'
          />
        </Link>
        <a target='_blank' rel='noreferrer' href='https://www.google.co.uk/'>
          <LinkIcon
            className='link-icon'
            weight='bold'
            size={32}
            cursor='pointer'
          />
        </a>
        <Link href='/reload' onClick={() => setMessages([])}>
          <Trash
            className='trash-icon'
            weight='bold'
            size={32}
            cursor='pointer'
            onMouseEnter={() => console.log('hi')}
          />
        </Link>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  setMessages: PropTypes.func.isRequired,
};

export default Navigation;
