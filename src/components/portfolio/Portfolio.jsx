import React from 'react'
import './portfolio.css'
import {data} from '../../data/projectData'

import {CgUnavailable} from 'react-icons/cg'

const Portfolio = () => {
  return (
    <>
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>
            <div className="container portfolio__container">
                {
                    data.map(({id, image, title, github, demo})=> {
                        return (
                            <article key={id} className="portfolio__item">
                                <div className="portfolio__item-image">
                                    <img src={image} alt={title}/>
                                </div>
                                <h3>{title}</h3>
                                <small>Work in progess</small>

                                <div className="portfolio__item-cta">
{/*                                     <a href={github} className='btn'>Github</a>
                                    <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                                </div>
                                <a href="#contact" className="btn btn-primary">
                                    Let&apos;s talk
                                </a>
                            </article>
                        )
                    })
                }
            </div>
        </section>

    </>
)}

export default Portfolio