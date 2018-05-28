import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

export default function Note(props) {
  const { note } = props;
  return (
    <li styleName="note">
      {note.text}
    </li>
  );
}

Note.propTypes = {
  note: PropTypes.shape({
    text: PropTypes.string
  }).isRequired
};
