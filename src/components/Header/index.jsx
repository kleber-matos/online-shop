import React, { useContext } from "react";
import * as S from "./styled";
import { FaStoreAlt } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import CarrinhoIcon from "../carrinhoIcon.jsx";

export default function index({ buscaOn }) {
  const { quantidade, setBusca, busca } = useContext(CartContext);

  return (
    <S.Header>
      <section>
        <S.Section>
          <S.Logo>
            <Link className="logo" to="/">
              <FaStoreAlt className="icon" />
              <h2>ONLINE SHOP</h2>
            </Link>
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
              <li>
                <Link to="/">Home</Link>
              </li>
              <li className="hidde">Sobre</li>
              <li className="hidde">Contato</li>
            </ul>
          </S.Nav>
          {buscaOn && (
            <S.Busca>
              <input
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar produto..."
                type="text"
                value={busca}
              />
              <FaSearch />
            </S.Busca>
          )}
        </S.Section>
      </section>
    </S.Header>
  );
}
