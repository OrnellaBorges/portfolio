import React from 'react'
import'./about.css'
import ME from '../../assets/Ornella B_BD-1.jpg'
import ME2 from '../../assets/Ornella B_BD-6.jpg'


const AboutGalleryDrole = () => {
  return (
    <section id='aboutGallery'>
         <ul className="container aboutGalleryDrole__container">
            <li className="list-image"><img src={ME} alt="me2"/></li>
            <li className="list-image"><img src={ME} alt="me2"/></li>
            <li className="list-image"><img src={ME} alt="me2"/></li>
            <li className="list-image"><img src={ME} alt="me2"/></li>
            <li className="list-image"><img src={ME} alt="me2"/></li>
            <li className="list-image"><img src={ME} alt="me2"/></li>
            <li className="list-image"><img src={ME} alt="me2"/></li>
            <li className="list-image"><img src={ME} alt="me2"/></li>
            <li className="list-image"><img src={ME} alt="me2"/></li>
        </ul>
    </section>
  )
}

export default About