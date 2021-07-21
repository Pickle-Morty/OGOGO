import React from "react";
import Styles from "./Help.module.css";
import { Cart } from "./Cart/Cart";

export const Help = ({ title, article }) => {
  return (
    <article className={Styles.help}>
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
        <p className={Styles.title}>
          <strong>Стань</strong> {title}
        </p>
        <div className={Styles.wrapper}>
          {article.map((item, i) => (
            <Cart key={i} {...item} />
          ))}
        </div>
      </div>
    </article>
  );
};
