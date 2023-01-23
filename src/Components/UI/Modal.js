import { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose}></div>;
};
const ModalOverlay = (props) => {
  return (
    <Fragment>
      <div className={classes.modal}>{props.children}</div>
    </Fragment>
  );
};
const Modal = (props) => {
  const PortalElement = document.getElementById('overlays');
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        PortalElement
      )}
      {ReactDOM.createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        PortalElement
      )}
    </Fragment>
  );
};
export default Modal;
