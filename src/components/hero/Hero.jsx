import './hero.css'
import uy from '../../../../Forest/src/images/uy.png'
import grop from '../../images/Group 7.png'
import grup from '../../images/Group 8.png'
const Hero = () => {
  return (
    <div className='hero'>
      <div className="container">
        <div className="hero-box">
          <div className="toopp">
            <div className="leeft">
              <h1 className='h1'>о нас</h1>
              <h2 className='h2'><div><h3>принципы</h3> которых </div>
                мы придерживаемся</h2>
              <div className="firt">
                <h1 className='bir'>01</h1>
                <div className="kacestva">
                  <h2 className='kach'>Качества</h2>
                  <br />
                  <br />
                  <h6>Равным образом реализация намеченных плановых заданий <br /> широкому кругу (специалистов) участие в формировании вилла в <br /> лесу
                  </h6>
                </div>
              </div>
              <br />
              <br />
              <div className="firt">
                <h1 className='bir'>02</h1>
                <div className="kacestva">
                  <h2 className='kach'>Креативность</h2>
                  <br />
                  <br />
                  <h6>Значимость этих проблем настолько очевидна, что <br /> реализация намеченных плановых заданий
                  </h6>
                </div>
              </div>
              <br />
              <br />

              <div className="firt">
                <h1 className='bir'>03</h1>
                <div className="kacestva">
                  <h2 className='kach'>Современность</h2>
                  <br />
                  <br />
                  <h6>Значимость этих проблем настолько очевидна, что реализация <br /> намеченных плановых заданий играет важную роль в <br /> формировании позиций
                  </h6>
                </div>
              </div>
            </div>
            <div className="rrigth">
              <img src={grop} alt="" className='absolute' />
            </div>
          </div>
          <div className="bottomm">
            <div className="ong">
              <h1 className='birr'>Что мы можем?</h1>
              <h1 className='jdj'><h2>индивидуальное </h2>
                проектирование вашех домов</h1>
              <br />
              <br />
              <h6 className='witj'>на выбор подходяший раззмер и конфигурация дома для разных
                земельных участок и разного состава семьи ( молодая пара. семья с
                маленьким ребенком, дом для большой семьи).Мы сможем установить дом где угодно - на участке перед вышем домом, в лесной зоне, на береге реки. Доставку осуществляет наша компания</h6>
            </div>
            <div className="chap">
              <img src={grup} alt="" />
            </div>
          </div>
        </div>


      </div>
    </div>

  )
}

export default Hero