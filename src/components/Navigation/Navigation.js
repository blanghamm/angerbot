import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {
  ChatCircleText,
  Info as InfoIcon,
  Trash,
  Link as LinkIcon,
} from 'phosphor-react';
import { motion } from 'framer-motion';

const Navigation = ({ setMessages }) => {
  const [selected, setSelected] = useState(true);
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30,
  };
  return (
    <div className='nav-container'>
      <div className='nav-title'>
        Anger
        <br />
        Bot
        <br />
        v1
      </div>

      <div className='nav-icons-container'>
        <motion.div
          animate={{ y: selected ? '0px' : '242px' }}
          className='nav-selector-bar'
          transition={spring}
        />
        <div className='nav-icons'>
          <NavLink to='/' isActive={(match) => match && setSelected(true)}>
            <ChatCircleText
              className='chat-circle-icon'
              weight='bold'
              size={32}
              cursor='pointer'
            />
          </NavLink>
          <NavLink to='/reload' onClick={() => setMessages([])}>
            <Trash
              className='trash-icon'
              weight='bold'
              size={32}
              cursor='pointer'
              onMouseEnter={() => console.log('hi')}
            />
          </NavLink>
          <NavLink to='/info' isActive={(match) => match && setSelected(false)}>
            <InfoIcon
              className='info-icon'
              weight='bold'
              size={32}
              cursor='pointer'
            />
          </NavLink>
          <a target='_blank' rel='noreferrer' href='https://www.google.co.uk/'>
            <LinkIcon
              className='link-icon'
              weight='bold'
              size={32}
              cursor='pointer'
            />
          </a>
        </div>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  setMessages: PropTypes.func.isRequired,
};

export default Navigation;
