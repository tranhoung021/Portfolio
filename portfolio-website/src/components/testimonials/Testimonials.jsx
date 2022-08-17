import React from 'react'
import './testimonials.css'
import Client1 from '../../assets/avatar1.jpg'
import Client2 from '../../assets/avatar2.jpg'
import Client3 from '../../assets/avatar3.jpg'
import Client4 from '../../assets/avatar4.jpg'
// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
    {
        avatar: Client1,
        client: "Client1",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab vel fuga, iure numquam dolor adipisci minima sapiente, cum quasi quos possimus id debitis suscipit? Totam ea laboriosam nemo nobis quasi!"
    },
    {
        avatar: Client2,
        client: "Client2",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab vel fuga, iure numquam dolor adipisci minima sapiente, cum quasi quos possimus id debitis suscipit? Totam ea laboriosam nemo nobis quasi!"
    },
    {
        avatar: Client3,
        client: "Client3",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab vel fuga, iure numquam dolor adipisci minima sapiente, cum quasi quos possimus id debitis suscipit? Totam ea laboriosam nemo nobis quasi!"
    },
    {
        avatar: Client4,
        client: "Client4",
        review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab vel fuga, iure numquam dolor adipisci minima sapiente, cum quasi quos possimus id debitis suscipit? Totam ea laboriosam nemo nobis quasi!"
    },
]


const Testimonials = () => {
    return (
        <section id="testimonials">
            <h5>Review from clients</h5>
            <h2>Testimonials</h2>

            <Swiper className="container testimonials__container"
                modules={[Pagination]}
                spaceBetween={40}
                slidesPerView={1}
                scrollbar={{ draggable: true }}
                pagination={{ clickable: true }} >
                {
                    data.map(({ avatar, client, review }, index) => {
                        return (
                            <SwiperSlide key={index} className="testimonial">
                                <div className="client__avatar">
                                    <img src={avatar} alt="" />
                                </div>
                                <h5>{client} </h5>
                                <small className="client__review">
                                    {review}
                                </small>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
        </section>
    )
}

export default Testimonials