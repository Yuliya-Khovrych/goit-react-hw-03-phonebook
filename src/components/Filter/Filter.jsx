import React from 'react';
import PropTypes from 'prop-types';
import { Field, Input } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <Field>
      Find contacts by name
      <Input type="text" value={value} onChange={onChange} />
    </Field>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
