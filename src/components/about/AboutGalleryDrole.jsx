import React from 'react'
import'./about.css'
import ME from '../../assets/Ornella B_BD-1.jpg'
import JCVD from '../../assets/drole1NB-.png'
import drole3 from '../../assets/drole3.jpg'
import drole4 from '../../assets/drole4.jpg'
import drole5 from '../../assets/drole5.jpg'
import drole6 from '../../assets/drole6.jpg'
import drole7 from '../../assets/drole7.jpg'
import drole8 from '../../assets/drole8.jpg'
import drole2 from '../../assets/drole2.jpg'
import drole9 from '../../assets/drole9.jpg'



const AboutGalleryDrole = () => {
  return (
    <section id='aboutGalleryDrole'>
         <ul className="gallery">
            <li className="profil-card">
                <img className= 'profil-img' src={drole2} alt="me2"/>
                <div className='profil-info'>
                    <p className='profil-sentence'>phrase drole blablabla</p>
                </div>
            </li>
            <li className="profil-card">
                <img className= 'profil-img' src={drole3} alt="me2"/>
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
                <img className= 'profil-img' src={drole3} alt="me2"/>
                <div className='profil-info'>
                    <p className='profil-sentence'>phrase drole blablabla</p>
                </div>
            </li>
            <li className="profil-card">
                <img className= 'profil-img' src={drole4} alt="me2"/>
                <div className='profil-info'>
                    <p className='profil-sentence'>phrase drole blablabla</p>
                </div>
            </li>
            <li className="profil-card">
                <img className= 'profil-img' src={drole5} alt="me2"/>
                <div className='profil-info'>
                    <p className='profil-sentence'>phrase drole blablabla</p>
                </div>
            </li>
        </ul>
    </section>
  )
}

export default AboutGalleryDrole