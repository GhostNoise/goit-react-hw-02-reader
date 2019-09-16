import React from 'react';
import PropTypes from 'prop-types';
import style from './Publication.module.css';

const Publication = ({ item: { id, title, text } }) => {
  return (
    <article className={style.publication} id={id}>
      <h2>{title}</h2>
      <p>{text}</p>
    </article>
  );
};

Publication.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};

export default Publication;
