import styles from "./Header.module.css";
import sprite from "../../icons/sprite.svg";
import { useState, useEffect } from "react";
import Navigation from "../Navigation";
import SocailIcons from "../SocailIcons/SocailIcons";

const Header = ({ isOpenModal, openModal }) => {
  const [viewportWidth, setViewportWidth] = useState(window.innerWidth);
  // const [isOpenModal, setOpenModal] = useState(false);
  const breakPoint = 1024;
  const isDesktop = viewportWidth >= breakPoint;

  const handleResizeWindow = () => setViewportWidth(window.innerWidth);
  // const openModal = () => setOpenModal((prev) => !prev);

  useEffect(() => {
    window.addEventListener("resize", handleResizeWindow);
  }, []);

  return (
    <header className={styles.header}>
      <svg className={styles.headerIcon}>
        <use href={sprite + "#icon-logo"} />
      </svg>

      {isDesktop && <Navigation isDesktop={isDesktop} />}

      {isDesktop && <SocailIcons />}

      {isDesktop && <button type="button">Оформити заявку</button>}

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
    </header>
  );
};

export default Header;
