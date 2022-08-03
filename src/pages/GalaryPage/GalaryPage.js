import Container from "../../components/Container";
import PhotoGalary from "../../components/PhotoGalary";
import { GalaryPageStyled } from "./GalaryPageStyled";

const GalaryPage = () => {
  return (
    <GalaryPageStyled>
      <Container>
        <PhotoGalary />
      </Container>
    </GalaryPageStyled>
  );
};

export default GalaryPage;
