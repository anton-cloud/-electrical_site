import sprite from "../../icons/sprite.svg";
import styles from "./SocailIcons.module.css";

const SocailIcons = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <svg className={styles.icon}>
          <use href={sprite + "#icon-telegram"} />
        </svg>
      </li>
      <li className={styles.item}>
        <svg className={styles.icon}>
          <use href={sprite + "#icon-email"} />
        </svg>
      </li>
      <li className={styles.item}>
        <svg className={styles.icon}>
          <use href={sprite + "#icon-viber"} />
        </svg>
      </li>
    </ul>
  );
};

export default SocailIcons;
