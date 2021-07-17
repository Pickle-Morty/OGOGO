import React from "react";
import { useImport } from "../../hooks/import.hook";
import Styles from "./WhyUs.module.css";

export const WhyUs = ({ link }) => {
  const { importAll } = useImport();
  const icons = importAll(
    require.context("./../../assets/images/whyus", false, /\.(png|jpe?g|svg)$/)
  );

  const whyus = [
    { icon: icons[0].default, label: "500 кв. м" },
    { icon: icons[1].default, label: "Доступ к бесплатному коворкингу" },
    { icon: icons[2].default, label: "Помощь менторов 24/7" },
    { icon: icons[3].default, label: "Уютная и добрая атмосфера" },
  ];

  return (
    <div className={Styles.whyus} ref={link}>
      <div className="container">
        <h3 className={Styles.heading}>
          Почему <br /> OGOGO Academy
        </h3>
        <div className={Styles.block}>
          {whyus.map(({ icon, label }, i) => {
            return (
              <div
                data-aos="fade-up"
                data-aos-delay={i * 100}
                key={i}
                className={Styles.item}
              >
                <div className={Styles.icon}>
                  <img src={icon} alt={`icon${i}`} />
                </div>
                <p className={Styles.text}>{label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
