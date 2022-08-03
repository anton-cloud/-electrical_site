import styles from "./Services.module.css";
import img_1 from "../../images/services_section/1.jpg";
import img_2 from "../../images/services_section/2.jpg";
import img_3 from "../../images/services_section/3.jpg";

import { Link } from "react-router-dom";
import Container from "../Container";

const Services = ({ servicesPage = false }) => {
  return (
    <section className={servicesPage ? styles.sectionForServicesPage : styles.section}>
      <h3 className={styles.title}>Перелік послуг</h3>

      <Container>
        <ul className={styles.services__list}>
          <li className={styles.services__item}>
            <Link
              to="/services/electrical-installation"
              className={styles.services__link}
            >
              <img className={styles.services__img} src={img_1} alt="text" />
              <p className={styles.services__title}>Електромонтажні роботи</p>
              <p align="justify" className={styles.services__description}>
                Наш колектив професійних електриків виконує повний комплкс електромонтажних робіт будь-якої складності.
              </p>
            </Link>
          </li>
          <li className={styles.services__item}>
            <Link to="/services/design-work" className={styles.services__link}>
              <img className={styles.services__img} src={img_2} alt="text" />
              {/* <span className={styles.services__img}></span> */}
              <p className={styles.services__title}>Проєктні роботи</p>
              <p align="justify" className={styles.services__description}>
                Розроблення проектів всіх стадій проектування для об’єктів нового будівництва, реконструкції, капітального ремонту.
              </p>
            </Link>
          </li>
          <li className={styles.services__item}>
            <Link
              to="/services/documentation"
              className={styles.services__link}
            >
              <img className={styles.services__img} src={img_3} alt="text" />
              {/* <span className={styles.services__img}></span> */}
              <p className={styles.services__title}>Погодження документації</p>
              <p align="justify" className={styles.services__description}>
                Наші фахівці допоможуть погодити та затвердити проектну документацію в місцевих органах містобудування, архітектури та органах місцевого самоврядуванняю.
              </p>
            </Link>
          </li>
        </ul>
      </Container>
    </section >
  );
};

export default Services;
