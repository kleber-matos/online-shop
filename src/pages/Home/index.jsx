import React, { useContext } from "react";
import Header from "../../components/Header/index";
import * as S from "./styled";

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import AvisoBusca from "../../components/AvisoBusca";
import Footer from "../../components/Footer";

export default function Home() {
  const { carrinho, setCarrinho, Produtos, quantidade, setQuantidade, busca } =
    useContext(CartContext);

  const adicionarCarrinho = (id) => {
    const filtrado = Produtos.find((e) => e.id === id);
    filtrado.id = Math.random() * 1;
    console.log(filtrado);
    setCarrinho(carrinho.concat(filtrado));
    setQuantidade(carrinho.length + 1);
  };

  const searchFilter = Produtos.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
      <Header />

      <S.Oferta>
        <h2>Ofertas do dia!</h2>
      </S.Oferta>

      <S.Produtos>
        <div>
          {searchFilter.map((item, index) => (
            <S.Card key={index}>
              <div>
                <img src={item.imagem} alt={item.nome} />
              </div>
              <h2>{item.nome}</h2>
              <p>{item.descricao}</p>
              <S.Span cor={item.etiqueta}>{item.etiqueta}</S.Span>
              <p className="preco">R$ {item.preco.toFixed(2)}</p>
              <button onClick={() => adicionarCarrinho(item.id)}>
                Comprar
              </button>
            </S.Card>
          ))}

          {searchFilter == "" ? <AvisoBusca /> : ""}
        </div>
      </S.Produtos>
      <Footer />
    </>
  );
}
