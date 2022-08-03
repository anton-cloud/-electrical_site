import Services from "../../components/Services";
import styles from "./ServicesPage.module.css";
import Line from "../../components/Line/Line"

const ServicesPage = () => {
  return (
    <div className={styles.wrapper}>
      <Line />
      <Services servicesPage={true} />
    </div>
  );
};

export default ServicesPage;
