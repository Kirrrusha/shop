import React, {useState} from 'react'
import './Steps.scss'
import Step from './Step'
import PropTypes from 'prop-types'

export default function Steps(props) {
    const {
        children,
        handleDone
    } = props
    const [checked, setChecked] = useState(0)

    const tabs = children.map((child, index) => (
        <div key={index} className="tabContainer">
            <input id={`step_${index+1}`} type="radio" className="tabInput" onChange={()=> setChecked(index)} checked={index===checked}/>
            <label htmlFor={`step_${index+1}`} className="tabLabel">Step {index+1}</label>
        </div>
    ))
    const steps = React.Children.map(children, (child, index) => {
        const {handleClick, buttonText} = (index < children.length - 1) ? 
            {
                handleClick: (event) => {
                    setChecked(index + 1)
                    event.preventDefault()
                },
                buttonText: 'NEXT'
            } : {
                handleClick: (event) => {
                    handleDone(event)
                    event.preventDefault()
                },
                buttonText: 'DONE'
            }
        return React.cloneElement(child, {
          id: `step_content_${index+1}`,
          style: { 
              display: index === checked ? 'block' : 'none'
          },
          handleClick,
          buttonText
        });
      });
    return (
        <div className="stepsWrapper">
            <div className="tabsWrapper">
                {tabs}
            </div>
            <div className="stepsContainer">
                {steps}
            </div>
        </div>
    )
}

Steps.Step = Step

Steps.propTypes = {
    children: PropTypes.arrayOf(PropTypes.instanceOf(Step)),
    handleDone: PropTypes.func
}