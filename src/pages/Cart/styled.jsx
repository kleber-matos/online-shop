import styled, { css } from "styled-components";

const Center = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Card = styled.div`
  display: flex;
  margin: 1rem;
  overflow: hidden;
  padding: 10px;
  border-radius: 10px;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  span {
    font-weight: 600;
  }
`;

export const Container = styled.section`
  display: flex;
  min-height: 51vh;
  justify-content: center;

  section {
    width: 80%;
    display: flex;
    justify-content: space-between;
  }

  @media (max-width: 990px) {
    section {
      flex-direction: column-reverse;
    }
  }
`;

export const Resumo = styled.div`
  width: 30%;
  max-width: 300px;
  height: 23vh;
  display: flex;
  margin-top: 1.7rem;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 990px) {
    width: 100%;
    max-width: 1000px;
  }
`;

export const Itens = styled.div`
  width: 55%;
  padding: 10px;
  max-width: 1000px;
  border-radius: 10px;

  img {
    width: 50px;
  }

  @media (max-width: 990px) {
    width: 100%;
  }
`;

export const Info = styled.div`
  ${Center}
  height: 20vh;
  justify-content: space-between;

  p {
    width: 45%;
    font-weight: 600;
  }

  span {
    width: 20%;
    text-align: end;
  }

  img {
    width: 20%;
    height: 10vh;
    max-width: 100px;
  }

  @media (max-width: 990px) {
    .hidde {
      display: none;
    }

    p {
      width: 70%;
      font-size: 0.6em;
    }
  }
`;

export const Preco = styled.div`
  ${Center}
  height: 5vh;
  justify-content: space-between;

  button {
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    background-color: transparent;
  }

  @media (max-width: 990px) {
    p {
      font-size: 0.7em;
    }
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    width: 49%;
    height: 3vh;
    cursor: pointer;
    font-weight: 600;
    border-radius: 3px;
    border: solid 2px #2f4f4f;
    background-color: transparent;
  }

  button:hover {
    color: white;
    transition: 0.4s;
    background-color: #2f4f4f;
  }

  .cancelar:hover {
    border: none;
    color: #dfdfdf;
    background-color: #d13737;
  }

  @media (max-width: 990px) {
    margin-top: 5px;

    button {
      height: 5vh;
    }
  }
`;
