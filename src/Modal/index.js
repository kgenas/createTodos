
//?render del root ==> import ReactDOM from 'react-dom/client';
//? render del modal ==> import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom';
import './Modal.css';

//* createPortal ==> enviar lo que se desea enviar
//*                  al modal 
//? nota: en public/index.html se creo 
//? <div id="modal"></div>

const Modal = ({ children }) => {
    return ReactDOM.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    );   

}

export { Modal };
