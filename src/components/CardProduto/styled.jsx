import styled from "styled-components";

export const Card = styled.div`
  width: 25vw;
  height: 55vh;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em;
  overflow: hidden;
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

  div {
    width: 100%;
    height: 25vh;
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
    font-weight: 700;
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
    width: 100%;

    img {
      width: 50%;
      height: 20vh;
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

  @media (max-width: 990px) {
    p {
      font-size: 0.8em;
    }
  }
`;

export const Span = styled.span`
  color: ${(props) => (props.cor === "Mais vendido" ? "orange" : "green")};
`;
