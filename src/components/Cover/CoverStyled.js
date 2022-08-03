import styled from "styled-components";

import desc_img from "../../images/bg_1024.jpg";
import mobl_img from "../../images/bg_640.jpg";

export const CoverStyled = styled.section`
  padding-top: 70px;

  text-align: center;

  min-height: 400px;

  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
    url(${mobl_img});

  background-position: center;
  background-repeat: no-repeat;

  background-color: rgba(0, 0, 0, 0.4);

  color: #fff;

  @media screen and (min-width: 640px) {
    background: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)),
      url(${desc_img});
    min-height: 500px;
  }

  .wrapper {
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }

  .subTitle,
  .btn {
    font-family: "Indie Flower", cursive;
  }

  .title {
    font-family: "Lobster Two", cursive;
    word-wrap: normal;
    overflow-wrap: normal;
  }
`;
