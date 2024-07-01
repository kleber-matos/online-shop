import styled, { css } from "styled-components";

const Center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Header = styled.header`
  background-color: #f0e68c;
  ${Center}
`;
export const Section = styled.header`
  ${Center}
  justify-content: space-between;
  width: 80vw;
  max-width: 1600px;
  height: 11vh;

  @media (max-width: 990px) {
    height: 10vh;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const Logo = styled.div`
  a {
    display: flex;
  }

  ${Center}
  width: 40%;
  max-width: 320px;
  color: #2f4f4f;
  font-size: 1.5em;
  justify-content: space-between;

  .icon {
    font-size: 2em;
  }

  @media (max-width: 990px) {
    width: 50%;

    .logo {
      display: flex;
      align-items: center;
    }

    h2 {
      font-size: 0.6em;
      margin-left: 5px;
    }

    .icon {
      font-size: 1.5em;
    }
  }
`;

export const Cart = styled.div`
  ${Center}
  color: #2f4f4f;
  width: 15%;
  max-width: 100px;
  justify-content: space-between;

  .icon {
    font-size: 2em;
    cursor: pointer;
  }

  @media (max-width: 990px) {
    width: 30%;

    .icon {
      font-size: 1.7em;
    }
  }
`;

export const Nav = styled.nav`
  width: 30%;
  max-width: 320px;
  ul {
    ${Center}
    justify-content: space-between;
  }

  li {
    font-weight: 800;
  }

  @media (max-width: 990px) {
    .hidde {
      display: none;
    }
  }
`;

export const Busca = styled.div`
  ${Center}
  justify-content: space-between;
  background-color: white;
  cursor: pointer;
  border-radius: 5px;
  padding-right: 10px;
  height: 3vh;
  width: 30%;
  max-width: 300px;

  input {
    border: none;
    padding-left: 10px;
    font-weight: 600;
    outline: none;
    width: 90%;
  }

  @media (max-width: 990px) {
    width: 70%;

    display: flex;
  }
`;

export const IconCart = styled.div`
  border: solid;
`;
