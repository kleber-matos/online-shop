import React, { useContext } from "react";
import * as S from "./styled";

import { CartContext } from "../../context/CartContext";
import CardProduto from "../../components/CardProduto";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer";
import Aviso from "../../components/Aviso";

export default function Home() {
  const { carrinho, setCarrinho, Produtos, setQuantidade, busca } =
    useContext(CartContext);

  const adicionarCarrinho = (id) => {
    const filtrado = Produtos.find((e) => e.id === id);
    filtrado.id = Math.random() * 1;
    setCarrinho(carrinho.concat(filtrado));
    setQuantidade(carrinho.length + 1);
  };

  const searchFilter = Produtos.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <>
      <Header buscaOn />

      {searchFilter == "" ? (
        <Aviso sobre={"Produto não encontrado..."} />
      ) : (
        <S.Oferta>
          <h2>Ofertas do dia!</h2>
        </S.Oferta>
      )}

      <S.Container>
        <S.BoxProdutos>
          {searchFilter.map((item, index) => (
            <div onClick={() => adicionarCarrinho(item.id)}>
              <CardProduto
                key={index}
                imagem={item.imagem}
                titulo={item.nome}
                descricao={item.descricao}
                etiqueta={item.etiqueta}
                preco={item.preco}
              />
            </div>
          ))}
        </S.BoxProdutos>
      </S.Container>

      <Footer />
    </>
  );
}
