import React from "react";
import Styles from "./Cart.module.css";

export const Cart = ({ img, subtitle, text }) => {
  return (
    <div className={Styles.cart}>
      <img src={img} alt="boxes/image" />
      <div className={Styles.content}>
        <p className={Styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
};
