import React from "react";
import Styles from "./Online.module.css";

export const Online = ({ link }) => {
  return (
    <div className={Styles.online} ref={link}>
      <div className="container">
        <div className={Styles.block}>
          <div className={Styles.item}>
            <h3 className={Styles.heading}>
              OGOGO и даже <br /> онлайн?
            </h3>
            <p className={Styles.text}>
              Думаешь, что программирование не твое? Тогда пройди наш онлайн
              интенсив по двум основным направлениям и выбери, что тебе ближе
            </p>
          </div>
          <div className={Styles.item}>
            <div className={Styles.course} data-aos="fade-right">
              <p>Python</p>
              <button disabled className={Styles.button}>
                Скоро
              </button>
            </div>
            <div
              className={Styles.course}
              data-aos="fade-right"
              data-aos-delay="100"
            >
              <p>JS</p>
              <button disabled className={Styles.button}>
                Скоро
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
