import React, { useState } from "react";
import { useGet } from "../../hooks/get.hook";
import { Modal } from "../Modal/Modal";
import Styles from "./NewsSingle.module.css";

export const NewsSingle = ({ newsData }) => {
  const { data, loading } = useGet(`news/${newsData.id}`);

  const [modal, setModal] = useState({
    opened: false,
    course: "",
  });

  const openModal = (on, course) => {
    setModal({
      opened: true,
      course: course,
      on: on,
    });
  };

  return (
    <div className={Styles.news}>
      {loading ? (
        <div className="center">
          <div className="loading"></div>
        </div>
      ) : (
        <div className="container">
          <p className={Styles.user}>
            <img
              src={data.user !== undefined ? data.user.image : ""}
              alt="icon"
            />
            {data.user !== undefined ? data.user.username : ""}
          </p>
          <h3 className={Styles.heading}>{data.title}</h3>
          <img className={Styles.mainImg} src={data.image} alt="main" />
          <div className={Styles.block}>
            {data.news_child
              ? data.news_child.map(({ title, text }, i) => {
                  return (
                    <div key={i} className={Styles.item}>
                      <h4>{title}</h4>
                      {text.replace(/<[^>]+>/g, "")}
                    </div>
                  );
                })
              : ""}
          </div>
          {newsData.id === 2 ? (
            <div className={Styles.send}>
              <h4>Запишитесь на бесплатный мастер класс</h4>
              <button
                onClick={() => {
                  openModal(false, "серию мастер-классов");
                }}
                className={Styles.button}
              >
                Записаться
              </button>
            </div>
          ) : null}
        </div>
      )}
      {modal.opened === true ? (
        <Modal modal={modal} setModal={setModal} />
      ) : null}
    </div>
  );
};
