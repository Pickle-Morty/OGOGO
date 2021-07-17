import Styles from "./Training.module.css";
import React from "react";
import { Form } from "../../../TrainingDesign/Form/Form";
import linearOne from "../../../../assets/images/linear/linear-1.png";
import linearFour from "../../../../assets/images/linear/linear-3.png";
import linearThree from "../../../../assets/images/linear/linear-2.png";

export const Training = ({ title, text, courses }) => {
  return (
    <section className={Styles.training}>
      <img src={linearOne} alt="linear" className={Styles.linear} />
      <img src={linearFour} alt="linear" className={Styles.linear} />
      <img src={linearThree} alt="linear" className={Styles.linear} />
      <div className="container">
        <p className={Styles.title}>Программа обучения</p>
        <hr />
        <div className={Styles.wrapper}>
          <div className={Styles.description}>
            <p className={Styles.subtitle}>
              От знакомства с программированием до создания своего проекта
            </p>
            <p className={Styles.text}>{text}</p>
          </div>
          <div className={Styles.courses}>
            <p className={Styles.subtitle}>Курсы</p>
            <ul className={Styles.list}>
              {courses.map((item, i) => (
                <li className={Styles.item} key={i}>
                  <p>{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <Form />
      </div>
    </section>
  );
};
