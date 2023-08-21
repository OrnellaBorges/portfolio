import React from 'react'
import './experience.css'

// import Icons
import {BsPatchCheckFill} from 'react-icons/bs'
import {AiFillHtml5} from 'react-icons/ai'
import {FaCss3Alt} from 'react-icons/fa'
import {SiTailwindcss} from 'react-icons/si'
import {SiJavascript} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'




const Experience = () => {
  return (
    <section id='experience'>
        <h5>What Skill I have</h5>
        <h2>My Skills stack</h2>
        <div className=" container experience__container">
            <div className="experience__frontend">
                <h3>Frontend Developpement</h3>
                <div className="experience__content">
                    <article className='experience__detail'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>HTML</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__detail'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>CSS</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__detail'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Javascript</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__detail'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Bootstrap</h4>
                            <small className='text-light'>Experienced</small>
                        </div>
                    </article>
                    <article className='experience__detail'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Tailwind</h4>
                            <small className='text-light'>Novice</small>
                        </div>
                    </article>
                    <article className='experience__detail'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>React</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
            <div className="experience__backend">
            <h3>Backend Developpement</h3>
                <div className="experience__content">
                    <article className='experience__detail'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>Node JS</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__detail'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>MySQL</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                    <article className='experience__detail'>
                        <BsPatchCheckFill className='experience__details-icon'/>
                        <div>
                            <h4>MySQL</h4>
                            <small className='text-light'>Intermediate</small>
                        </div>
                    </article>
                </div>
            </div>
        </div> 

    </section>
  )
}

export default Experience