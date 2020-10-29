import React from 'react';
import './styles.css';
const Stepper = () => {
  const StepperItem = (id, description) => {
    return (
      <div className="stepper-item">
        <div className="stepper-item-id">{id}</div>
        <div className="stepper-item-desc">{description}</div>
      </div>
    )
  };
  return (
    <div className="stepper">
      {StepperItem(1,"iNNOVATE")}
      <hr/>
      {StepperItem(2,"iNNITIATE")}
      <hr/>
      {StepperItem(3,"iNNTIGRATE")}
    </div>
  )
}
  
;

export default Stepper;
