import React from "react";
import block from "../../../../../assets/images/block.png";
import Styles from "./Cart.module.css";

export const Cart = ({ img, subtitle, text }) => {
  return (
    <div className={Styles.cart}>
      <img src={img || block} alt="boxes/image" />
      <div className={Styles.content}>
        <p className={Styles.subtitle}>{subtitle}</p>
        <p className={Styles.text}>{text}</p>
      </div>
    </div>
  );
};
