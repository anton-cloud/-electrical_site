import styled from "styled-components";

export const ImageSectionStyled = styled.section`
  /* margin-top: 70px; */
  height: 30vh;
  background-size: cover;
  display: flex;
  justify-content: space-around;
  align-items: center;

  background-color: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3));

.subTitle {
  color: #FFBB00;
  margin-bottom: 10px;
  position: relative;
   z-index: 1;
  
  font-size: 18px; 
}

.title {
  text-shadow:  0px 0px 10px rgba(230, 186, 99, 1);
  position: relative;
   z-index: 1;
}

	position: relative;    
	line-height: 0;

  :after {
	content: "";
	display: block;    
	width: 100%;
	height: 100%;    
	position: absolute;
	top: 0;      
	left: 0;   
	background: transparent;
	background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
	opacity: 0.8;
}
  @media screen and (min-width: 768px) {
    height: 50vh;
  }
`;
