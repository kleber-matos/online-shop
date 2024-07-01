import styled from "styled-components";

export const Produtos = styled.section`
  display: flex;
  justify-content: center;

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

export const Card = styled.div`
  width: 25vw;
  max-width: 300px;
  height: 55vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
  padding: 1em;
  border-radius: 8px;
  margin-bottom: 3rem;
  overflow: hidden;

  div {
    height: 25vh;

    width: 100%;
    display: flex;
    justify-content: center;
  }

  img {
    width: 80%;
    height: 25vh;
  }
  p {
    font-weight: 300;
  }

  .preco {
    font-weight: 600;
  }

  button {
    border: solid 2px #2f4f4f;
    background-color: transparent;
    font-weight: 600;
    cursor: pointer;
    border-radius: 3px;
    height: 3vh;
  }

  button:hover {
    background-color: #2f4f4f;
    color: white;
    transition: 0.4s;
  }

  @media (max-width: 800px) {
    img {
      width: 40%;
      height: 16vh;
    }

    p {
      font-size: 0.6em;
    }

    h2 {
      font-size: 1em;
    }

    button {
      height: 4vh;
    }
  }
`;

export const Span = styled.span`
  color: ${(props) => (props.cor === "Mais vendido" ? "orange" : "green")};
`;
