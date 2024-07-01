import styled, { css } from "styled-components";

const Center = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Produtos = styled.section`
  ${Center}
  border: solid;

  div {
    width: 80%;
    ${Center}
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

export const Oferta = styled.section`
  height: 10vh;
  ${Center}
  h2 {
    font-size: 2em;
  }
`;

export const BoxProdutos = styled.div`
  ${Center}
  justify-content: space-evenly;
  flex-wrap: wrap;
  width: 84%;

  div {
    padding: 7px;
    margin-bottom: 2rem;
    cursor: pointer;
  }
`;

export const Container = styled.section`
  ${Center}
`;
