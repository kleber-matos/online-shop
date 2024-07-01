import styled, { css } from "styled-components";

const Center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Header = styled.header`
  background-color: #f0e68c;
  ${Center}
`;
export const Section = styled.header`
  ${Center}
  width: 80vw;
  height: 11vh;
  max-width: 1600px;
  justify-content: space-between;

  @media (max-width: 990px) {
    height: 10vh;
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
  width: 15%;
  color: #2f4f4f;
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
  width: 30%;
  height: 4vh;
  cursor: pointer;
  max-width: 300px;
  border-radius: 5px;
  padding-right: 10px;
  background-color: white;
  justify-content: space-between;

  input {
    width: 90%;
    border: none;
    outline: none;
    font-weight: 600;
    padding-left: 10px;
  }

  @media (max-width: 990px) {
    width: 70%;
    display: flex;
  }
`;

export const IconCart = styled.div`
  border: solid;
`;
