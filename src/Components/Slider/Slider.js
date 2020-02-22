import React, {useState} from 'react'
import PropTypes from 'prop-types';
import './Slider.scss'

export default function Slider (props) {
    const {
        children,
        style,
        showDots,
        dotsPosition,
        overflow,
        visibleCount
    } = props

    let visCnt = visibleCount // validating visibleCount, to be between 1 and children.length
    if (visCnt > children.length) {
        visCnt = children.length
    } else if (visCnt < 1) {
        visCnt = 1
    }

    const [slideIndex, setSlideIndex] = useState(0)

    function plusSlides(n) {
        setSlideIndex(preventOverflow(slideIndex + n))
    }

    function setSlide(n) {
        setSlideIndex(preventOverflow(n))
    }

    const visCoeff = 100 / visCnt

    function preventOverflow(newIndex) {
        const length = children.length
        if (newIndex >= length - visCnt + 1) {return overflow ? (newIndex % (length - visCnt + 1)) : slideIndex}
        if (newIndex < 0) {return overflow ? length - (length - newIndex) % length - visCnt + 1 : slideIndex}
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

    let leftControlShow = (overflow || (slideIndex > 0))  ? 'slider__control_show' : ''
    let rightControlShow = (overflow || (slideIndex < children.length - visCnt))  ? 'slider__control_show' : ''

    return (
        <div className="slider" style={style}>
            <div 
                className="slider__wrapper" 
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
    )
}

Slider.propTypes = {
    children: PropTypes.arrayOf(PropTypes.element).isRequired,
    style: PropTypes.object,
    showDots: PropTypes.bool,
    dotsPosition: PropTypes.oneOf(['left', 'center' ,'right']),
    overflow: PropTypes.bool,
    visibleCount: PropTypes.number
}

Slider.defaultProps = {
    style: {},
    showDots: true,
    dotsPosition: 'center',
    overflow: true,
    visibleCount: 1
}