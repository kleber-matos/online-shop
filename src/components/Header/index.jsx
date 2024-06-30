import React, { useContext } from "react";
import * as S from "./styled";
import { FaStoreAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CarrinhoIcon from "../carrinhoIcon.jsx";

export default function index() {
  const { quantidade, setBusca, busca } = useContext(CartContext);

  return (
    <S.Header>
      <section>
        <S.Section>
          <S.Logo>
            <FaStoreAlt className="icon" />
            <h2>ONLINE SHOP</h2>
          </S.Logo>
          <S.Cart>
            <FaUser className="icon" />

            <Link to="/cart">
              <CarrinhoIcon valor={quantidade} />
            </Link>
          </S.Cart>
        </S.Section>

        <S.Section>
          <S.Nav>
            <ul>
              <li>Home</li>
              <li>Sobre</li>
              <li>Contato</li>
            </ul>
          </S.Nav>
          <S.Busca>
            <input
              onChange={(e) => setBusca(e.target.value)}
              placeholder="Buscar produto..."
              type="text"
              value={busca}
            />
            <FaSearch />
          </S.Busca>
        </S.Section>
      </section>
    </S.Header>
  );
}
