import styled from "styled-components";

export const Card = styled.div`
  display: flex;
  overflow: hidden;
  padding: 10px;
  border-radius: 10px;
  margin: 1rem;
  flex-direction: column;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  span {
    font-weight: 600;
  }
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  min-height: 51vh;

  section {
    display: flex;
    justify-content: space-between;
    width: 80%;
  }

  @media (max-width: 990px) {
    section {
      /* border: solid; */
      flex-direction: column-reverse;
    }
  }
`;

export const Resumo = styled.div`
  margin-top: 1.7rem;
  width: 30%;
  max-width: 300px;
  height: 23vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 990px) {
    /* border: red solid; */
    width: 100%;
    max-width: 1000px;
  }
`;

export const Itens = styled.div`
  padding: 10px;
  width: 55%;
  border-radius: 10px;
  max-width: 1000px;

  img {
    width: 50px;
  }

  @media (max-width: 990px) {
    /* border: red solid; */
    width: 100%;
  }
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 20vh;

  p {
    width: 45%;
    font-weight: 600;
  }

  span {
    text-align: end;
    width: 20%;
  }

  img {
    width: 20%;
    max-width: 100px;
    height: 10vh;
  }

  @media (max-width: 990px) {
    .hidde {
      display: none;
    }

    p {
      font-size: 0.6em;
      /* border: solid; */
      width: 70%;
    }
  }
`;

export const Preco = styled.div`
  display: flex;
  justify-content: space-between;
  height: 5vh;
  display: flex;
  align-items: center;

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
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
    border: solid 2px #2f4f4f;
    background-color: transparent;
    font-weight: 600;
    cursor: pointer;
    border-radius: 3px;
    height: 3vh;
    width: 49%;
  }

  button:hover {
    background-color: #2f4f4f;
    color: white;
    transition: 0.4s;
  }

  .cancelar:hover {
    background-color: #d13737;
    color: #dfdfdf;
    border: none;
  }

  @media (max-width: 990px) {
    margin-top: 5px;
    button {
      height: 5vh;
    }
  }
`;
