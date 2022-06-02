import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <section className={styles.section}>
      <p className={styles.subTitle}>Якісно, Швидко, Доступно</p>
      <h1 className={styles.title}>Електромонтажні роботи в Києві</h1>
      <a className={styles.btn}>Дізнатися більше</a>
    </section>
  );
};

export default HomePage;
