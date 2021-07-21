import React from 'react'
import Styles from './Certificate.module.css'

import Cert from './../../assets/images/certificate.png'

export const Certificate = ({ link }) => {
    return (
        <div className={Styles.certificate} ref={link}>
            <div className="container">
                <div className={Styles.block}>
                    <div className={Styles.item}>
                        <h3 className={Styles.heading}>Стань дипломированным специалистом</h3>
                        <p className={Styles.text}>Мы проводим обучение на основании государственной лицензии. Вы получите сертификат о прохождении курса, который можно добавить в портфолио и показать работодателю.</p>
                    </div>
                    <div className={Styles.item}>
                        <img data-aos="flip-left" src={ Cert } alt="certificate"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
