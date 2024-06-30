import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { carrinho, setCarrinho, quantidade, setQuantidade } =
    useContext(CartContext);

  const removerItem = (id) => {
    const filtrado = carrinho.filter((e) => e.id !== id);
    setCarrinho(filtrado);
    setQuantidade(carrinho.length - 1);
  };

  const removerTodos = () => {
    setCarrinho([]);
    setQuantidade(0);
  };

  return (
    <>
      <h1>Carrinho</h1>
      <Link to="/">Voltar</Link>
      <h2>quantidade: {quantidade}</h2>
      <button onClick={() => removerTodos()}>remover todos os itens</button>
      <h2>Total: {carrinho.reduce((valor, item) => valor + item.preco, 0)}</h2>

      <section>
        {carrinho.map((item, index) => (
          <div key={index} className="card">
            <img src={item.imagem} alt={item.nome} />
            <h2>{item.nome}</h2>
            <p>{item.descricao}</p>
            <p>R$ {item.preco.toFixed(2)}</p>
            <p>{item.id}</p>
            <button onClick={() => removerItem(item.id)}>Remover</button>
          </div>
        ))}
      </section>
    </>
  );
}
