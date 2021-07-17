import React, { useState } from "react";
import Styles from "./Form.module.css";
import { usePost } from "../../../hooks/post.hook";

export const Form = () => {
  const [error, setError] = useState(false);
  const { postHandler } = usePost();

  const sendRequest = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    postHandler({ phone, name }, "consult/");
  };
  return (
    <form className={Styles.form} onSubmit={sendRequest}>
      <p className={Styles.title}>
        Записаться на курсы в <span>OGOGO</span>  
      </p>
      <p
        className={
          error ? `${Styles.warning} ${Styles.error}` : `${Styles.warning}`
        }
      >
        Заполните все поля!
      </p>
      <div className={Styles.field}>
        <input
          type="text"
          name="name"
          placeholder="Имя"
          onChange={() => setError(false)}
        />
        <input
          type="text"
          name="phone"
          placeholder="Номер телефона"
          onChange={() => setError(false)}
        />
      </div>
      <button className={Styles.btn}>Отправить</button>
    </form>
  );
};
