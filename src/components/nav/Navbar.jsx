import React from 'react'
import React, { useState, useEffect } from 'react';
import './navbar.css'
//import { styles } from './nav.css' // CSS MODULE VERSION


// IMPORT ICONS FROM REACT LIBRARY
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'


const Navbar = () => {

    //const [activeNav, setActiveNav] = useState('#')
    const [activeSection, setActiveSection] = useState('');

    const handleScroll = () => {
        // Logic pour déterminer quelle section est actuellement visible
        // Mettez à jour activeSection en conséquence
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <>
        <nav className='navbar'>
            {/* <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={()=> setActiveNav('#')}><AiOutlineHome/></a>
            <a href="#about" className= {activeNav === '#about'? 'active' : ''} onClick={()=> setActiveNav('#about')}><AiOutlineUser/></a>
            <a href="#experience" className= {activeNav === '#experience'? 'active': ''} onClick={()=> setActiveNav('#experience')}><BiBook/></a>
            <a href="#services" className= {activeNav === '#services'? 'active': ''} onClick={()=> setActiveNav('#services')}><RiServiceLine/></a>
            <a href="#contact" className= {activeNav === '#contact'? 'active': ''} onClick={()=> setActiveNav('#contact')}><BiMessageSquareDetail/></a> */}
            <a href="#section1" className={activeSection === 'section1' ? 'active' : ''}>Section 1</a>
            <a href="#section2" className={activeSection === 'section2' ? 'active' : ''}>Section 2</a>
            {/* Ajoutez d'autres liens de navigation ici */}
        </nav>
    </>
  )}

export default Navbar
