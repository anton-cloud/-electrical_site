import styles from './ContactNumbers.module.css'
import sprite from '../../icons/sprite.svg'


const ContactNumbers = ({ iconHidden = false }) => {
    return (
        <ul className={styles.contacts__list}>
            <li className={styles.contacts__item}>
                <a className={styles.contacts__link} href="tel:+380962152544">
                    {iconHidden && <svg className={styles.contacts__icon}>
                        <use href={sprite + "#icon-smartPhone"} />
                    </svg>
                    }
                    + 38 (096) 215-25-44
                </a>
            </li>
            <li className={styles.contacts__item}>
                <a className={styles.contacts__link} href="tel:380931184958">
                    {iconHidden && <svg className={styles.contacts__icon}>
                        <use href={sprite + "#icon-smartPhone"} />
                    </svg>
                    }
                    + 38 (093) 118-49-58
                </a>
            </li>
        </ul>
    );
}

export default ContactNumbers;