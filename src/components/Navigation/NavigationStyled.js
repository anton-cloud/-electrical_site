import styled from "styled-components";

export const NavigationStyled = styled.nav`
  font-size: 28px;
  text-align: center;

  .link {
    color: #fff;
  }

  .active-link {
    color: red;
  }

  @media screen and (max-width: 1023px) {
    .navListItem:not(:first-child) {
      margin-top: 10px;
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
