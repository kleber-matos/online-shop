import React from "react";
import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  div {
    /* border: solid; */
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 12px;
    width: 50vw;
    max-width: 700px;
    height: 30vh;
    background-color: white;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 10px;
  }

  img {
    /* border: solid; */
    height: 10vh;
    width: 30%;
    max-width: 200px;
  }
`;

export default function index() {
  return (
    <Div>
      <div>
        <h1>Obrigado(a) pelas compras, volte sempre!</h1>
        <img src="https://sonobel.com.br/assets/img/carregando1.gif" alt="" />
        <p>Você está sendo redirecionado para pagina inicial!</p>
      </div>
    </Div>
  );
}
