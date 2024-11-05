import { useEffect, useState } from 'react';

import React from 'react'

export const ScrollUp = () => {

    const [showScroll, setShowScroll] = useState(false);

    useEffect(() => {
        function handleScroll() {
            if (window.scrollY >= 560) {
                setShowScroll(true);
            } else {
                setShowScroll(false);
            }
        }

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Optional: Smooth scrolling behavior
        });
    }

    return (
        <div className={`scrollup ${showScroll ? 'show-scroll' : ''}`}
            onClick={scrollToTop} id="scroll-up">
            <i className="uil uil-arrow-up scrollup__icon"></i>
        </div>
    )
}
