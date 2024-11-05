import { Header, Footer, ScrollUp, Slides, Skill } from '../components/index'
// import { UilMouseAlt, UilArrowDown, } from '@iconscout/react-unicons'
import JsonAcademicData from '../assets/json/AcademicCV.json'
import JsonPortfolio from "../assets/json/Portfolio.json"
import noBackgroundImg from '../assets/img/User_noBackground.png'

import { Link } from 'react-router-dom'
import { useRef } from 'react'
// import { TypeAnimation } from 'react-type-animation'
// import { motion } from 'framer-motion'


import "../assets/css/Style.css"

export const Dashboard = () => {

    // console.log(JsonAcademicData.technical_skills)
    // const into = "Hi, I'm ";

    // Create a reference to the target section you want to scroll to
    const scrollRef = useRef(null);

    const scrollToSection = () => {
        // Scroll to the top position of the target section when the button is clicked
        if (scrollRef.current) {
            scrollRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };
    

    return (
        <>
            <Header />

            <div className="dashboard">
                <div className="dashboard__home">

                    <section className="home section section__01" id="home">
                        <div className="home__container container grid">
                            <div className="home__content grid">
                                <div className="home__social">
                                    <a href="https://www.linkedin.com/in/meetshubhamkumarhere" target="__blank" className="home__social-icon">
                                        <i className="uil uil-linkedin-alt"></i>
                                    </a>
                                    <a href="https://github.com/meetskhere" target="__blank" className="home__social-icon">
                                        <i className="uil uil-github-alt"></i>
                                    </a>
                                    <a href="skype:shubhamkumar007" target="__blank" className="home__social-icon">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="28" viewBox="0 0 32 32" className='home__social-icon'>
                                            <path d="M 16 2 C 14.416667 2 13.101892 2.6297556 12.251953 3.5859375 C 11.402014 4.5421194 11 5.7777779 11 7 C 11 8.0568215 11.320353 9.1124493 11.951172 10 L 1 10 L 1 11 L 1 25 L 8.5878906 25 C 9.7771929 27.932591 12.652284 30 16 30 C 19.378243 30 22.242463 27.87368 23.412109 24.902344 C 24.308711 25.533813 25.325569 26 26.5 26 C 29.525577 26 32 23.525577 32 20.5 L 32 14 L 24 14 L 23 14 L 16 14 L 16 12 C 17.583333 12 18.898108 11.370244 19.748047 10.414062 C 20.597986 9.4578811 21 8.2222221 21 7 C 21 5.7777779 20.597986 4.5421194 19.748047 3.5859375 C 18.898108 2.6297556 17.583333 2 16 2 z M 16 4 C 17.083333 4 17.768559 4.3702444 18.251953 4.9140625 C 18.735347 5.4578806 19 6.2222221 19 7 C 19 7.7777779 18.735347 8.5421194 18.251953 9.0859375 C 17.768559 9.6297556 17.083333 10 16 10 C 14.916667 10 14.231441 9.6297556 13.748047 9.0859375 C 13.264653 8.5421194 13 7.7777779 13 7 C 13 6.2222221 13.264653 5.4578806 13.748047 4.9140625 C 14.231441 4.3702444 14.916667 4 16 4 z M 26.5 5 C 25.416667 5 24.476892 5.4422556 23.876953 6.1171875 C 23.277014 6.7921194 23 7.6527779 23 8.5 C 23 9.3472221 23.277014 10.207881 23.876953 10.882812 C 24.476892 11.557745 25.416667 12 26.5 12 C 27.583333 12 28.523108 11.557744 29.123047 10.882812 C 29.722986 10.207882 30 9.3472221 30 8.5 C 30 7.6527779 29.722986 6.7921194 29.123047 6.1171875 C 28.523108 5.4422556 27.583333 5 26.5 5 z M 26.5 7 C 27.083333 7 27.393559 7.1827444 27.626953 7.4453125 C 27.860347 7.7078806 28 8.0972221 28 8.5 C 28 8.9027779 27.860347 9.2921194 27.626953 9.5546875 C 27.393559 9.8172556 27.083333 10 26.5 10 C 25.916667 10 25.606441 9.8172556 25.373047 9.5546875 C 25.139653 9.2921194 25 8.9027779 25 8.5 C 25 8.0972221 25.139653 7.7078806 25.373047 7.4453125 C 25.606441 7.1827444 25.916667 7 26.5 7 z M 3 12 L 14 12 L 14 23 L 3 23 L 3 12 z M 5 14 L 5 16 L 7 16 L 7 21 L 9 21 L 9 16 L 11 16 L 11 14 L 5 14 z M 16 16 L 22 16 L 22 22 C 22 25.325562 19.325562 28 16 28 C 13.776108 28 11.861135 26.785839 10.824219 25 L 16 25 L 16 16 z M 24 16 L 30 16 L 30 20.5 C 30 22.444423 28.444423 24 26.5 24 C 25.425819 24 24.490167 23.508667 23.847656 22.753906 C 23.873436 22.493441 24 22.267056 24 22 L 24 16 z"></path>
                                        </svg>
                                    </a>
                                    <a href="https://wa.me/+917391017360" target="__blank" className="home__social-icon">
                                        <i className="uil uil-whatsapp"></i>
                                    </a>
                                </div>
                                <div className="home__img">
                                    <svg className="home__blob" viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
                                        <mask id="mask0" mask-type="alpha">
                                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
                                130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
                                97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
                                0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                        </mask>
                                        <g mask="url(#mask0)">
                                            <path d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
                                165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
                                129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
                                -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z" />
                                            <image className="home__blob-img" href={noBackgroundImg} />
                                        </g>
                                    </svg>
                                </div>

                                <div className="home__data">

                                    <h1 className="home__title">
                                        {/* <div>
                                            {into}
                                            <TypeAnimation
                                                preRenderFirstString={false}
                                                sequence={[
                                                    1500,
                                                    "\t" + JsonAcademicData.name.split(" ")[0],
                                                ]}
                                                speed={300}
                                                repeat={Infinity}
                                            />
                                        </div> */}
                                        Hi, I'm {JsonAcademicData.name.split(" ")[0]}
                                    </h1>
                                    <h3 className="home__subtitle">{JsonAcademicData.title}</h3>
                                    <p className="home__description">{JsonPortfolio.brief_summary}</p>
                                    <Link to="/portfolio/profile#social" className="button button--flex">
                                        Contact Me <i className="uil uil-message button__icon"></i>
                                    </Link>
                                </div>
                            </div>

                            <div className="home__scroll">
                                <button onClick={scrollToSection} className="home__scroll-button button--flex">
                                    <i className="uil uil-mouse-alt home__scroll-mouse"></i>
                                    <span className="home__scroll-name">Scroll down</span>
                                    <i className="uil uil-arrow-down home__scroll-arrow"></i>
                                </button>
                            </div>
                        </div>
                    </section>

                    {/* <!--==================== SERVICES ====================--> */}
                    {/* <section className="services section" id="services">
                        <h2 className="section__title">SERVICES</h2>
                        <span className="section__subtitle">What I can offer through freelancing...</span>

                        <div className="services__container container grid">

                        </div>
                    </section> */}

                    {/* <!--==================== PORTFOLIO ====================--> */}
                    <section className="portfolio section" id="portfolio" ref={scrollRef}>
                        <h2 className="section__title">ARTICLES</h2>
                        <span className="section__subtitle">My most recent work...</span>

                        <Slides data={JsonPortfolio} />


                    </section>

                    {/* <!--==================== SKILLS ====================--> */}
                    <section className="skills section" id="skills">
                        <h2 className="section__title">SKILLS</h2>
                        <span className="section__subtitle">Not convinced? Just try me out!</span>

                        <Skill data={JsonAcademicData.technical_skills} />

                    </section>

                </div >

                <div className="dashboard__items"></div>

            </div >

            <ScrollUp />

            < Footer />
            {/* </motion.div> */}
        </>
    )
}