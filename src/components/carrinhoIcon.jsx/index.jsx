import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";

import styled from "styled-components";

const Box = styled.div`
  width: 32px;
  display: flex;
  justify-content: center;
  align-items: center;

  .icon {
    position: absolute;
    z-index: 0;
    font-size: 2.2em;
  }

  span {
    position: relative;
    z-index: 1;
    color: white;
    left: 2px;
    bottom: 5px;
    font-size: 0.6em;
  }
`;

export default function index({ valor }) {
  return (
    <>
      <Box>
        <FaCartShopping className="icon" />
        <span>{valor}</span>
      </Box>
    </>
  );
}
