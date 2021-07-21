import React from "react";
import Styles from "./Market.module.css";

export const Market = ({ title, btns, money }) => {
  return (
    <article className={Styles.market}>
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
        <div className={Styles.wrapper}>
          <div className={Styles.content}>
            <h4>
              {title} <strong>востребованы на рынке</strong>
            </h4>
            <p>
              Источник данных: <span>HeadHunter</span>
            </p>
          </div>
          <div className={Styles.box}>
            <div className={Styles.btns}>
              {btns.one && <button className={Styles.active}>Без опыта</button>}
              {btns.two && <button>С опытом от года</button>}
            </div>
            <div className={Styles.border}>
              <div className={Styles.description}>
                <p className={Styles.subtitle}>{money}</p>
                <p className={Styles.text}>Зарплата в месяц</p>
              </div>
              <div className={Styles.description}>
                <p className={Styles.subtitle}>5% от всех</p>
                <p className={Styles.text}>Доступных вакансий на hh.ru</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};
