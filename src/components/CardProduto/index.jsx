import React from "react";
import * as S from "./styled";

export default function ProductCard({
  imagem,
  titulo,
  descricao,
  preco,
  etiqueta,
}) {
  return (
    <S.Card>
      <S.ImageContainer>
        <img src={imagem} alt={titulo} />
        {etiqueta && <S.Etiqueta cor={etiqueta}>{etiqueta}</S.Etiqueta>}
      </S.ImageContainer>

      <S.Content>
        <S.Title>{titulo}</S.Title>
        <S.Description>{descricao}</S.Description>
        <S.Price>R$ {preco}</S.Price>
        <S.BuyButton>Adicionar ao carrinho</S.BuyButton>
      </S.Content>
    </S.Card>
  );
}
