import React from 'react'
import '../../../assets/styles/Step.scss'
import PropTypes from 'prop-types'

const Step = ({id, style, handleClick, buttonText, children, isValid = true}) => {
  return (
    <div id={id} style={style}>
      {children}
      <button disabled={!isValid} className="stepButton" onClick={handleClick}>{buttonText}</button>
    </div>
  )
}

Step.propTypes = {
  id: PropTypes.string,
  style: PropTypes.object,
  handleClick: PropTypes.func,
  buttonText: PropTypes.string,
  children: PropTypes.node,
  isValid: PropTypes.bool
};

export default Step;
