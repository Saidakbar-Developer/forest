// import css
import './navbar.css'
// import icons
import { AiFillFacebook } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import { BsInstagram } from 'react-icons/bs'
import video from '../../images/Group 7.png'
import grop from '../../images/Group 10.png'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="container">
                <div className="nav-box">
                    <div className="top">
                        <div className="left">
                            <h2 className='border'>FOREST <br /> <h6 className='border1'>INVERONMENTAL</h6></h2>
                            <h3 className='name'>Главная</h3>
                            <h3 className='salom'>О нас</h3>
                            <h3 className='salom'>Услуги</h3>
                            <h3 className='salom'>Проекты</h3>
                            <h3 className='salom'>Консультация</h3>
                            <h3 className='salom'>Контакты</h3>
                        </div>
                        <div className="icons">
                            <AiFillFacebook className='icon' />
                            <AiFillYoutube className='icon' />
                            <BsInstagram className='icon' />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="lefft">
                            <h1> <div> <div className='flex'> посреди <h2>леса</h2></div> далеко от шума </div></h1>
                            <h6 className='h6'>Равным образом реализация намеченных плановых заданий <br /> широкому кругу (специалистов) участие в формировании

                            </h6>
                            <button>Связаться с нами</button>
                        </div>
                        <div className="riight">
                            <img src={video} alt="" />
                        </div>
                    </div>
                    <div className="div">

                    <img src={grop} alt="" className='images'/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar