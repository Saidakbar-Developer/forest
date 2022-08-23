// useState
import { useState } from 'react'
import './footer.css'
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import Modal from '../modal/Modal'
const Footer = () => {

    const [modal, setModal] = useState(false)

    return (
        <div className='footer'>
            <div className="container">
                <div className="footer-box">
                    <div className="hayr">
                        <div className="first">
                            <h1>Консультация</h1>
                            <br />
                            <br />
                            <h3>Персональный менеджер свяжется с вами
                                в течение 15 минут</h3>
                            <br />
                            <br />
                            <h3>Рахматов Самандар</h3>
                            <br />
                            <h3>E-mail</h3>
                            <br />
                            <h3>телефон</h3>
                            <div className="check">
                                <input type="checkbox" />
                                <h3>Согласен(на) с обработкой персональных данных</h3>
                            </div>
                            <button className="edit" onClick={()=>setModal(true)}>ОСТАВИТЬ ЗАЯВКУ</button>
                            <Modal
                                modal={modal}
                                setModal={setModal}
                            />
                        </div>
                        <div className="key">
                            <h1>КОНТАКТЫ</h1>
                            <br />
                            <br />
                            <h3>Наш офис:</h3>
                            <br />
                            <h2>г.Москва ул. Ломоносова д. 16
                                9:00-21:00 Без выходных</h2>
                            <br />
                            <p>+8 800 800 80 80</p>
                            <br />
                            <p>Электронная почта:</p>
                            <br />
                            <p>ForestINVERONMENTAL@mail.ru</p>
                            <br />
                            <br />
                            
                            <div className="icons">
                                <AiFillFacebook className='icon' />
                                <AiFillYoutube className='icon' />
                                <BsInstagram className='icon' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer