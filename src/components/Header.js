import { useEffect, useState } from 'react';
import { NavLink, useLocation } from "react-router-dom"
// import { UilEstate, UilApps, UilUniversity, UilUser, UilTimes, UilMoon, UilSun, } from '@iconscout/react-unicons'
import { motion } from 'framer-motion';

import JsonAcademicData from '../assets/json/AcademicCV.json'

import profilepic from "../assets/img/User.jpg"

import "../assets/css/Style.css"

export const Header = () => {

  // const history = useNavigate();

  /*==================== CHANGE BACKGROUND HEADER ====================*/
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY >= 80) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  /*==================== MENU SHOW Y HIDDEN ====================*/

  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  const closeMenu = () => {
    setIsMenuVisible(false);
  };
  const menuClass = `nav__menu ${isMenuVisible ? 'show-menu' : ''}`

  /*==================== REMOVE MENU MOBILE ====================*/
  // const navLink = document.querySelectorAll('.nav__link')

  // function linkAction() {
  //   const navMenu = document.getElementById('nav-menu')
  //   navMenu.classList.remove('show-menu')
  // }
  // navLink.forEach(n => n.addEventListener('click', linkAction))

  /*==================== DARK LIGHT THEME ====================*/
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  // Function to toggle the theme
  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  // Load the user's theme preference from localStorage on component mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('selected-theme');
    if (savedTheme === 'dark') {
      setIsDarkTheme(true);
    }
  }, []);

  // Save the user's theme preference to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('selected-theme', isDarkTheme ? 'dark' : 'light');
    // Toggle the body class based on the theme
    document.body.classList.toggle('dark-theme', isDarkTheme);
  }, [isDarkTheme]);

  /*==================== UPDATE ACTIVE TAB FOR HEADER ====================*/

  const location = useLocation();
  const [activeTab, setActiveTab] = useState('');

  // Update the activeTab state when the route changes
  useEffect(() => {
    // Extract the pathname from the location
    const pathname = location.pathname;

    // Determine which tab should be active based on the pathname
    if (pathname === '/portfolio/dashboard') {
      setActiveTab('dashboard');
    } else if (pathname === '/portfolio/resume') {
      setActiveTab('resume');
    } else if (pathname === '/portfolio/profile') {
      setActiveTab('aboutMe');
    } else {
      // Default to no active tab if the route doesn't match any tabs
      setActiveTab('');
    }
    // Scroll to the top when the route changes
    const delayScroll = setTimeout(() => {
      // Scroll to the top when the activeTab change
      window.scrollTo(0, 0);
    }, 500);
    return () => clearTimeout(delayScroll);
  }, [location]);


  return (
    <header className={`header ${scrolling ? 'scroll-header' : ''}`} id="header">
      <nav className="nav container">
        <NavLink to="/portfolio/dashboard" className="nav__logo">
          <div className='username'>
            <p className="username__icon">{JsonAcademicData.name[0]}</p>
            {/* <img className="username__icon" src={profilepic} alt="" /> */}
            {/* <i className="uil uil-user contact__icon"></i> */}
            <span className='username__title'>
              {JsonAcademicData.name}
            </span>
          </div>

        </NavLink>

        <motion.div
          className="slide-out"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className={menuClass} id="nav-menu">

          <ul className="nav__list grid">

            <li className="nav__item">
              <NavLink className={`nav__link ${activeTab === 'dashboard' ? 'active-link' : ''}`} to="/portfolio/dashboard">
                <i className="uil uil-estate nav__icon"></i>
                Dashboard
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink className={`nav__link ${activeTab === 'resume' ? 'active-link' : ''}`} to="/portfolio/resume">
                <i className="uil uil-university nav__icon"></i>
                Resume
              </NavLink>
            </li>

            <li className="nav__item">
              <NavLink className={`nav__link ${activeTab === 'aboutMe' ? 'active-link' : ''}`} to="/portfolio/profile">
                <i className="uil uil-user nav__icon"></i>
                Profile
              </NavLink>
            </li>

          </ul>
          <i className="uil uil-times nav__close" id="nav-close" onClick={closeMenu}></i>
        </div>

        <div className="nav__btns">
          <div className={`app ${isDarkTheme ? 'dark-theme' : 'light-theme'}`}>
            {/* <!-- Theme change button --> */}
            <div onClick={toggleTheme}>
              {isDarkTheme ? (
                <i className="uil uil-sun change-theme" id="theme-button"></i>
              ) : (
                <i className="uil uil-moon change-theme" id="theme-button"></i>
              )}
            </div>

          </div>

          <div className="nav__toggle" id="nav-toggle" onClick={toggleMenu}>
            <i className="uil uil-apps nav__icon"></i>
          </div>
        </div>
        {/* </motion.div> */}
      </nav>
    </header >
  )
}
