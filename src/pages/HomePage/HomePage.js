import Cover from "../../components/Cover";
import OrderWorks from "../../components/OrderWorks";
import Services from "../../components/Services";
import styles from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <Cover />
      <Services />
      <OrderWorks />
    </>
  );
};

export default HomePage;
