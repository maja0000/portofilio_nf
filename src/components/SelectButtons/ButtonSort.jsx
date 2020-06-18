import React from 'react';
import './ButtonSort.scss';

function ButtonSort({ text, onSelect }) {
  return (
    <button onClick={onSelect} className="selector-project-button" value={text}>
      {text}
    </button>
  );
}

export default ButtonSort;
