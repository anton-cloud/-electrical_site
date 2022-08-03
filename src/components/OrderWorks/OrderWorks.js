import styles from "./OrderWorks.module.css";
import sprite from "../../icons/sprite.svg";
import Container from "../Container";
import { Button } from "react-bootstrap";

const OrderWorks = ({ handleShow }) => {
  return (
    <section id="OrderWorks" className={styles.section}>
      <h3 className={styles.title}>З чого починається робота ?</h3>

      <Container>
        <ul className={styles.list}>
          <li className={styles.item}>
            <svg className={styles.icon}>
              <use href={sprite + "#icon-form"} />
            </svg>
            <p className={styles.step}>Крок №1</p>
            <p>Вам потрібно подати заявку на сайті.</p>
            {/* <p>Коротка форма. Займе 1хв Вашого часу</p> */}
            {/* <Button variant="warning" type="button" onClick={handleShow}>
              Оформити заявку
            </Button> */}
          </li>
          <li className={styles.item}>
            <svg className={styles.icon}>
              <use href={sprite + "#icon-calendar"} />
            </svg>
            <p className={styles.step}>Крок №2</p>
            <p>Погодження дати та часу виїзду спеціаліста для оцінки.</p>
            {/* <p>Зазвичай це наступний день</p> */}
          </li>
          <li className={styles.item}>
            <svg className={styles.icon}>
              <use href={sprite + "#icon-contract"} />
            </svg>
            <p className={styles.step}>Крок №3</p>
            <p>Ви отримуєте детальний кошторис та оцінку проєкту</p>
            {/* <p>
              Приклад кошторису
              <a href="https://docs.google.com/document/d/19c4PQtRJgYzGWizXa96UxW-Xm_jW247xfSfOQz2NcCI/edit?usp=sharing" alt="link" target="_blank">тут</a>
            </p> */}

          </li>
          <li className={styles.item}>
            <svg className={styles.icon}>
              <use href={sprite + "#icon-certificate"} />
            </svg>
            <p className={styles.step}>Крок №4</p>
            <p>Підписатння договору між сторонами</p>
            {/* <p>
              Переглянути договір можна
              <a href="https://docs.google.com/document/d/1PrBCX_6EaCoqrsxkStFdvNsxW4_vGCJh/edit?usp=sharing&ouid=114358473608478208701&rtpof=true&sd=true" alt="link" target="_blank">тут</a>
            </p> */}
          </li>
        </ul>
        <div className={styles.buttonWrap}>
          <Button variant="outline-warning" type="button" onClick={handleShow}>
            Оформити заявку
          </Button>
        </div>

      </Container>
    </section>
  );
};

export default OrderWorks;
