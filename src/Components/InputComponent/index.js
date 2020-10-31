import React from 'react';
import './styles.css';
const InputComponent = (props) => {

  return (
    <div className="serve-input">
      <input {...props} />
    </div>
  )
};

export default InputComponent;
