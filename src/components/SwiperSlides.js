import { Link } from 'react-router-dom'

import { useState } from 'react';
import JsonPortfolio from "../assets/json/Portfolio.json"
import "../assets/css/Style.css"

export const SwiperSlides = ({ data }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    console.log(data)

    // const handleNextSlide = () => {
    //     setCurrentSlide((prevSlide) => (prevSlide + 1) % JsonPortfolio.content.title.length);
    // };
    function getRandomImage() {
        // Array of placeholder image URLs
        const imageUrls = JsonPortfolio.imgURL;
        console.log(imageUrls)

        // Generate a random index to select a random image URL from the array
        const randomIndex = Math.floor(Math.random() * imageUrls.length);

        return JsonPortfolio.imgURL[randomIndex];
    }
    return (
        <div>

            {data.content.map((img, title, desc, index) => (
                <div key={index+1}>
                    <img src={`"../assets/img/slides/"+img`} alt="" srcSet="" className="portfolio__img" />
                    <div className="portfolio__data">
                        <h3 className="portfolio__title">{title}</h3>
                        <p className="portfolio__description">{desc}</p>
                        <Link className="button button--flex button--small portfolio__button">
                            Read Full Article
                            <i className="uil uil-arrow-right button__icon"></i>
                        </Link>
                    </div>
                </div>
            ))}

        </div>
    )
}
