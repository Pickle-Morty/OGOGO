import React from "react";
import { useHistory } from "react-router-dom";
import Styles from "./Cart.module.css";

export const Cart = ({ title, image, short_description, openModal }) => {
  const history = useHistory();
  const showCourse = () => {
    const link = title === "Детское программирование" ? "scratch" : title;
    history.push("/courses/" + link);
  };
  return (
    <div
      className={Styles.slide}
      onClick={(e) => {
        if (e.target.tagName === "BUTTON") {
          openModal(title, true);
        } else {
          showCourse();
        }
      }}
    >
      <img src={image} alt={title} />
      <div className={Styles.desc}>
        <h4>{title}</h4>
        <p>{short_description}</p>
      </div>
      <button className={Styles.btn}>Записаться</button>
    </div>
  );
};
