import styled from "styled-components";

export const Produtos = styled.section`
  display: flex;
  justify-content: center;
  border: solid;

  div {
    width: 80%;
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
  }
`;

export const Oferta = styled.section`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2em;
  }
`;

export const BoxProdutos = styled.div`
  display: flex;
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
  display: flex;
  justify-content: center;
`;
