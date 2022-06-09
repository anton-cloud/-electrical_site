import Container from "../../../components/Container";
import Cover from "../../../components/Cover";
import ImageSection from "../../../components/ImageSection";
import styles from "./ElecrtricalnstPage.module.css";

import bgImage from "../../../images/services_section/1.jpg";

const ElecrtricalnstPage = () => {
  return (
    <>
      <ImageSection
        bgImg={bgImage}
        subTitle={"Послуги"}
        title={"Монтажні роботи"}
      />
      <section className={styles.wrapper}>
        <Container>
          <h1>ElecrtricalnstPage</h1>
          <p>
            Contrary to popular belief, Lorem Ipsum is not simply random text.
            It has roots in a piece of classical Latin literature from 45 BC,
            making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, looked up one of the more
          </p>
        </Container>
      </section>
    </>
  );
};

export default ElecrtricalnstPage;
