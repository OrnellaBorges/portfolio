import React from 'react'
import'./about.css'
import ME from '../../assets/Ornella B_BD-1.jpg'
import JCVD from '../../assets/drole1NB-.png'


const AboutGalleryDrole = () => {
  return (
    <section id='aboutGalleryDrole'>
         <ul className="gallery">
            <li className="profil-card">
                <img className= 'profil-img' src={ME} alt="me2"/>
                <div className='profil-info'>
                    <p className='profil-sentence'>phrase drole blablabla</p>
                </div>
            </li>
            <li className="profil-card">
                <img className= 'profil-img' src={ME} alt="me2"/>
                <div className='profil-info'>
                    <p className='profil-sentence'>phrase drole blablabla</p>
                </div>
            </li>
            <li className="profil-card">
                <img className= 'profil-img' src={JCVD} alt="me2"/>
                <div className='profil-info'>
                    <p className='profil-sentence'>Mon modèle de vie : 1+1 = 11 JCVD avait raison!</p>
                </div>
            </li>
            <li className="profil-card">
                <img className= 'profil-img' src={ME} alt="me2"/>
                <div className='profil-info'>
                    <p className='profil-sentence'>phrase drole blablabla</p>
                </div>
            </li>
            <li className="profil-card">
                <img className= 'profil-img' src={ME} alt="me2"/>
                <div className='profil-info'>
                    <p className='profil-sentence'>phrase drole blablabla</p>
                </div>
            </li>
            <li className="profil-card">
                <img className= 'profil-img' src={ME} alt="me2"/>
                <div className='profil-info'>
                    <p className='profil-sentence'>phrase drole blablabla</p>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default AboutGalleryDrole