import React, { useContext, useState } from "react";
import * as S from "./styled.jsx";

import CompraFinalizada from "../../components/CompraFinalizada";
import { CartContext } from "../../context/CartContext";
import Header from "../../components/Header/index";
import Footer from "../../components/Footer";
import Aviso from "../../components/Aviso";

import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

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
    let timerInterval;
    Swal.fire({
      title: "Obrigado(a), volte sempre!",
      html: "Finalizando seu pedido em <b></b> m/s.",
      timer: 4000,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
        window.location.pathname = "/";
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  };

  return (
    <>
      <Header buscaOn={false} />

      {quantidade == 0 ? (
        <Aviso icon sobre={"Seu carrinho está vazio"} />
      ) : (
        <>
          {finalizado && <CompraFinalizada />}

          <S.Container>
            <section>
              <S.Itens>
                {carrinho.map((item, index) => (
                  <S.Card key={index}>
                    <S.Info>
                      <img src={item.imagem} alt={item.nome} />
                      <p>{item.descricao}</p>
                      <span className="hidde">
                        Código do produto: {item.id}
                      </span>
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
