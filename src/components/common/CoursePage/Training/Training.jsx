import Styles from "./Training.module.css";
import React from "react";
import { Form } from "./Form/Form";

export const Training = ({ title, text, courses }) => {
  return (
    <section className={Styles.training}>
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
      <img
        src="https://i.gifer.com/U0Vg.gif"
        alt="linear"
        className={Styles.linear}
      />
      <div className="container">
        <p className={Styles.title}>Программа обучения</p>
        <hr />
        <div className={Styles.wrapper}>
          <div className={Styles.description}>
            <p className={Styles.subtitle}>
              {title}.{" "}
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
