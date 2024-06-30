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
`;

export const Logo = styled.div`
  ${Center}
  width: 40%;
  max-width: 320px;
  color: #2f4f4f;
  font-size: 1.5em;
  justify-content: space-between;

  .icon {
    font-size: 2em;
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
`;

export const IconCart = styled.div`
  border: solid;
`;
