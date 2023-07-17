import {useState, useEffect, Children, cloneElement} from 'react';

import './slider.css';

import rightArrow from '../../img/rightArrow.png';
import leftArrow from '../../img/leftArrow.png';

const SLIDER_WIDTH = 705

const Slider = ({children}) => {
    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);
    const [slideIndex, setSlideIndex] = useState(0);

    const handleRightArrowClick = () => {

        setOffset((offset) => {
            const newOffset =  offset - SLIDER_WIDTH;
            const maxOffset = -(SLIDER_WIDTH * (pages.length - 1))

            return Math.max(newOffset, maxOffset);
        });
        if (slideIndex < pages.length - 1) {
            setSlideIndex(slideIndex => slideIndex + 1);
        }
    }

    const handleLeftArrowClick = () => {

        setOffset((offset) => {
            const newOffset =  offset + SLIDER_WIDTH;
            return Math.min(newOffset, 0);
        });

        if (slideIndex > 0) {
            setSlideIndex(slideIndex => slideIndex - 1);
        }
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return (
                    cloneElement(child, {
                        style: {
                            height: '100%',
                            minWidth: `${SLIDER_WIDTH}px`,
                            maxWidth: `${SLIDER_WIDTH}px`
                        },
                    })
                )
            })
        )
    }, []);

    return (
        <div className="slider-wrapper">
            <div className="slider-headling-3">
                <h2 className="slider-headling-3-content">Besucher</h2>
            </div>
            <div className="slider-container">
                <button className='SldArrow' onClick={handleLeftArrowClick}>
                    <img src={leftArrow} alt="leftArrow" />
                </button>

                <div className="window">
                    <div className="all-pages-container" 
                        style={{transform: `translateX(${offset}px)`}}>
                        {pages}
                    </div>
                </div>

                <button className='SldArrow' onClick={handleRightArrowClick}>
                    <img src={rightArrow} alt="rightArrow" />
                </button>
            </div>
            <div className="dots-wrapper">
                <ul className="dots">
                    {pages.map((item, i) => {
                        return (
                            <li key={i}><button className={slideIndex === i ? 'dot-active' : 'dot-item'}></button></li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Slider;