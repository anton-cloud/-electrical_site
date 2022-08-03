import Carousel from "react-bootstrap/Carousel";
import image_1 from "../../images/slider/1.jpg";
import image_2 from "../../images/slider/2.jpg";
import image_3 from "../../images/slider/3.jpg";
import { CarouselBoxStyled } from "./CarouselBoxStyled";
import 'animate.css';

const CarouselBox = ({ viewportWidth }) => {
  return (
    <CarouselBoxStyled>
      <div className="wrapper">
        <p className="subTitle animate__animated animate__fadeInLeft">Якісно, Швидко, Доступно</p>
        <h1 className="title animate__animated animate__zoomIn">Електромонтажні роботи  {viewportWidth <= 345 || viewportWidth <= 600
          && <br />}  в Києві </h1 >
        <a href="#OrderWorks" className="btn subTitle animate__animated animate__fadeInRight">
          З чого почати ?
        </a>
      </div>

      <Carousel>
        <Carousel.Item>
          <img className="d-block w-100" loading="lazy" alt="img_1" src={image_1} />

          {/* <Carousel.Caption>
            <h3>Title</h3>
            <p>Lorem10</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" loading="lazy" alt="img_1" src={image_2} />

          {/* <Carousel.Caption>
            <h3>Title</h3>
            <p>Lorem10</p>
          </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img className="d-block w-100" loading="lazy" alt="img_1" src={image_3} />

          {/* <Carousel.Caption>
            <h3>Title</h3>
            <p>Lorem10</p>
          </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </CarouselBoxStyled>
  );
};

export default CarouselBox;
