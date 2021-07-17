import React from "react";
import Styles from "./DescriptionDesign.module.css";
import { Cart } from "./Cart/Cart";
import linearOne from "../../assets/images/linear/linear-2.png";
import linearFour from "../../assets/images/linear/linear-3.png";

export const DescriptionDesign = ({ description }) => {
  return (
    <section className={Styles.description}>
      <img src={linearOne} alt="linear" className={Styles.linear} />
      <img src={linearFour} alt="linear" className={Styles.linear} />
      <div className="container">
        <p className={Styles.subtitle}>Кому подойдёт курс</p>
        <div className={Styles.wrapper}>
          {description.map((item, i) => (
            <Cart {...item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
