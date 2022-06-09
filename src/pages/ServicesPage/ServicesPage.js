import { Outlet } from "react-router-dom";
import Cover from "../../components/Cover";
import Services from "../../components/Services";
import styles from "./ServicesPage.module.css";

const ServicesPage = () => {
  return (
    <div className={styles.wrapper}>
      <Services />
    </div>
  );
};

export default ServicesPage;
