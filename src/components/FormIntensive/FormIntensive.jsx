import React, { useState } from "react";
import Styles from "./FormIntensive.module.css";
import { usePost } from "../../hooks/post.hook";
import { ModalInfo } from "../common";


export const FormIntensive = () => {
  const { postHandler } = usePost();
  const [visible, setVisible] = useState(false)

  const changeVisible = () => {
    setVisible(true)
  }
  const notActiveClass = Styles.notActive
  const sendRequest = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    postHandler({ phone, name }, "consult/");  
    e.target.reset();
    e.target.classList.add(notActiveClass)
  };
  return (
    <form className={Styles.form} onSubmit={sendRequest}  >
      <p className={Styles.title}>
        Заполните заявку и мы прокунсультируем вас!
  </p>
      <div className={Styles.field}>
        <input
          type="text"
          name="name"
          placeholder="Имя"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          type="text"
          name="phone"
          placeholder="Номер телефона"
        />
        <span className={Styles.massage}>Заявка уже подана!</span>
      </div>
      <button className={Styles.btn} onClick={changeVisible} >Отправить</button>
      <ModalInfo setVisible={setVisible} visible={visible} />
    </form>
  );
};
