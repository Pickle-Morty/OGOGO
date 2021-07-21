import React from "react";
import { useHistory, NavLink } from "react-router-dom";
import { useGet } from "../../hooks/get.hook";
import Styles from "./News.module.css";
import { MONTHS } from "../../constains";

export const News = ({ link }) => {
  const { data, loading } = useGet("news");
  const history = useHistory();
  return (
    <div className={Styles.news} ref={link}>
      <div className="container">
        <h3 className={Styles.heading}>
          Новости
          <NavLink to="/news">Все новости:</NavLink>
        </h3>
        <div className={Styles.block}>
          {loading ? (
            <div className="center">
              <div className="loading"></div>
            </div>
          ) : data.results ? (
            data.results
              .slice(0, 4)
              .map(({ id, image, title, date_created }, i) => {
                return (
                  <div
                    data-aos="fade-right"
                    data-aos-delay={i * 100}
                    className={Styles.item}
                    style={{
                      background: `url(${image}) 0 0 no-repeat`,
                      backgroundSize: "cover",
                      cursor: "pointer",
                    }}
                    onClick={() => history.push(`/news/${id}`)}
                  >
                    <p>
                      Новости -{" "}
                      {`${new Date(date_created).getDate()}
                                                ${
                                                  MONTHS[
                                                    new Date(
                                                      date_created
                                                    ).getMonth()
                                                  ]
                                                }
                                                ${new Date(
                                                  date_created
                                                ).getFullYear()}`}
                    </p>
                    <h4>{title}</h4>
                  </div>
                );
              })
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};
