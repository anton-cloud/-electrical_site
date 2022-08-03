import styles from "./Footer.module.css";
import sprite from "../../icons/sprite.svg";
import SocailIcons from "../SocailIcons/SocailIcons";
import ContactNumbers from "../ContactNumbers/ContactNumbers";
import Line from "../Line/Line";

const Footer = () => {
  return (
    <footer>
      <Line />
      <div className={styles.footer__container}>
        {/* <Container> */}
        <div className={styles.text_wrapper}>
          <svg className={styles.footerIcon}>
            <use href={sprite + "#icon-logo"} />
          </svg>
          <p className={styles.title}>Електромонтажні роботи в Києві</p>
          <p className={styles.subTitle}>Якісно, Швидко, Доступно</p>
        </div>

        <ContactNumbers />
        {/* <ul className={styles.contacts__list}>
          <li className={styles.contacts__item}>
            <a className={styles.contacts__link} href="tel:+380962152544">
              +38 (096) 215-25-44
            </a>
          </li>
          <li className={styles.contacts__item}>
            <a className={styles.contacts__link} href="tel:+380962152544">
              +38 (096) 215-25-44
            </a>
          </li>
        </ul> */}
        <SocailIcons />
        {/* </Container> */}
      </div>
      <div className={styles.rights}>
        <p className={styles.rights__text}>
          © 2022 НАЗВА САЙТУ. Всі права захищено
        </p>
      </div>
    </footer>
  );
};

export default Footer;
