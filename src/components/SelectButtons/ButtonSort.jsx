import React from 'react';
import './ButtonSort.scss';

function ButtonSort({ text, onSelect, darkMode }) {
  const style = {
    textColor: {
      color: darkMode ? 'white' : '#2E2E2E',
    },
  };
  return (
    <button
      style={style.textColor}
      onClick={onSelect}
      className="selector-project-button"
      value={text}
    >
      {text}
    </button>
  );
}

export default ButtonSort;
