import React, { useState } from "react";
import Styles from "./HeroIntensive.module.css";
import { Cart } from "./Cart/Cart";
import { Modal } from "../Modal/Modal";
import { useGet } from "../../hooks/get.hook";
import backgroundImg from "./img/Learning-pana1.png"

export const HeroIntensive = ({ subtitle, title, description }) => {
  const { data } = useGet("courses");

  const [modal, setModal] = useState({
    opened: false,
    on: "",
    select: "",
  });

  const scrollCourses = () => {
    if(window.matchMedia("(max-width: 700px)").matches) {
      window.scroll(0, 1000)
    }
    else {
      window.scroll(0, 850)
    }
   
  };

  
  return (
    <section className={Styles.hero}>
      <img src='https://i.gifer.com/U0Vg.gif' alt="linear" className={Styles.linear} />
      <img src='https://i.gifer.com/U0Vg.gif' alt="linear" className={Styles.linear} />
      <div className="container">
        <div className={Styles.wrapper}>
          <div className={Styles.content}>
            <span>Изучи программирование</span>
            <h1>
              {title}
            </h1>
            <p>{subtitle}</p>
            <button onClick={scrollCourses}>Подробнее</button>     
          </div>
          <img src={backgroundImg} className={Styles.bg} alt="bg" />
        </div>
        <div className={Styles.carts}>
          {description.map((item, i) => (
            <Cart text={item} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
