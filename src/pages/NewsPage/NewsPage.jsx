import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useGet } from "../../hooks/get.hook";
import Styles from "./NewsPage.module.css";
import { MONTHS } from "../../constains";

export const NewsPage = () => {
  const { data, loading } = useGet("news");
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      window.scrollTo(0, 0);
    };
  });
  return (
    <div className={Styles.news}>
      <div className="container">
        <div className={Styles.block}>
          {loading ? (
            <div
              className="center"
              style={{ width: "100%", justifyContent: "center" }}
            >
              <div className="loading"></div>
            </div>
          ) : data.results ? (
            data.results.map(({ image, title, date_created }, i) => {
              return (
                <NavLink key={i} to={`/news/${2}`}>
                  <div
                    data-aos="fade-right"
                    data-aos-delay={i * 100}
                    className={Styles.item}
                    style={{
                      background: `url(${image}) 0 0 no-repeat`,
                      backgroundSize: "cover",
                    }}
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
                </NavLink>
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
