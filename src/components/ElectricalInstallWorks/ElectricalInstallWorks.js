import styles from "./ElectricalInstallWorks.module.css";
import cablelayingImg from '../../images/electricalInstallWorks/prokladka-silovogo-kabelya.jpg';
import automationShieldsImg from '../../images/electricalInstallWorks/schitok.jpg'
import socketsІwitchesImg from '../../images/electricalInstallWorks/rozetku.jpg'
import lightingImg from '../../images/electricalInstallWorks/osvitlenya.jpeg'
import electricalApp from '../../images/electricalInstallWorks/electroPriboru.jpg'
import { Button } from "react-bootstrap";



const ElectricalInstallWorks = ({ handleShow }) => {
  return (
    <ul className={styles.list}>
      <li className={styles.item}>
        <img className={styles.img} src={cablelayingImg} alt="img" />
        <h3 className={styles.title}>Прокладка <br /> кабелю</h3>
        <p className={styles.description}>Прокладаємо кабель всередині та зовні будинків, під землею та по опорах ліній електропередач.</p>
      </li>
      <li className={styles.item}>
        <img className={styles.img} src={automationShieldsImg} alt="img" />
        <h3 className={styles.title}>Комутація щитів автоматики</h3>
        <p className={styles.description}>Комплектуємо щити силовими автоматами, УЗО та стабілізаторами напруги.</p>
      </li>
      <li className={styles.item}>
        <img className={styles.img} src={socketsІwitchesImg} alt="img" />
        <h3 className={styles.title}>Установка розеток <br /> та вимикачів</h3>
        <p className={styles.description}>Монтуємо механічну, сенсорну внутрішню та вуличну електрофурнітуру.</p>
      </li>
      <li className={styles.item}>
        <img className={styles.img} src={lightingImg} alt="img" />
        <h3 className={styles.title}>Установка <br />  освітлення</h3>
        <p className={styles.description}>Монтуємо внутрішнє, ландшафтне, святкове та спеціальне освітлення.</p>
      </li>
      <li className={styles.item}>
        <img className={styles.img} src={electricalApp} alt="img" />
        <h3 className={styles.title}>Підключення електроприладів</h3>
        <p className={styles.description}>Підключаємо електролічильники, варильні поверхні, кухонні витяжки, насоси, та інше обладнання.</p>
      </li>
      <li className={styles.item}>
        <h3 className={styles.title}>Залиште заявку</h3>
        <p className={styles.description}>І наш фахівець зв'яжеться з вами найближчим часом!</p>
        <Button variant="outline-light" type="button" onClick={handleShow}>
          Оформити заявку
        </Button>
      </li>
    </ul>
  );
}

export default ElectricalInstallWorks;