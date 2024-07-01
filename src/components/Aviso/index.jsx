import React from "react";
import styled from "styled-components";
import { MdRemoveShoppingCart } from "react-icons/md";
import { Link } from "react-router-dom";

const Div = styled.div`
  height: 51vh;

  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    text-align: center;
    font-size: 1.5em;
    width: 40%;
    max-width: 500px;
    height: 20vh;
  }

  .icon {
    font-size: 3em;
  }

  .verProdutos {
    border: solid 2px #2f4f4f;
    background-color: transparent;
    font-weight: 600;
    cursor: pointer;
    border-radius: 3px;
    height: 3vh;
    width: 20%;
    max-width: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .verProdutos:hover {
    background-color: #2f4f4f;
    color: white;
    transition: 0.4s;
  }

  @media (max-width: 990px) {
    font-size: 0.5em;

    div {
      width: 90%;
      height: 15vh;
    }
  }
`;

export default function index({ sobre, icon }) {
  return (
    <Div>
      <div>
        {icon && <MdRemoveShoppingCart className="icon" />}

        <h2>{sobre}</h2>
      </div>

      {icon && (
        <Link className="verProdutos" to="/">
          Ver produtos
        </Link>
      )}
    </Div>
  );
}
