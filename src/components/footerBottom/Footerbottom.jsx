import   './footerbottom.css'
import rasm from '../../images/Group 13.png'
import rasm2 from '../../images/Group 26.png'
const Footerbottom = () => {
  return (
    <div className='footer-b'>
        <div className="container">
            <div className="foot-box">
                <img src={rasm} alt="" />
                <h3>© Все право защищены 2021</h3>
                <h3>О нас             <h4>Проекты</h4>            Услуги            Новости            Контакты</h3>
                <a href=""><img src={rasm2} alt="" /></a>
            </div>
        </div>
    </div>
  )
}

export default Footerbottom