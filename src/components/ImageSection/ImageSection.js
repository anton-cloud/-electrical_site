import Container from "../Container";
import { ImageSectionStyled } from "./ImageSectionStyled";
import 'animate.css';
import { useEffect } from "react";

const ImageSection = ({ bgImg, title, subTitle }) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, []);

  return (
    <ImageSectionStyled style={{ backgroundImage: `url("${bgImg}")` }} >
      <Container>
        <p className="subTitle animate__animated animate__fadeInLeft">{subTitle}</p>
        <h2 className="title animate__animated animate__zoomIn">{title}</h2>
      </Container>
    </ImageSectionStyled >
  );
};

export default ImageSection;
