import React from 'react'
import'./about.css'
import ME from '../../assets/Ornella B_BD-1.jpg'
import ME2 from '../../assets/Ornella B_BD-6.jpg'

const galleryDroleData = ['Ornella B_BD-6.jpg','Ornella B_BD-6.jpg','Ornella B_BD-6.jpg','Ornella B_BD-6.jpg']

const AboutGalleryDrole = () => {
  return (
    <div id='aboutGallery'>
        <ul className="container aboutGallery__container">
            <li className="list-image">
                <img src={ME} alt="me2"/>
                <div className='image-info'>
                    <p className='sentence-galleryDrole'>phrase drole blablabla</p>
                </div>  
            </li>
        </ul>
    </div>
  )
}

export default AboutGalleryDrole