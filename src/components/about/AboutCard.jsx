import React from 'react'
import'./about.css'


//IMPORT ICONS FROM REACT_ICONS
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import {GiBrain} from 'react-icons/gi'
import {PiStudentFill} from 'react-icons/pi'

//IMPORT COMPONENTS


const AboutCards = () => {
  return (
            <div className="about__content">
                <div className="about__cards">
                    <article className='about__card'>
                        <FaAward className = 'about__icon'/>
                        <h5>Experience</h5>
                        <small>7+ Years Working</small>
                    </article>
                    
                    <article className='about__card'>
                        <PiStudentFill className = 'about__icon'/>
                        <h5>Education</h5>
                        <small>5+ Years Studing</small>
                    </article>
                
                    <article className='about__card'>
                        <GiBrain className = 'about__icon'/>
                        <h5>Mindset</h5>
                        <small>Beautyful personality of course</small>
                        <a className='link'>click here to know more</a>
                    </article>
                </div>
            </div>
  )
}

export default AboutCards