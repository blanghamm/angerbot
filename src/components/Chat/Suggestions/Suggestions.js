import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const Suggestions = ({ option, handleSuggestions }) => {
  const [isPressed, setIsPressed] = useState(false);
  const variant = {
    hover: {
      opacity: 0.3,
      transition: { duration: 0.25, ease: 'easeOut' },
    },
    pressed: {
      y: '-120%',
      scale: 0,
      opacity: 0,
      transition: { duration: 0.35 },
    },
    unpressed: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div
      className='suggestions-container'
      onClick={() => handleSuggestions(option.value.input.text)}
    >
      {option.value.input.text ? (
        <motion.div
          whileHover='hover'
          onClick={() => setIsPressed(!isPressed)}
          animate={isPressed ? 'pressed' : 'unpressed'}
          variants={variant}
          className='suggestions-content'
        >
          {option.value.input.text}
        </motion.div>
      ) : null}
    </div>
  );
};

Suggestions.propTypes = {
  option: PropTypes.object,
  handleSuggestions: PropTypes.func,
};

export default Suggestions;
