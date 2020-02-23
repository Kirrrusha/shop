import React, {useState, useEffect} from 'react'
import PropTypes from 'prop-types';
import './Slider.scss'

const ERROR_MESSAGE = 'SOME PROPS ARE INVALID! PLEASE CHECK SLIDER PROPS AND FIX THEM'
/**
 * Simple slider component
 *
 * @author [Mikhail Golovai](https://github.com/Mikhail-Golovai)
 */
export default function Slider (props) {
    const {
        children,
        style,
        showDots,
        dotsPosition,
        infinite,
        visibleCount
    } = props

    const [slideIndex, setSlideIndex] = useState(0)
    const [isValid, setIsValid] = useState(true)

    useEffect(() => {
        if (visibleCount > children.length || visibleCount < 1) {
            setIsValid(false)
        }
    }, [children, visibleCount])

    function plusSlides(n) {
        setSlideIndex(preventOverflow(slideIndex + n))
    }

    function setSlide(n) {
        setSlideIndex(preventOverflow(n))
    }

    const visCoeff = 100 / visibleCount

    function preventOverflow(newIndex) {
        const length = children.length
        if (newIndex >= length - visibleCount + 1) {return infinite ? (newIndex % (length - visibleCount + 1)) : slideIndex}
        if (newIndex < 0) {return infinite ? length - (length - newIndex) % length - visibleCount + 1 : slideIndex}
        return newIndex
    }

    const { items, dots } = children.reduce(({items, dots}, child, index) => {
        items.push(
            <div key={index} className="slider__item" style={({maxWidth: `${visCoeff}%`})}> 
                {child}
            </div>
        )
        dots.push(
            <span 
                key={index} 
                className={(index >= slideIndex &&  index < slideIndex + visibleCount ? 'dot dot_active' : 'dot')} 
                onClick={()=>setSlide(index)}>
            </span>
        )
        return {items, dots}
    }, {items: [], dots: []})

    let leftControlShow = (infinite || (slideIndex > 0))  ? 'slider__control_show' : ''
    let rightControlShow = (infinite || (slideIndex < children.length - visibleCount))  ? 'slider__control_show' : ''

    return isValid ? 
        (<div className="slider" data-testid="slider" style={style}>
            <div 
                className="slider__wrapper" 
                data-testid="wrapper"
                style={({transform: `translateX(${-slideIndex * visCoeff}%)`})}
            >
                {items}
            </div>
            <button 
                className={(`slider__control slider__control_left ${leftControlShow}`)} 
                onClick={()=>plusSlides(-1)}>
            </button>
            <button 
                className={(`slider__control slider__control_right ${rightControlShow}`)}
                onClick={()=>plusSlides(1)}>
            </button>
            <div 
                className="dots__container" 
                style={(dotsPosition!== 'left' && dotsPosition !== 'right' ? {left: '10vw', right: '10vw'} : {[dotsPosition]: '10vw'})}>
                    {showDots && dots}
            </div>
        </div>
    ) : (<span className="error">{ERROR_MESSAGE}</span>)
}

Slider.propTypes = {
    /**
     * Elements to show in slider
     */
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    /**
     * Additional style for slider element
     */
    style: PropTypes.object,
    /**
     * Flag, determinate to show slider dots or not
     */
    showDots: PropTypes.bool,
    /**
     * The position of the Slider dots
     *
     */
    dotsPosition: PropTypes.oneOf(['left', 'center' ,'right']),
    /**
     * Flad, determinate should slider has infinite scrolling or not
     *
     */
    infinite: PropTypes.bool,
    /**
     * The count of items to show in one time
     *
     */
    visibleCount: PropTypes.number
}

Slider.defaultProps = {
    style: {},
    showDots: true,
    dotsPosition: 'center',
    infinite: true,
    visibleCount: 1
}