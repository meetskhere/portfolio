import { Header, Footer, ScrollUp } from "../components/index"
import OpenStreetMapLink from '../components/OpenStreetMapLink';

import qr_code_src from "../assets/img/QR_CODE.png"
import profilePic from "../assets/img/User.jpg"
import wiki from "../assets/img/Wikipedia.svg"

import cv from "../assets/pdf/CV.pdf"
import vcard from "../assets/vcf/vcard.vcf"

import JsonAcademicData from '../assets/json/AcademicCV.json'
import JsonPortfolio from '../assets/json/Portfolio.json'
// import JsonIndustrialData from '../assets/json/IndustrialCV-KPIT_V2.json'

import { Tooltip as ReactTooltip } from "react-tooltip";

import "../assets/css/Style.css"

export const AboutMe = () => {

  return (
    <div>
      <Header />

      <section className="about section" id="about">
        <h2 className="section__title">ABOUT ME</h2>
        <span className="section__subtitle">Here I am. This is me...</span>

        <div className="about__container container grid">
          <img src={profilePic} alt="" className="about__img" />

          <div className="about__data">
            <p className="about__description">{JsonPortfolio.brief_summary}</p>

            <div className="about__info">
              <div>
                <span className="about__info-title">{JsonPortfolio.brief_information.experience[0]}</span>
                <span className="about__info-name">Years of<br /> Industrial experience</span>
              </div>

              <div>
                <span className="about__info-title">{JsonPortfolio.brief_information.projects}</span>
                <span className="about__info-name">Completed <br /> project</span>
              </div>

              <div>
                <span className="about__info-title">{JsonPortfolio.brief_information.courses}</span>
                <span className="about__info-name">Courses <br /> undertaken</span>
              </div>
            </div>

            <div className="about__button">
              <a download="" href={cv} className="button button-flex">
                Curriculum Vitae<br /><i className="uil uil-download-alt button__icon"></i>
              </a>
              <a download="" href={vcard} className="button button-flex">
                Contact Details<br /><i className="uil uil-download-alt button__icon"></i>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="contact section" id="contact">
        <h2 className="section__title">CONTACT ME</h2>
        <span className="section__subtitle">Get In Touch</span>

        <div className="contact__container container grid">

          <div className="contact__info">

            <a href={`tel:${JsonAcademicData.contact.mobile.work}`} className="contact__information">
              <i className="uil uil-phone contact__icon"></i>

              <div>
                <h3 className="contact__title">Call Me</h3>
                <span className="contact__subtitle">{JsonAcademicData.contact.mobile.work}</span>
              </div>
            </a>

            <a href={`mailto:${JsonAcademicData.contact.email[1]}`} className="contact__information">

              <i className="uil uil-envelope contact__icon"></i>

              <div>
                <h3 className="contact__title">Mail Me</h3>
                <span className="contact__subtitle email">{JsonAcademicData.contact.email[1]}</span>
              </div>
            </a>

            <div className="contact__information">
              <i className="uil uil-map-marker contact__icon"></i>

              <div>

                <OpenStreetMapLink location={JsonPortfolio.contact.location.residential_location} />
              </div>
            </div>

          </div>

          <div className="qr__code__info">
            <img className="qr-code" src={qr_code_src} alt="" srcSet="" />
          </div>
        </div>

      </section>

      <section className="social section" id="social">
        <h2 className="section__title">SOCIAL MEDIA</h2>
        <span className="section__subtitle">Explore the potential</span>

        <div className="social__container container">

          <div className="social__card">
            <div className="social__information">

              <a data-tooltip-id="my-tooltip-1" href="https://www.facebook.com/meetshubhamkumarhere" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-facebook-f contact__icon"></i>
              </a>

              <ReactTooltip id="my-tooltip-1" place="bottom" content="Facebook" />
            </div>

            <div className="social__information">

              <a data-tooltip-id="my-tooltip-2" href="https://www.instagram.com/meetshubhamkumarhere" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-instagram contact__icon"></i>
              </a>

              <ReactTooltip id="my-tooltip-2" place="bottom" content="Instagram" />
            </div>

            <div className="social__information">

              <a data-tooltip-id="my-tooltip-3" href="https://twitter.com/meetskhere" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-twitter-alt contact__icon"></i>
              </a>

              <ReactTooltip id="my-tooltip-3" place="bottom" content="Twitter" />
            </div>

            <div className="social__information">
              <a data-tooltip-id="my-tooltip-4" href="https://www.quora.com/profile/Shubham-Kumar-1134" target="_blank" rel="noopener noreferrer">
                <svg className="contact__icon__position contact__icon contact__icon__adjust" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg"><path d="M440.5 386.7h-29.3c-1.5 13.5-10.5 30.8-33 30.8-20.5 0-35.3-14.2-49.5-35.8 44.2-34.2 74.7-87.5 74.7-153C403.5 111.2 306.8 32 205 32 105.3 32 7.3 111.7 7.3 228.7c0 134.1 131.3 221.6 249 189C276 451.3 302 480 351.5 480c81.8 0 90.8-75.3 89-93.3zM297 329.2C277.5 300 253.3 277 205.5 277c-30.5 0-54.3 10-69 22.8l12.2 24.3c6.2-3 13-4 19.8-4 35.5 0 53.7 30.8 69.2 61.3-10 3-20.7 4.2-32.7 4.2-75 0-107.5-53-107.5-156.7C97.5 124.5 130 71 205 71c76.2 0 108.7 53.5 108.7 157.7.1 41.8-5.4 75.6-16.7 100.5z" /></svg>
              </a>

              <ReactTooltip id="my-tooltip-4" place="bottom" content="Quora" />
            </div>

            <div className="social__information">
              <a data-tooltip-id="my-tooltip-5" href="https://in.pinterest.com/shubhamkumar007" target="_blank" rel="noopener noreferrer">
                <svg style={{ transform: "scale(1.1)" }} className="contact__icon contact__icon__position contact__icon__adjust" viewBox="0 0 56.693 56.693" xmlns="http://www.w3.org/2000/svg"><path d="M30.374,4.622c-13.586,0-20.437,9.74-20.437,17.864c0,4.918,1.862,9.293,5.855,10.922c0.655,0.27,1.242,0.01,1.432-0.715  c0.132-0.5,0.445-1.766,0.584-2.295c0.191-0.717,0.117-0.967-0.412-1.594c-1.151-1.357-1.888-3.115-1.888-5.607  c0-7.226,5.407-13.695,14.079-13.695c7.679,0,11.898,4.692,11.898,10.957c0,8.246-3.649,15.205-9.065,15.205  c-2.992,0-5.23-2.473-4.514-5.508c0.859-3.623,2.524-7.531,2.524-10.148c0-2.34-1.257-4.292-3.856-4.292  c-3.058,0-5.515,3.164-5.515,7.401c0,2.699,0.912,4.525,0.912,4.525s-3.129,13.26-3.678,15.582  c-1.092,4.625-0.164,10.293-0.085,10.865c0.046,0.34,0.482,0.422,0.68,0.166c0.281-0.369,3.925-4.865,5.162-9.359  c0.351-1.271,2.011-7.859,2.011-7.859c0.994,1.896,3.898,3.562,6.986,3.562c9.191,0,15.428-8.379,15.428-19.595  C48.476,12.521,41.292,4.622,30.374,4.622z" /></svg>
              </a>

              <ReactTooltip id="my-tooltip-5" place="bottom" content="Pinterest" />
            </div>

            <div className="social__information">
              <a data-tooltip-id="my-tooltip-6" href="https://www.linkedin.com/in/meetshubhamkumarhere" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-linkedin-alt contact__icon"></i>
              </a>

              <ReactTooltip id="my-tooltip-6" place="bottom" content="LinkedIn" />
            </div>

            <div className="social__information">
              <a data-tooltip-id="my-tooltip-7" href="https://www.youtube.com/@meetskhere" target="_blank" rel="noopener noreferrer">
                {/* <svg role="img" className="contact__icon contact__icon__position contact__icon__adjust" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title /><path d="M17.144 20.572H3.43C3.43 22.465 4.963 24 6.856 24h10.286c1.893 0 3.428-1.535 3.428-3.428V6.492c0-.07-.054-.125-.124-.125h-3.18c-.067 0-.123.056-.123.126v14.08zm0-20.572c1.892 0 3.427 1.535 3.427 3.43H6.858v14.078c0 .068-.056.125-.125.125H3.554c-.07 0-.125-.057-.125-.125V3.428C3.43 1.536 4.963 0 6.856 0h10.287" /></svg> */}
                <i class="uil uil-youtube contact__icon"></i>
              </a>

              <ReactTooltip id="my-tooltip-7" place="bottom" content="Youtube" />
            </div>

            <div className="social__information">
              <a data-tooltip-id="my-tooltip-8" href="https://en.wikipedia.org/wiki/User%3AShubham_Kumar_365?wprov=sfla1" target="_blank" rel="noopener noreferrer">
                {/* <svg style={{ transform: "scale(1.5)" }} className="contact__icon contact__icon__position contact__icon__adjust " version="1.0" xmlns="http://www.w3.org/2000/svg" height="100%" width="100%" viewBox="0 0 240.000000 240.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,240.000000) scale(0.100000,-0.100000)" stroke="none"><path d="M638 1949 c-87 -45 -92 -169 -10 -228 66 -47 158 -36 212 25 24 28 30 44 30 79 0 41 -2 45 -25 45 -28 0 -31 9 -12 29 10 11 7 12 -18 7 l-29 -7 19 21 20 22 -35 -7 c-30 -7 -33 -6 -22 7 6 8 9 18 5 21 -14 14 -99 5 -135 -14z" /> <path d="M1335 1945 c-169 -37 -355 -145 -491 -287 -92 -95 -139 -179 -154 -273 -5 -33 -14 -76 -20 -95 -17 -60 -12 -174 11 -235 52 -139 198 -269 434 -385 124 -61 449 -181 487 -179 7 0 -59 24 -147 54 -336 111 -539 223 -673 369 -79 87 -105 151 -110 265 -2 53 -2 94 1 91 3 -3 15 -32 26 -64 64 -183 220 -319 506 -444 125 -54 148 -66 232 -123 78 -53 163 -103 163 -96 0 2 -37 27 -83 55 -46 28 -90 58 -98 68 -13 15 -12 16 11 9 330 -105 364 -110 205 -31 -289 144 -484 308 -596 503 -58 103 -75 230 -44 338 25 86 84 172 180 262 104 97 142 113 273 118 46 2 87 7 90 11 9 9 -167 -2 -192 -12 -42 -16 -3 17 59 52 36 19 65 38 65 40 0 8 -76 2 -135 -11z" /> <path d="M1450 1838 c-91 -54 -228 -149 -250 -173 -14 -16 3 -6 37 22 35 27 101 72 148 99 47 27 94 54 103 61 28 20 0 13 -38 -9z" /> <path d="M1095 1558 c-35 -41 -90 -136 -83 -143 2 -2 16 20 31 50 16 29 44 72 64 94 19 23 32 41 30 41 -3 0 -22 -19 -42 -42z" /><path d="M1610 535 c0 -7 101 -57 106 -53 2 2 -21 16 -51 31 -30 15 -55 25 -55 22z" /><path d="M1620 487 c9 -10 211 -59 217 -53 3 3 -3 8 -13 12 -10 3 -31 10 -45 16 -15 5 -44 11 -65 12 -22 2 -52 7 -69 11 -16 4 -28 5 -25 2z" /></g></svg> */}
                <img className="contact__icon contact__icon__position contact__icon__adjust" src={wiki} alt="" />
              </a>

              <ReactTooltip id="my-tooltip-8" place="bottom" content="Wikipedia" />

            </div>

            <div className="social__information">
              <a data-tooltip-id="my-tooltip-9" href="https://teams.microsoft.com/l/chat/0/0?users=shubhamkumar007@hotmail.com" target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" className="contact__icon contact__icon__position contact__icon__adjust" viewBox="0 0 48 48" width="48px" height="48px"><path fill="#5059c9" d="M44,22v8c0,3.314-2.686,6-6,6s-6-2.686-6-6V20h10C43.105,20,44,20.895,44,22z M38,16	c2.209,0,4-1.791,4-4c0-2.209-1.791-4-4-4s-4,1.791-4,4C34,14.209,35.791,16,38,16z" /><path d="M35,22v11c0,5.743-4.841,10.356-10.666,9.978C19.019,42.634,15,37.983,15,32.657V20h18	C34.105,20,35,20.895,35,22z M25,17c3.314,0,6-2.686,6-6s-2.686-6-6-6s-6,2.686-6,6S21.686,17,25,17z" /><circle cx="25" cy="11" r="6" /><path d="M26,33.319V20H15v12.657c0,1.534,0.343,3.008,0.944,4.343h6.374C24.352,37,26,35.352,26,33.319z" opacity=".05" /><path d="M15,20v12.657c0,1.16,0.201,2.284,0.554,3.343h6.658c1.724,0,3.121-1.397,3.121-3.121V20H15z" opacity=".07" /><path d="M24.667,20H15v12.657c0,0.802,0.101,1.584,0.274,2.343h6.832c1.414,0,2.56-1.146,2.56-2.56V20z" opacity=".09" /><linearGradient id="DqqEodsTc8fO7iIkpib~Na" x1="4.648" x2="23.403" y1="14.648" y2="33.403" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#5961c3" /><stop offset="1" stopColor="#3a41ac" /></linearGradient><path fill="url(#DqqEodsTc8fO7iIkpib~Na)" d="M22,34H6c-1.105,0-2-0.895-2-2V16c0-1.105,0.895-2,2-2h16c1.105,0,2,0.895,2,2v16	C24,33.105,23.105,34,22,34z" /><path fill="#fff" d="M18.068,18.999H9.932v1.72h3.047v8.28h2.042v-8.28h3.047V18.999z" /></svg>
              </a>

              <ReactTooltip id="my-tooltip-9" place="bottom" content="Teams" />
            </div>

            <div className="social__information">
              <a data-tooltip-id="my-tooltip-10" href="https://github.com/meetskhere" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-github-alt contact__icon"></i>
              </a>

              <ReactTooltip id="my-tooltip-10" place="bottom" content="Github" />
            </div>

            <div className="social__information">
              <a data-tooltip-id="my-tooltip-11" href="https" target="_blank" rel="noopener noreferrer">
                {/* <svg className="contact__icon contact__icon__position contact__icon__adjust" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title /><g id="Teamviewer"><path d="M8.71,15A.5.5,0,0,0,9,14.5v-1h6v1a.5.5,0,0,0,.82.38l3-2.5a.5.5,0,0,0,0-.77l-3-2.5A.5.5,0,0,0,15,9.5v1H9v-1a.5.5,0,0,0-.82-.38l-3,2.5a.5.5,0,0,0,0,.77l3,2.5A.5.5,0,0,0,8.71,15Z" /><path d="M21,1H3A2,2,0,0,0,1,3V21a2,2,0,0,0,2,2H21a2,2,0,0,0,2-2V3A2,2,0,0,0,21,1ZM12,3a9,9,0,1,1-9,9A9,9,0,0,1,12,3Z" /></g></svg> */}
                <i class="fab fa-stack-exchange contact__icon"></i>
              </a>

              <ReactTooltip id="my-tooltip-11" place="bottom" content="Stack Exchange" />
            </div>

            <div className="social__information">
              <a data-tooltip-id="my-tooltip-12" href="https://meetshubhamkumarhere.wordpress.com" target="_blank" rel="noopener noreferrer">
                <i className="uil uil-wordpress contact__icon"></i>
              </a>

              <ReactTooltip id="my-tooltip-12" place="bottom" content="Wordpress" />
            </div>

            <div className="social__information">
              <a data-tooltip-id="my-tooltip-13" href="https://meetshubhamkumarhere.medium.com" target="_blank" rel="noopener noreferrer">
                <svg className="contact__icon contact__icon__position contact__icon__adjust" viewBox="0 0 512 512"><g><path d="M512,62.747C512,28.116 483.884,0 449.253,0L62.747,0C28.116,0 0,28.116 0,62.747L0,449.253C0,483.884 28.116,512 62.747,512L449.253,512C483.884,512 512,483.884 512,449.253L512,62.747ZM283.546,256.002C283.546,323.438 229.249,378.105 162.275,378.105C95.301,378.105 41,323.438 41,256.002C41,188.566 95.296,133.895 162.275,133.895C229.253,133.895 283.546,188.566 283.546,256.002ZM416.584,256.002C416.584,319.478 389.436,370.957 355.947,370.957C322.457,370.957 295.309,319.478 295.309,256.002C295.309,192.526 322.453,141.048 355.942,141.048C389.432,141.048 416.58,192.509 416.58,256.002L416.584,256.002ZM471,256.002C471,312.861 461.453,358.983 449.674,358.983C437.894,358.983 428.351,312.874 428.351,256.002C428.351,199.13 437.898,153.021 449.674,153.021C461.449,153.021 471,199.126 471,256.002Z" /></g></svg>
              </a>

              <ReactTooltip id="my-tooltip-13" place="bottom" content="Medium" />
            </div>

            <div className="social__information">
              <a data-tooltip-id="my-tooltip-14" href="https://wa.me/+917391017360" target="_blank" rel="noopener noreferrer">
                {/* <svg role="img" className="contact__icon contact__icon__position contact__icon__adjust" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title /><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" /></svg> */}
                <i className="uil uil-whatsapp contact__icon"></i>
              </a>

              <ReactTooltip id="my-tooltip-14" place="bottom" content="Whatsapp" />
            </div>

            <div className="social__information">
              <a data-tooltip-id="my-tooltip-15" href="https://g.dev/meetshubhamkumarhere" target="_blank" rel="noopener noreferrer">
                {/* <svg role="img" className="contact__icon contact__icon__position contact__icon__adjust" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title /><path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.358" /></svg> */}
                <i className="uil uil-arrow contact__icon"></i>
              </a>

              <ReactTooltip id="my-tooltip-15" place="bottom" content="Google Developer Profile" />
            </div>

          </div>

        </div>
      </section>

      <ScrollUp />
      <Footer />
    </div>
  )
}
