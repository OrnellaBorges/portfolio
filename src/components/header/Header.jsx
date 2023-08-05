import React from 'react'
//import { styles } from './header.css' // CSS MODULE VERSION
import "./header.css"

// IMPORT COMPONENTS
import CTA from './CTA'
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5>Hello</h5>
            <h1>Ornella Borges</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA />
            <HeaderSocials/>

            <div className="me">
                <img src={ME} alt="me" />
            </div>

            <a href='#contact' className='scroll__down'></a>
        </div>
    </header>
)}

export default Header