import React from 'react';
import PropTypes from 'prop-types';

const Suggestions = ({ option, setInput }) => {
  return (
    <div>
      {option.value.input.text ? (
        <a onClick={() => setInput(option.value.input.text)}>
          {option.value.input.text}
        </a>
      ) : null}
    </div>
  );
};

Suggestions.propTypes = {
  option: PropTypes.object,
  setInput: PropTypes.func,
};

export default Suggestions;
