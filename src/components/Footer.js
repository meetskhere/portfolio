import { Link } from "react-router-dom"

import { UilFacebookF, UilInstagram, UilLinkedinAlt } from '@iconscout/react-unicons'

import "../assets/css/Style.css"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1><a className="footer__title" href="https://www.linkedin.com/in/arpankumar007/" target="_blank" >Arpan Kumar</a></h1>
            <span className="footer__subtitle">Full Stack Web Developer</span>
          </div>

          <ul className="footer__links">
            <li>
              <Link href="#services" className="footer__link">Services</Link>
            </li>
            <li>
              <Link href="#portfolio" className="footer__link">Portfolio</Link>
            </li>
            <li>
              <Link href="#contact" className="footer__link">Contact Me</Link>
            </li>
          </ul>

          <div className="footer__socials">
            <Link href="#" target="__blank" className="footer__social">
              <UilFacebookF className="nav__icon" />
            </Link>

            <Link href="#" target="__blank" className="footer__social">
            <UilInstagram className="nav__icon" />
            </Link>

            <Link href="#" target="__blank" className="footer__social">
            <UilLinkedinAlt className="nav__icon" />
            </Link>
          </div>
        </div>

        <p className="footer__copy">&#169; Copyright. All right reserved</p>
      </div>
    </footer>
  )
}
