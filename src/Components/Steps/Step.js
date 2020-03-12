import React from 'react'
import './Step.scss'
import PropTypes from 'prop-types'

export default function Step(props) {
    const {
        id,
        style,
        handleClick,
        buttonText,
        children
    } = props
    return (
        <div id={id} style={style}>
            {children}
            <button className="stepButton" onClick={handleClick}>{buttonText}</button>
        </div>
    )
}

Step.propTypes = {
    id: PropTypes.string,
    style: PropTypes.object,
    handleClick: PropTypes.func,
    buttonText: PropTypes.string ,
    children: PropTypes.arrayOf(PropTypes.node)
}