import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const designServices = [
'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
]

const webServices = [
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
    ]

const contentServices = [
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.',
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit.'
        ]


const Services = () => {
  return (
    <section id='services'>
        <h5>What I Offer</h5>
        <h2>Services</h2>
        <div className="container service__container">
            <article className="service">
                <div className="service__head">
                    <h3>UI/Ux Design</h3>
                </div>
                <ul className="service__list">
                    {designServices.map((element, index) => (
                        <li key={`${element}-${index}`}>
                            <BiCheck className='service__list-icon'/>
                            <p>{element}</p>
                        </li>
                    ))}
                </ul>
            </article>
            <article className="service">
                <div className="service__head">
                    <h3>Web Development</h3>
                </div>
                <ul className="service__list">
                    {webServices.map((element, index) => (
                        <li key={`${element} ${index}`}>
                            <BiCheck className='service__list-icon'/>
                            <p>{element}</p>
                        </li>
                    ))}
                </ul>
            </article>
            <article className="service">
                <div className="service__head">
                    <h3>Content Creation</h3>
                </div>
                <ul className="service__list">
                    {contentServices.map((element, index) => (
                        <li key={`${element} ${index}`}>
                            <BiCheck className='service__list-icon'/>
                            <p>{element}</p>
                        </li>
                    ))}
                </ul>
            </article>
        </div>
    </section>
  )
}

export default Services