import React, { useCallback, useEffect, useState } from "react";
import { usePost } from "../../hooks/post.hook";
import Styles from "./Modal.module.css";
import { INPUTS_FORM } from "../../constains";

export const Modal = ({ modal, setModal }) => {
  const { postHandler, loading } = usePost();
  const [form, setForm] = useState({});

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const escHandler = useCallback(
    (event) => {
      if (event.keyCode === 27) {
        setModal({ opened: false, course: "" });
      }
    },
    [setModal]
  );

  useEffect(() => {
    document.addEventListener("keydown", escHandler, false);
    return () => {
      document.removeEventListener("keydown", escHandler, false);
    };
  }, [escHandler]);

  return (
    <div className={Styles.modal}>
      <div
        className={Styles.overlay}
        onClick={() => {
          setModal({ opened: false, course: "" });
        }}
      ></div>
      <div className={Styles.block}>
        <h3 className={Styles.heading}>
          Заполните <br /> заявку
          <button
            onClick={() => {
              setModal({ opened: false, course: "" });
            }}
          >
            <span className={`material-icons ${Styles.icon}`}>close</span>
          </button>
        </h3>
        <p
          className={Styles.text}
          style={modal.on === false ? { display: "none" } : {}}
        >
          <span>
            <span className={`material-icons ${Styles.arrow}`}>
              chevron_right
            </span>
            Выбранная услуга
          </span>{" "}
          <br />
          {modal.on === true && modal.select ? (
            <select
              className={Styles.input}
              onChange={changeHandler}
              name="course_name"
              id="course_name"
            >
              <option value="Не выбрано">Не выбрано</option>
              {modal.select.map(({ course }, i) => {
                return (
                  <option key={i} value={course}>
                    {course}
                  </option>
                );
              })}
            </select>
          ) : (
            `Записаться на курс "${modal.course}"`
          )}
          {/* Записаться на курс "{modal.course}" */}
        </p>
        <form action="POST">
          {INPUTS_FORM.map(({ type, name, id, placeholder, label }, i) => {
            return (
              <div key={i} className={Styles.inputBlock}>
                <label htmlFor={id}>{label}</label>
                <input
                  id={id}
                  className={Styles.input}
                  type={type}
                  name={name}
                  placeholder={placeholder}
                  onChange={changeHandler}
                />
              </div>
            );
          })}
          <button
            onClick={(e) => {
              e.preventDefault();
              if (!modal.select) {
                form["course_name"] = modal.course;
                postHandler(form, "forms/");
              } else if (modal.on === true) {
                // form['course_name'] = modal.course
                postHandler(form, "forms/");
              } else {
                postHandler(form, "forms/");
              }
            }}
            className={Styles.button}
          >
            {loading ? (
              <span className={Styles.loading}></span>
            ) : (
              "Оставить заявку"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};
