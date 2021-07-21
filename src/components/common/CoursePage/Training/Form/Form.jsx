import React, { useState } from "react";
import Styles from "./Form.module.css";
import { usePost } from "../../../../../hooks/post.hook";
import { ModalInfo } from "../../../ModalInfo/ModalInfo";

export const Form = () => {
  const { postHandler } = usePost();
  const [visible, setVisible] = useState(false);

  const changeVisible = () => {
    setVisible(true);
  };

  const notActiveClass = Styles.notActive
  const sendRequest = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const phone = e.target.phone.value;
    const data = { name, phone };
    postHandler(data, "consult/");
    e.target.reset();
    e.target.classList.add(notActiveClass)
  };
  return (
    <form className={Styles.form} onSubmit={sendRequest}>
      <p className={Styles.title}>Получите бесплатную консультацию от нас !</p>
      <div className={Styles.field}>
        <input
          type="text"
          name="name"
          placeholder="Имя"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Номер телефона"
        />
        <span className={Styles.massage}>Заявка уже подана!</span>
      </div>
      <button className={Styles.btn} onClick={changeVisible}>Получить консультацию</button>
      <ModalInfo setVisible={setVisible} visible={visible} />
    </form>
  );
};
