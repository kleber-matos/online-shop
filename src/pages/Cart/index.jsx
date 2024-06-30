import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer";
import { FaTrash } from "react-icons/fa";
import AvisoBusca from "../../components/AvisoBusca";
import CompraFinalizada from "../../components/CompraFinalizada";

import * as S from "./styled.jsx";

export default function Cart() {
  const { carrinho, setCarrinho, quantidade, setQuantidade } =
    useContext(CartContext);

  const [finalizado, setFinalizado] = useState(false);

  const removerItem = (id) => {
    const filtrado = carrinho.filter((e) => e.id !== id);
    setCarrinho(filtrado);
    setQuantidade(carrinho.length - 1);
  };

  const cancelar = () => {
    setCarrinho([]);
    setQuantidade(0);
  };

  const finalizar = () => {
    setFinalizado(true);
    setTimeout(() => {
      window.location.pathname = "/";
    }, 7000);
  };

  return (
    <>
      <Header buscaOn={false} />

      {quantidade == 0 ? (
        <AvisoBusca icon sobre={"Seu carrinho está vazio"} />
      ) : (
        <>
          {/* <h1>Carrinho</h1>
          <Link to="/">Voltar</Link>
          <h2>quantidade: {quantidade}</h2>
          <button onClick={() => removerTodos()}>remover todos os itens</button>
          <h2>
            Total: {carrinho.reduce((valor, item) => valor + item.preco, 0)}
          </h2> */}

          {finalizado ? <CompraFinalizada /> : ""}

          <S.Container>
            <section>
              <S.Itens>
                {carrinho.map((item, index) => (
                  <S.Card key={index}>
                    <S.Info>
                      <img src={item.imagem} alt={item.nome} />
                      <p>{item.descricao}</p>
                      <span>Código do produto: {item.id}</span>
                    </S.Info>

                    <S.Preco>
                      <span>R$ {item.preco.toFixed(2)}</span>
                      <p>Frete Grátis</p>
                      <button onClick={() => removerItem(item.id)}>
                        <FaTrash />
                      </button>
                    </S.Preco>
                  </S.Card>
                ))}
              </S.Itens>

              <S.Resumo>
                <h2>Resumo do pedido</h2>
                <p>
                  {quantidade} {quantidade <= 1 ? "Produto" : "Produtos"}
                </p>
                <hr />
                <div>
                  <h2>
                    Total: R${" "}
                    <span>
                      {carrinho.reduce((valor, item) => valor + item.preco, 0)}
                    </span>
                    ,00
                  </h2>
                  <S.Buttons>
                    <button onClick={() => cancelar()} className="cancelar">
                      Cancelar
                    </button>
                    <button onClick={() => finalizar()}>Finalizar</button>
                  </S.Buttons>
                </div>
              </S.Resumo>
            </section>
          </S.Container>
        </>
      )}

      <Footer />
    </>
  );
}
