import React from "react";
import './ModalInfo.css';
import CloseIcon from "../../../assets/images/modal/CloseIcon.svg"
import Ellipse from "../../../assets/images/modal/Ellipse.svg"
import Rectangle from "../../../assets/images/modal/Rectangle.svg"


export const ModalInfo = ({ visible, setVisible }) => {;
    return (
        <div className={visible ? "modal active" : "modal"} onClick={() => setVisible(false)}> 
            <div className='modal__content'>

                <img src={CloseIcon} alt="X" className="close__icon" onClick={() => setVisible(false)} />
                <span className="modal__title">
                    Заявка подана
            </span>
                <p className="modal__text">
                    В ближайшее время с вами свяжется наш менеджер.
                </p>
                <img src={Ellipse} alt="" className="modal__elipse" />
                <img src={Rectangle} alt="" className="modal__rectangle" />
            </div>
        </div>
    )
}


