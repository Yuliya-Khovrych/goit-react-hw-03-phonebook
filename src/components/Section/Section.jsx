import React from 'react';
import PropTypes from 'prop-types';

export const Section = ({ children }) => {
  return <div>{children}</div>;
};

Section.propTypes = {
  children: PropTypes.array.isRequired,
};