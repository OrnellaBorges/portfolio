import React from 'react'
import'./about.css'


//IMPORT ICONS FROM REACT_ICONS
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

//IMPORT COMPONENTS
import AboutGallery from './AboutGallery'
//import AboutGalleryDrole from './AboutGalleryDrole'
import AboutText from './AboutText'
import AboutCards from './AboutCard'



const About = () => {
  return (
    <section id='about' className='about__container'>
        <h5>Get To Know</h5>
        <h2>About Me</h2>

        <div className="about--subcontainer">
            <AboutGallery />
            
            {/* <AboutGalleryDrole /> */}
            <div className="about-content">
                <AboutCards />
                <AboutText />
            </div>
        </div>
    </section>
  )
}

export default About