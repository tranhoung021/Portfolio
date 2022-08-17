import React from 'react';
import './ScrollToTopBtn.css';
import { useEffect, useState } from 'react';
import { CgChevronDoubleUpR } from 'react-icons/cg';


const ScrollToTopBtn = () => {
    const [scrollToTopBtn, setScrollToTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                setScrollToTopBtn(true)
            } else {
                setScrollToTopBtn(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,

        })
    }

    return (
        <div className='scroll_container'>{scrollToTopBtn && (
            <a className='scroll__top' onClick={scrollUp}>
                <CgChevronDoubleUpR />
            </a>
        )} </div>
    )
}

export default ScrollToTopBtn