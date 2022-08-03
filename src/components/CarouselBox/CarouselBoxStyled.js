import styled from "styled-components";





export const CarouselBoxStyled = styled.section`
  max-height: 70vh;
  position: relative;
  font-family: 'Poppins', sans-serif;

  .title {
    color: #FFBB00;
    line-height: 30px;
    font-weight: 500;
    font-size: 30px;
    text-shadow:0px 5px 10px #ffffff;

    font-family: 'Poppins', sans-serif;
     word-wrap: normal;
    overflow-wrap: normal;
    text-align: center;  
  }



  @media screen and (max-width: 400px) {
    .wrapper a {
    margin-bottom: 20px;
  }
  }

  @media screen and (min-width: 768px) {
  .title {
    font-size: 40px;

  }
  

  .subTitle,
  .btn {
    font-size: 24px;
  }
  }

  @media screen and (min-width: 1024px) {
  .title {
    font-size: 56px;


  }
  }

  .carousel {
    max-height: 70vh;
  }

  .w-100 {
    max-height: 70vh;
  }

  .wrapper {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    position: absolute;
    z-index: 1;

    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.2));
  }

  .subTitle,
  .btn {
    /* font-family: "Indie Flower", cursive; */
    text-align: center;
    color: inherit;
    /* font-size: 16px; */
  }

  /* .title {
    font-family: "Lobster Two", cursive;
    word-wrap: normal;
    overflow-wrap: normal;
    text-align: center;
  } */


`;


