import { Fragment } from 'react';
import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
const Navbar = (props) => {
  const NavElement = document.getElementById('navbar');
  return (
    <Fragment>
      {ReactDOM.createPortal(<Navbar>{props.children}</Navbar>, PortalElement)}
    </Fragment>
  );
};
export default Navbar;
