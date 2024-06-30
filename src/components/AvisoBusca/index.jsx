import React from "react";
import styled from "styled-components";

const Div = styled.div`
  height: 40vh;
  /* border: solid; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function index() {
  return (
    <Div>
      <h2>Não Encontrado...</h2>
    </Div>
  );
}
