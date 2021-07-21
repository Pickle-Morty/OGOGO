import React, { useState } from 'react'
import { useGet } from '../../hooks/get.hook'
import { Modal } from '../Modal/Modal'
import Styles from './Animated.module.css'

export const Animated = ({ link }) => {
    const { data } = useGet('courses')
    const [modal, setModal] = useState({
        opened: false,
        course: ''
    })

    const openModal = (select, on) => {
        setModal({
            opened: true,
            on: on,
            select: select
        })
    }

    const select = data.map(({ title }) => {
        return { course: title }
    })

    return (
        <div className={Styles.animated} ref={link}>
            <div className="container">
                <div className={Styles.block} data-aos="zoom-in">
                    <div className={Styles.item}>
                        <div>
                            <h3 className={Styles.heading}>OGOGO ты уже <br/> дошел до сюда?</h3>
                            <p className={Styles.text}>Тогда самое время <br/> записаться к нам!</p>
                            <button onClick={() => {openModal(select, true)}} className={Styles.button}>
                                Оставить заявку
                            </button>
                        </div>
                    </div>
                    <div className={Styles.item}>
                    </div>
                </div>
            </div>
            {
                modal.opened === true ?
                <Modal modal={ modal } setModal={ setModal } /> : null
            }
        </div>
    )
}
