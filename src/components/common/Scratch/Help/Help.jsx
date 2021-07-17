import React from "react";
import Styles from "./Help.module.css";
import { Cart } from "./Cart/Cart";
import linearOne from "../../../../assets/images/linear/linear-2.png";
import linearFour from "../../../../assets/images/linear/linear-4.png";

export const Help = ({ title, article }) => {
  return (
    <article className={Styles.help}>
      <img src={linearOne} alt="linear" className={Styles.linear} />
      <img src={linearFour} alt="linear" className={Styles.linear} />
      <div className="container">
        <p className={Styles.title}>
          <strong>Развивайте детей вместе с </strong>академией OGOGO
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
