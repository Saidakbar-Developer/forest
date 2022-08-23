import './modal.css'

const Modal = ({ modal, setModal }) => {

  return (
    <div>
      <div className={modal ? "modal-bg active" : 'modal-bg'}>
        <div className="modal">
          <div className="modal-close" onClick={() => setModal(false)}>x</div>
          <div className="modal-hero">
            <h1>Связаться с нами</h1>
            <h4 className='oq'>Персональный менеджер свяжется с вами
              в течение 15 минут</h4>
            <input type="text" placeholder='имя' />
            <br />
            <p></p>
            <input type="text" placeholder='E-mail' />
            <br />
            <p></p>
            <input type="text" placeholder='телефон' />
            <br />
            <p></p>
            <div className="chack">
              <input type="checkbox" />
              <h3 className='oq rty'>Согласен(на) с обработкой персональных данных</h3>
            </div>
            <button>ОСТАВИТЬ ЗАЯВКУ</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal