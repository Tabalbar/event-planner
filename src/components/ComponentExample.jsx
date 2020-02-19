import React from 'react';
import PropTypes from 'prop-types'; // ES6

function ComponentExample({ componentNumber }) {
  return (
    <p>
      I am component example number
      {componentNumber}
    </p>
  );
}

ComponentExample.propTypes = {
  componentNumber: PropTypes.number.isRequired,
};

export default ComponentExample;
