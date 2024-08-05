// import { SwiperSlides } from './SwiperSlides';

// import JsonPortfolio from "../assets/json/Portfolio.json"

import img1 from '../assets/img/slides/img1.jpg'
// import img2 from '../assets/img/img2.jpg'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';

import "../assets/css/Style.css"

export const Slides = ({ data }) => {

    const titles = data.content.title || [];
    const descriptions = data.content.description || [];
    const links = data.content.link || [];

    return (
        <>
            <Swiper
                cssMode={true}
                navigation={{
                    nextEl: ".swiper-button-next",
                    prevEl: ".swiper-button-prev",
                    disabledClass: "swiper-button-disabled"
                }}
                pagination={true}
                mousewheel={true}
                keyboard={true}
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper portfolio__container grid container swiper-container"
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
            >
                {titles.map((title, index) => (
                    <SwiperSlide key={index} className='portfolio__content grid'>
                        <img src={`slides/img${index + 1}.jpg`} alt={`Slide ${index + 1}`} className="portfolio__img" />
                        {/* Ensure you have valid indexes for descriptions, links, and images */}
                        <div className="portfolio__data">
                            <h3 className="portfolio__title">{title}</h3>
                            {/* Check if descriptions, links, and images exist at the same index */}
                            {index < descriptions.length && (
                                <p className="portfolio__description">{descriptions[index]}</p>
                            )}
                            
                                <a href={links[index]} target='_blank' className="button button--flex button--small portfolio__button">
                                    Read Full Article
                                    <i className="uil uil-arrow-right button__icon"></i>
                                </a>
                            
                            {/* Add logic to handle images (assuming you have URLs in a separate array) */}
                            {/* Make sure to provide valid image URLs */}
                            {/* Example: <img src={imageURLs[index]} alt={`Slide ${index}`} className="portfolio__img" /> */}
                        </div>
                    </SwiperSlide>
                ))}

                {/* <!-- Add Arrows --> */}
                <div className="swiper-button-next">
                    <i className="uil uil-angle-right-b swiper-portfolio-icon"></i>
                </div>
                <div className="swiper-button-prev">
                    <i className="uil uil-angle-left-b swiper-portfolio-icon"></i>
                </div>

                {/* <!-- Add Pagination --> */}
                {/* <div className="swiper-pagination"></div> */}
            </Swiper>
        </>
    )
}