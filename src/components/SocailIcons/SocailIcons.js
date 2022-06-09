import sprite from "../../icons/sprite.svg";
import styles from "./SocailIcons.module.css";

const SocailIcons = () => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <a href="https://telegram.me/anton_sh94">
          <svg className={styles.icon}>
            <use href={sprite + "#icon-telegram"} />
          </svg>
        </a>
      </li>

      <li className={styles.item}>
        <a href="mailto:a.sharudylo@gmail.com">
          <svg className={styles.icon}>
            <use href={sprite + "#icon-email"} />
          </svg>
        </a>
      </li>

      <li className={styles.item}>
        <a href="viber://chat?number=%2B380964087199">
          <svg className={styles.icon}>
            <use href={sprite + "#icon-viber"} />
          </svg>
        </a>
      </li>
    </ul>
  );
};

export default SocailIcons;
