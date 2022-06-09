import styled from "styled-components";

export const ImageSectionStyled = styled.section`
  /* margin-top: 70px; */
  margin-top: 30px;
  height: 30vh;
  background-size: cover;
  background-color: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media screen and (min-width: 768px) {
    height: 50vh;
  }
`;
