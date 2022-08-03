import CarouselBox from "../../components/CarouselBox";
import Cover from "../../components/Cover";
import Line from "../../components/Line/Line";
import OrderWorks from "../../components/OrderWorks";
import Services from "../../components/Services";
import styles from "./HomePage.module.css";

const HomePage = ({ handleShow, viewportWidth }) => {
  return (
    <>
      {/* <Cover /> */}

      <CarouselBox viewportWidth={viewportWidth} />
      <Line />
      <Services />
      <Line />
      <OrderWorks handleShow={handleShow} />
    </>
  );
};

export default HomePage;
