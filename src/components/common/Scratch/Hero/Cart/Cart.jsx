import React from "react";
import Styles from "./Cart.module.css";

export const Cart = ({ text }) => {
  return (
    <div className={Styles.cart}>
      <hr />
      <p className={Styles.text}>{text}</p>
    </div>
  );
};
