import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../ContactForm/ContactForm.styled';

export const Contact = ({ id, name, number, onDelete }) => {
  return (
    <div>
      {name}: {number}
      <Button onClick={() => onDelete(id)} type="submit">
        Delete
      </Button>
    </div>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
