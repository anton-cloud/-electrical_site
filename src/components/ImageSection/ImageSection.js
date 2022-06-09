import Container from "../Container";
import { ImageSectionStyled } from "./ImageSectionStyled";

const ImageSection = ({ bgImg, title, subTitle }) => {
  return (
    <ImageSectionStyled style={{ backgroundImage: `url("${bgImg}")` }}>
      <Container>
        <p>{subTitle}</p>
        <h2>{title}</h2>
      </Container>
    </ImageSectionStyled>
  );
};

export default ImageSection;
