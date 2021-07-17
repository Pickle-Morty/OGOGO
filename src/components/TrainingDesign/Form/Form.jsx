import React from "react";
import Styles from "./Form.module.css";
import { usePost } from "../../../hooks/post.hook";

export const Form = () => {
  const { postHandler } = usePost();
  const sendRequest = (e) => {
    e.preventDefault();
    const name  = e.target.name.value;
    const phone = e.target.phone.value;
    const data = { name, phone };
    postHandler(data, "consult/");
  };
  return (
    <form className={Styles.form} onSubmit={sendRequest}>
      <p className={Styles.title}>Получите бесплатную консультацию от нас !</p>
      <div className={Styles.field}>
        <input type="text" name="name" placeholder="Имя" />
        <input type="tel" name="phone" placeholder="Номер телефона" />
      </div>
      <button className={Styles.btn}>Получить консультацию</button>
    </form>
  );
};
