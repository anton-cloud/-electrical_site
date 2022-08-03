import Container from "../../../components/Container";
import Cover from "../../../components/Cover";
import ImageSection from "../../../components/ImageSection";
import styles from "./ElecrtricalnstPage.module.css";

import bgImage from "../../../images/services_section/1.jpg";
import ElectricalInstallWorks from "../../../components/ElectricalInstallWorks";

const ElecrtricalnstPage = ({ handleShow }) => {
  return (
    <>
      <ImageSection
        bgImg={bgImage}
        subTitle={"Послуги"}
        title={"Монтажні роботи"}
      />
      <section className={styles.wrapper}>
        <Container>
          <ElectricalInstallWorks handleShow={handleShow} />
        </Container>
      </section>
    </>
  );
};

export default ElecrtricalnstPage;
