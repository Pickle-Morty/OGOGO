import React, { useState } from "react";


import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/components/effect-fade/effect-fade.min.css"
import "swiper/components/navigation/navigation.min.css"
import "swiper/components/pagination/pagination.min.css"
import "swiper/swiper-bundle.min.css";
import SwiperCore, {
    EffectFade,Navigation,Pagination
  } from 'swiper/core';

import "./Testimonials.css"

import quotesImg from "../../assets/images/quotes.png";
import smallQuotes from "../../assets/images/smallQuotes.svg";
import authorImg from "../../assets/images/authorImg.jpg";
import ellipseImg1 from "../../assets/images/testimonials/Ellipse1.jpg";
import ellipseImg2 from "../../assets/images/testimonials/Ellipse2.jpg";
import ellipseImg3 from "../../assets/images/testimonials/Ellipse3.jpg";
import ellipseImg4 from "../../assets/images/testimonials/Ellipse4.jpg";
import ellipseImg5 from "../../assets/images/testimonials/Ellipse5.jpg";

SwiperCore.use([EffectFade,Navigation]);

let testimonialsData = [
    {text:"Много качественной информации.Огненная атмосфера видео записи уроков — удобно для изучения.Обратная связь и качественная проверка работ. Обещалось обучение на 2 месяца, но вышло пол года. Классные прямые эфиры. Продолжайте развивать свой курс. Но я считаю, что он уже у многих находится на первом месте. Спасибо за нереальный опыт!",
            name:"Мария Орлова", description:"Студентка UI/UX дизайна"},
    {text:"Много качественной информации.Огненная атмосфера видео записи уроков — удобно для изучения.Обратная связь и качественная проверка работ. Обещалось обучение на 2 месяца, но вышло пол года. Классные прямые эфиры. Продолжайте развивать свой курс. Но я считаю, что он уже у многих находится на первом месте. Спасибо за нереальный опыт!",
            name:"Мария Орлова", description:"Студентка UI/UX дизайна"}
]


export const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="testimonials__content">
                <img className="slide__img" src={quotesImg} alt="" />
                <Swiper
                    slidesPerView={1}
                    spaceBetween={50} 
                    navigation={true} 

                >
                    {testimonialsData.map(slide => {
                        return (
                            <SwiperSlide className="slide">
                            <div className="slide__box">
                                <span className="testimonials__title">Отзывы студентов</span>
                                <div className="testimonials__text">
                                    <img src={smallQuotes} alt="" className="testimonials__quotes" />
                                    <p>{slide.text}</p>
                                </div>
    
                                <div className="autor">
                                    <img src={authorImg} alt="" className="autor__img" />
                                    <div className="autor__wrapper">
                                        <span className="autor__name">{slide.name}</span>
                                        <span className="autor__discr">{slide.description}</span>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                        )
                    })}
                   
                  
                </Swiper>
            </div>
            <div className="testimonials__images">
                <img src={ellipseImg1} alt="" className="testimonials__image1"/>
                <img src={ellipseImg2} alt="" className="testimonials__image2"/>
                <img src={ellipseImg3} alt="" className="testimonials__image3"/>
                <img src={ellipseImg4} alt="" className="testimonials__image4"/>
                <img src={ellipseImg5} alt="" className="testimonials__image5"/>
            </div>
        </section>
    );
} 
