import styles from "./Header.module.css";
import sprite from "../../icons/sprite.svg";
import Navigation from "../Navigation";
import SocailIcons from "../SocailIcons/SocailIcons";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ContactNumbers from "../ContactNumbers/ContactNumbers";
import DropdownNumbers from "../DropdownNumbers/DropdownNumbers";

const Header = ({ isOpenModal, openModal, isDesktop, handleShow, setOpenModal }) => {


  return (

    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/">
          <svg className={styles.headerIcon}>
            <use href={sprite + "#icon-logo"} />
          </svg>
        </Link>


        {!isDesktop && (
          <ul className={styles.wrapper}>
            <li>       <Button className={styles.mobile} variant="outline-light" type="button" onClick={handleShow}>
              Оформити заявку
            </Button></li>
            <li>
              <DropdownNumbers /></li>
          </ul>
        )}

        {isDesktop && <Navigation isDesktop={isDesktop} handleShow={handleShow} openModal={openModal} setOpenModal={setOpenModal} />}

        {isDesktop && <SocailIcons />}

        {isDesktop && (
          <>
            <Button variant="outline-light" type="button" onClick={handleShow}>
              Оформити заявку
            </Button>
            <ContactNumbers />
          </>
        )}

        {!isDesktop &&
          (isOpenModal ? (
            <svg className={styles.headerIcon} onClick={openModal}>
              <use href={sprite + "#icon-close"} />
            </svg>
          ) : (
            <svg className={styles.headerIcon} onClick={openModal}>
              <use href={sprite + "#icon-menu"} />
            </svg>
          ))}


      </div>
    </header >

  );
};

export default Header;
