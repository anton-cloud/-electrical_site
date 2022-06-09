import styles from "./OrderWorks.module.css";
import sprite from "../../icons/sprite.svg";
import Container from "../Container";

const OrderWorks = () => {
  return (
    <section className={styles.section}>
      <h3 className={styles.title}>З чього починається робота?</h3>

      <Container>
        <ul className={styles.list}>
          <li className={styles.item}>
            <svg className={styles.icon}>
              <use href={sprite + "#icon-form"} />
            </svg>
            <p className={styles.step}>Крок №1</p>
            <p>Вам потрібно подати заявку на сайті</p>
            <p>Коротка форма. Займе 1хв Вашого часу</p>
            <button>button</button>
          </li>
          <li className={styles.item}>
            <svg className={styles.icon}>
              <use href={sprite + "#icon-calendar"} />
            </svg>
            <p className={styles.step}>Крок №2</p>
            <p>Погодження дати та часу виїзду спеціаліста для оцінки</p>
            <p>Зазвичай це наступний день</p>
          </li>
          <li className={styles.item}>
            <svg className={styles.icon}>
              <use href={sprite + "#icon-contract"} />
            </svg>
            <p className={styles.step}>Крок №3</p>
            <p>Ви отримуєте детальний кошторис та оцінку проєкту</p>
            <p>
              Приклад кошторису <b>тут</b>
            </p>
          </li>
          <li className={styles.item}>
            <svg className={styles.icon}>
              <use href={sprite + "#icon-certificate"} />
            </svg>
            <p className={styles.step}>Крок №4</p>
            <p>Підписатння договору між сторонами</p>
            <p>
              Переглянути договір можна <b>тут</b>
            </p>
          </li>
        </ul>
      </Container>
    </section>
  );
};

export default OrderWorks;
