import React, { useState } from "react";
import { useGet } from "../../hooks/get.hook";
import Styles from "./CoursesIntensive.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Navigation } from "swiper";

import "swiper/swiper-bundle.min.css";
import { Modal } from "../Modal/Modal";

import image0 from "../../assets/images/courses/courseHtml.png"
import image1 from "../../assets/images/courses/course3.png"
import image2 from "../../assets/images/courses/courseAndroid.png"
import { NavLink } from "react-router-dom";

SwiperCore.use([Pagination, Navigation]);

export const CoursesIntensive = ({ link }) => {
  const { loading } = useGet("courses");
  const data = [
    {id:0, title: "HTML/CSS",short_description:"Вводный курс по созданию (верстки сайтов)", image: image0 , link: "/courses/HTML/CSS"},
    {id:1, title: "UI/UX дизайн",short_description:"Курс создания графических проектов и пользовательского интерфейса", image: image1, link: "/courses/UI/UX Design" },
    {id:2, title: "Android Dev",short_description:"Разработатйте мобильное приложение на Android", image: image2, link: "/courses/Android разработка" },
  ]
  const [show, setShow] = useState(null);
  const [modal, setModal] = useState({
    opened: false,
    on: "",
    course: "",
  });

  const showMore = (i) => {
    setShow(i);
  };

  const openModal = (course, on) => {
    setModal({
      opened: true,
      on: on,
      course: course,
    });
  };

  return (
    <div className={Styles.courses} ref={link} id="courses">
      <div className="container">
        <h3 className={Styles.heading}>
          Выбери свой курс
        </h3>
        <p className={Styles.text}>

        </p>
        {loading ? (
          <div className="center">
            <div className="loading"></div>
          </div>
        ) : (
            <Swiper
              data-aos="fade-right"
              speed={1000}
              spaceBetween={20}
              slidesPerView={1}
                  
              style={{ padding: "20px 70px 70px 70px" }}
              breakpoints={{
                600: {
                  slidesPerView: 2,
                },
                900: {
                  slidesPerView: 3,
                },
                1300: {
                  slidesPerView: 3,
                },
              }}
            >
              {data.map(
                ({ image, title, short_description, full_description, link }, i) => {
                  return (
                    
                    <SwiperSlide className={Styles.slide} key={i}>
                      <img src={image} alt={title} />
                      <div className={Styles.desc}>
                        <h4>{title}</h4>
                        <p>{short_description}</p>
                        <NavLink to = {link} className={Styles.button}>Подробнее</NavLink>
                      </div>
                      <div
                        className={`${Styles.full} ${show === i ? Styles.active : ""
                          }`}
                      >
                        <h4>
                          {title}
                          <button
                            onClick={() => {
                              showMore(null);
                            }}
                          >
                            <span className={`material-icons ${Styles.icon}`}>
                              close
                          </span>
                          </button>
                        </h4>
                        <p>{full_description}</p>
                        <button
                          onClick={() => {
                            openModal(title, true);
                          }}
                          className={Styles.button}
                        >
                          Оставить завку
                      </button>
                      </div>
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          )}
      </div>
      {modal.opened === true ? (
        <Modal modal={modal} setModal={setModal} />
      ) : null}
    </div>
  );
};
