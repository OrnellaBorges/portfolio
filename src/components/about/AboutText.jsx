import React from 'react'
import "./about.css"

const AboutText = ()=>{
    return (
        <div className= "education-container">
            <h2 className="education-title">MY EXPERIENCE: SLIDER COMPONENT A LA PLACE DES BALISES P</h2>
            {/* //mettre un slider de text et d'image*/}
            <div className="education-slider">
                <div className="education-slider-image-container">
                    <img className = "" src="" alt="" />
                </div> 
                <p>Siplec // Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad placeat voluptatibus sit nulla commodi modi maxime rem distinctio, qui eum exercitationem ipsa repudiandae, voluptatem quaerat illo fugit impedit? Facilis, est!</p>
                <p>TEXEUROP // Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure aliquid, quae, impedit asperiores dolorem eius illum repellat assumenda fuga fugiat saepe. Nesciunt commodi obcaecati corporis molestias laudantium minima delectus fugit?</p>
                            
                <a href='#contact' className='btn btn-primary'>Let's talk</a>
            </div>
        </div>
        
    )
}

export default AboutText
