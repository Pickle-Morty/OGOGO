import React, { useState } from "react";
import Styles from "./FormIntensive.module.css";
import { usePost } from "../../hooks/post.hook";
import { ModalInfo } from "../common";


export const FormIntensive = () => {
  const [error, setError] = useState(false);
  const { postHandler } = usePost();
  const [visible, setVisible] = useState(false)
  const changeVisible = ()=> {
    setVisible(true)
    if (error==!false) {
      setVisible(true)
    }
    else {
      console.log("False")
    }
    
  }

  const sendRequest = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    postHandler({ phone, name }, "consult/");
  };
  return (
    <form className={Styles.form} onSubmit={sendRequest}>
      <p className={Styles.title}>
        Заполните заявку и мы прокунсультируем вас!
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
          type="email"
          name="email"
          placeholder="Email"
          onChange={() => setError(false)}
        />
        <input
          type="text"
          name="phone"
          placeholder="Номер телефона"
          onChange={() => setError(false)}
        />
      </div>
      <button className={Styles.btn} if error onClick={changeVisible} >Отправить</button>
      <ModalInfo setVisible={setVisible} visible={visible} />
    </form>
  );
};
