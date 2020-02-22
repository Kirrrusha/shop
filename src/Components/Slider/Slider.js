import React, {useState} from 'react'
import './Slider.scss'

export default function Slider (props) {
    const {
        children,
        style = {},
        showDots = true,
        dotsPosition = 'center',
        overflow = true
    } = props

    const [slideIndex, setSlideIndex] = useState(0)

    function plusSlides(n) {
        setSlideIndex(preventOverflow(slideIndex + n))
    }

    function setSlide(n) {
        setSlideIndex(preventOverflow(n))
    }

    function preventOverflow(newIndex) {
        const length = children.length
        if (newIndex >= length) {return overflow ? (newIndex % length) : slideIndex}
        if (newIndex < 0) {return overflow ? (length - (length - newIndex) % length) : slideIndex}
        return newIndex
    }

    const { items, dots } = children.reduce(({items, dots}, child, index) => {
        items.push(
            <div key={index}className="slider__item"> 
                {child}
            </div>
        )
        dots.push(
            <span 
                key={index} 
                className={(slideIndex === index ? 'dot active' : 'dot')} 
                onClick={()=>setSlide(index)}>
            </span>
        )
        return {items, dots}
    }, {items: [], dots: []})

    let leftControlShow = (overflow || (slideIndex > 0))  ? 'slider__control_show' : ''
    let rightControlShow = (overflow || (slideIndex < children.length - 1))  ? 'slider__control_show' : ''

    return (
        <div className="slider" style={style}>
            <div 
                className="slider__wrapper" 
                style={({transform: `translateX(${-slideIndex * 100}%)`})}
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
            <div className="dotsContainer" style={({textAlign: dotsPosition})}>
                    {showDots && dots}
            </div>
        </div>
    )
}