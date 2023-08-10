import React from 'react'
import'./testimonials.css'
import {testimonialsData} from '../../data/testimonialsData'


// import SWIPER core and require modules
//import{Pagination} from 'swiper';
//import {Swiper, SwiperSlide } from 'swiper/react'

// import swiper styles 
//import 'swiper/css'
//import 'swiper/css/pagination'



const Testimonials = () => {
  return (
    <section id='testimonials'>
        <h5>Review from client</h5>
        <h2>Testimonials</h2>

        <div className="container testimonials__container">
            {
                testimonialsData.map(({avatar, name, review}, index)=> { 
                    return (
                    <article key={`${name}-${index}`} className="testimonial">
                <div className="client__avatar">
                    <img src={avatar} alt="Avatar One" />
                </div>
                <h5 className="clien__name">{name}</h5>
                <small className="client__review">{review}</small> 
            </article>
                )
                })
            }
            {/* <article className="testimonial">
                <div className="client__avatar">
                    <img src={AVTR1} alt="Avatar One" />
                </div>
                <h5 className="clien__name">Ernest Achiver</h5>
                <small className="client__review">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, quisquam! Aperiam eligendi quibusdam aliquam ipsum, nulla facere explicabo molestiae ipsam, aliquid, quia cum dolor pariatur accusantium iste sunt et quos!
                </small> 
            </article>*/}
        </div>
    </section>
  )
}

export default Testimonials