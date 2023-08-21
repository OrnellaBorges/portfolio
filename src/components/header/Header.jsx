import React from 'react'
//import { styles } from './header.css' // CSS MODULE VERSION
import "./header.css"

// IMPORT COMPONENTS
import CTA from './CTA'
import Ornella from '../../assets/Ornella-nb.jpg'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
        {/* <div className="container header__container">
            <h5>Hello I am</h5>
            <h1>Ornella Borges</h1>
            <h5 className="text-light">Fullstack Developer</h5>
            <CTA />
            <HeaderSocials/>

            <div className="me">
                <img src={OBCOLPNG} alt="me" />
            </div>

            <a href='#contact' className='scroll__down'>Scroll Down</a>
        </div> */}
        <div className="me">
            <img src={Ornella} alt="me" />
            <div className='container header__container'>
                <h5>Hello I am</h5>
                <h1>Ornella Borges</h1>
                <h5 className="text-light">Fullstack Developer</h5>
                <HeaderSocials/>
                <CTA />
            </div>
        </div>
        

    </header>
)}

export default Header