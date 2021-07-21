import React, { useState } from "react";
import Styles from "./Hero.module.css";
import { Cart } from "./Cart/Cart";
import { Modal } from "../../../Modal/Modal";
import { useGet } from "../../../../hooks/get.hook";

export const Hero = ({ subtitle, title, description, background }) => {
  const { data } = useGet("courses");

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
    <section className={Styles.hero}>
      <img src="https://i.gifer.com/U0Vg.gif" alt="linear" className={Styles.linear} />
      <img src="https://i.gifer.com/U0Vg.gif" alt="linear" className={Styles.linear} />
      <div className="container">
        <div className={Styles.wrapper}>
          <div className={Styles.content}>
            <h1>
              <strong>Курс по</strong> <br />
              {title}
            </h1>
            <p>{subtitle}</p>
            <button onClick={() => openModal(title, true)}>Записаться</button>
          </div>
          <img src={background} className={Styles.bg} alt="bg" />
        </div>
        <div className={Styles.carts}>
          {description.map((item, i) => (
            <Cart text={item} key={i} />
          ))}
        </div>
      </div>
      {modal.opened === true ? (
        <Modal modal={modal} setModal={setModal} />
      ) : null}
    </section>
  );
};
