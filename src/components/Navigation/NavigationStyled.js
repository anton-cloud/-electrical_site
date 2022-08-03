import styled from "styled-components";

export const NavigationStyled = styled.nav`
  font-size: 28px;
  text-align: center;

  .link {
    color: #fff;
    font-family: 'Poppins', sans-serif;
    transition: box-shadow 1s ease;
  }

  .active-link {
    color: #FFBB00;
  }

  .link:hover {
    text-shadow:  0px 0px 10px rgba(230, 186, 99, 1);
  }

  @media screen and (max-width: 1023px) {
    .navListItem:not(:first-child) {
      margin-top: 10px;
    }
    .navListItem:last-child {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 1024px) {
    .navList {
      display: flex;
      font-size: 20px;
    }

    .navListItem:not(:first-child) {
      margin-left: 15px;
    }
  }
`;
