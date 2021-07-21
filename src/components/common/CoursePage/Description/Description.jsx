import React from "react";
import Styles from "./Description.module.css";
import { Cart } from "./Cart/Cart";

export const Description = ({ description }) => {
  return (
    <section className={Styles.description}>
      <img
        src="https://i.gifer.com/U0Vg.gif"
        alt="linear"
        className={Styles.linear}
      />
      <img
        src="https://i.gifer.com/U0Vg.gif"
        alt="linear"
        className={Styles.linear}
      />
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
