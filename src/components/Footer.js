import { Tooltip as ReactTooltip } from "react-tooltip";

import "../assets/css/Style.css"

import JsonPortfolio from "../assets/json/Portfolio.json"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__bg">
        <div className="footer__container container grid">
          <div>
            <h1><a className="footer__title" target="_blank" rel="noreferrer">Designed With <i className="uil uil-heart contact__icon1"></i> By</a></h1>
            <div className="dev">
              <div className="dev__info">
                <div className="dev__name">Arpan Kumar</div>
                <div className="dev__designation">Full Stack Web Developer</div>
                <div className="dev__description"></div>
              </div>

              <div className="dev__contact">
                <div className="dev__contact__phone">
                  <a href={`tel:+919577010171`} className="">
                    <i className="uil uil-phone contact__icon2"></i>
                    <span className="contact__phone">+91 95770 10171</span>
                  </a>
                </div>

                <div className="dev__contact__email">
                  <a href={`mailto:arpankumar007@outlook.com`}>
                    <i className="uil uil-envelope contact__icon2"></i>
                    <span className="contact__email">arpankumar007@outlook.com</span>
                  </a>
                </div>

              </div>
              <div className="dev__socialMedia">
                <div className="social__information">
                  <a data-tooltip-id="my-tooltip-101" href="https://www.linkedin.com/in/arpankumar007/" target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-linkedin-alt contact__icon2"></i>
                  </a>

                  <ReactTooltip id="my-tooltip-101" place="bottom" content="LinkedIn" />
                </div>

                <div className="social__information">
                  <a data-tooltip-id="my-tooltip-102" href="https://github.com/thisisarpankumar" target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-github-alt contact__icon2"></i>
                  </a>

                  <ReactTooltip id="my-tooltip-102" place="bottom" content="Github" />
                </div>

                <div className="social__information">
                  <a data-tooltip-id="my-tooltip-103" href="https://wa.me/+919577010171" target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-whatsapp contact__icon2"></i>
                  </a>

                  <ReactTooltip id="my-tooltip-103" place="bottom" content="Whatsapp" />
                </div>

                <div className="social__information">
                  <a data-tooltip-id="my-tooltip-104" href="https://thisisarpankumarwordpress.wordpress.com/" target="_blank" rel="noopener noreferrer">
                    <i className="uil uil-wordpress contact__icon2"></i>
                  </a>

                  <ReactTooltip id="my-tooltip-104" place="bottom" content="Wordpress" />
                </div>
              </div>
              <div className="last_update">Site Last Updated On: <span>{JsonPortfolio.lastUpdateOn}</span></div>
            </div>
          </div>

          <div className="copyright">
            <h1 className="copyright__header">Copyright Disclaimer</h1>
            <p className="copyright__paragraph">This web application is licensed under the GNU General Public License v3.0. You may redistribute and modify this software under the terms of the GNU GPL as published by the Free Software Foundation, either version 3 of the License or (at your option) any later version.</p>

            <p className="copyright__paragraph">This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.</p>

            <p className="copyright__paragraph">To know more, click <a className="copyright__link" rel="noreferrer" target="_blank" href="https://www.gnu.org/licenses/gpl-3.0.html">here</a></p>
          </div>

          {/* <ul className="footer__links">
            <li>
              <Link href="#services" className="footer__link">Services</Link>
            </li>
            <li>
              <Link href="#portfolio" className="footer__link">Portfolio</Link>
            </li>
            <li>
              <Link href="#contact" className="footer__link">Contact Me</Link>
            </li>
          </ul> */}

          {/* <div className="footer__socials">
            <Link href="#" target="__blank" className="footer__social">
              <UilFacebookF className="nav__icon" />
            </Link>

            <Link href="#" target="__blank" className="footer__social">
              <UilInstagram className="nav__icon contact__icon2" />
            </Link>

            <Link href="#" target="__blank" className="footer__social">
              <UilLinkedinAlt className="nav__icon" />
            </Link>
          </div> */}
        </div>

        <p className="footer__copy">&#169; Arpan 2024. All right reserved.</p>
      </div>
    </footer>
  )
}
