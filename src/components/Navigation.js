import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'wouter';
import {
  ChatCircleText,
  Info as InfoIcon,
  Trash,
  Link as LinkIcon,
} from 'phosphor-react';

const Navigation = ({ setNav }) => {
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
        <Link href='/' onClick={() => setNav(true)}>
          <ChatCircleText
            color='#000000'
            weight='bold'
            size={32}
            cursor='pointer'
          />
        </Link>
        <Link href='/info' onClick={() => setNav(false)}>
          <InfoIcon color='#000000' weight='bold' size={32} cursor='pointer' />
        </Link>
        <a target='_blank' rel='noreferrer' href='https://www.google.co.uk/'>
          <LinkIcon color='#000000' weight='bold' size={32} cursor='pointer' />
        </a>
        <Link href='/reload'>
          <Trash color='#000000' weight='bold' size={32} cursor='pointer' />
        </Link>
      </div>
    </div>
  );
};

Navigation.propTypes = {
  setNav: PropTypes.func.isRequired,
};

export default Navigation;
