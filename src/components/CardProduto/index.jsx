import React from "react";
import * as S from "./styled";

export default function index({ imagem, titulo, descricao, preco, etiqueta }) {
  return (
    <S.Card key={index}>
      <div>
        <img src={imagem} alt={titulo} />
      </div>
      <h2>{titulo}</h2>
      <p>{descricao}</p>
      <S.Span cor={etiqueta}>{etiqueta}</S.Span>

      <p className="preco">R$ {preco}</p>

      <button>Comprar</button>
    </S.Card>
  );
}
