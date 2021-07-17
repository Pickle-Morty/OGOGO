import React, { useState } from "react";
import { useGet } from "../../hooks/get.hook";
import Styles from "./CoursesPage.module.css";
import "swiper/swiper-bundle.min.css";
import { Cart } from "./Cart/Cart";
import { Form } from "./Form/Form";
import SwiperCore, { Pagination, Navigation } from "swiper";
import { Modal } from "../../components/Modal/Modal";
import "swiper/swiper-bundle.min.css";

SwiperCore.use([Pagination, Navigation]);

export const CoursesPage = () => {
  const { data, loading } = useGet("courses");

  const [modal, setModal] = useState({
    opened: false,
    on: "",
    select: "",
  });

  const openModal = (course, on) => {
    setModal({
      opened: true,
      on: on,
      course: course,
    });
  };
  return (
    <div className={Styles.courses} id="courses">
      <div className="container">
        <h3 className={Styles.heading}>Курсы</h3>
        <div className={Styles.wrapper}>
          {loading ? (
            <div className={Styles.progress}>
              <div className="loading"></div>
            </div>
          ) : (
            data.map((item) => <Cart {...item} openModal={openModal} key={item.id} />)
          )}
        </div>
        <Form />
      </div>
      {modal.opened === true ? (
        <Modal modal={modal} setModal={setModal} />
      ) : null}
    </div>
  );
};
