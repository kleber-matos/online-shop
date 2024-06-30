import React, { useState } from "react";
import Router from "./Router";
import { CartContext } from "./context/CartContext";
import { GlobalStyled } from "./GlobalStyled";

export default function App() {
  const [carrinho, setCarrinho] = useState([]);
  const [quantidade, setQuantidade] = useState(0);
  const [busca, setBusca] = useState("");

  const Produtos = [
    {
      nome: "Apple iPhone 14",
      descricao:
        "O iPhone 14 tem o sistema de câmera dupla mais impressionante do mundo.",
      imagem: "https://m.media-amazon.com/images/I/41t1UNX2zHL._AC_UL320_.jpg",
      preco: 3579,
      quantidade: 5,
      id: 0,
      estoque: true,
      etiqueta: "Mais vendido",
    },
    {
      nome: "Notebook Lenovo IdeaPad",
      descricao:
        "Intel Core i5 12° Geração 8GB RAM 512GB SSD Tela HD 15,6' Windows 11",
      imagem: "https://m.media-amazon.com/images/I/61HQNiJlH7L._AC_SY450_.jpg",
      preco: 2609,
      quantidade: 2,
      id: 1,
      estoque: true,
    },
    {
      nome: "Tablet Samsung",
      descricao:
        "Tablet Samsung Galaxy Tab S9 FE Wifi, 128GB, 6GB RAM, Tela Imersiva de 10.9' Cinza",
      imagem:
        "https://images.kabum.com.br/produtos/fotos/165066/tablet-samsung-galaxy-s7-fe-4g-128gb-android-11-tela-de-12-4-preto-sm-t735nzkqzto_1627059995_original.jpg",
      preco: 2166,
      quantidade: 5,
      id: 2,
      estoque: true,
    },
    {
      nome: "Kindle Amazon",
      descricao:
        "11ª Geração com Tela de 6”, 16GB, Wi-Fi e Iluminação Embutida - Azul",
      imagem:
        "https://www.atacadogames.com/imagem/tablets-e-readers/amazon-kindle-paperwhite-2022-16gb-preto/2/153500.jpg?pfdrid_c=true",
      preco: 455,
      quantidade: 5,
      id: 3,
      estoque: true,
      etiqueta: "Frete Grátis",
    },
    {
      nome: "Smart TV 50'",
      descricao:
        "UHD 4K Samsung 50CU7700, Processador Crystal 4K, Samsung Gaming Hub, Visual Livre de Cabos, Tela sem limites, Alexa built in",
      imagem:
        "https://images.kabum.com.br/produtos/fotos/sync_mirakl/340289/Smart-TV-Samsung-50-Polegadas-Crystal-4K-Wi-fi-3-HDMI-2-USB-Dynamic-Crystal-Color-Alexa-Built-In-UN50BU8000_1705080589_gg.jpg",
      preco: 2374,
      quantidade: 2,
      id: 4,
      estoque: true,
    },
    {
      nome: "Relógio Inteligente",
      descricao:
        "Smartwatch Relógio Inteligente My Watch I Slim Haiz Resistente à Água IP67 Receba Notificações com Funções Esportivas",
      imagem: "https://m.media-amazon.com/images/I/71OBiYrBIFL._AC_SX466_.jpg",
      preco: 189,
      quantidade: 2,
      id: 5,
      estoque: true,
    },
    {
      nome: "Fone De Ouvido",
      descricao:
        "Fone De Ouvido Sem Fio Bluetooth 5.3 Compatível iPhone Android Linha Premium AGOLD FN-BT10",
      imagem: "https://m.media-amazon.com/images/I/51oocxx+K-L._AC_SY741_.jpg",
      preco: 94,
      quantidade: 2,
      id: 6,
      etiqueta: "Frete Grátis",
      estoque: true,
    },
    {
      nome: "Playstation 5 Sony",
      descricao:
        "Console Playstation 5 Sony, SSD 825GB, Controle sem fio DualSense, Com Mídia Física, Branco - 1214A",
      imagem:
        "https://images.kabum.com.br/produtos/fotos/238671/console-sony-playstation-5_1634132556_gg.jpg",
      preco: 3719,
      quantidade: 2,
      id: 7,
      estoque: true,
    },
    {
      nome: "Som JBL Boombox",
      descricao:
        "Caixa De Som JBL Boombox 3 Bluetooth À prova D`água IP67 Portátil 80W RMS Preto",
      imagem: "https://imgs.casasbahia.com.br/1563079046/1xg.jpg",
      preco: 2616,
      quantidade: 2,
      id: 8,
      etiqueta: "Mais vendido",
      estoque: true,
    },
    {
      nome: "Headset Gamer",
      descricao:
        "Headset Gamer Sem Fio Logitech G435 LIGHTSPEED, Conexão USB e Bluetooth, Design Leve e Confortável.",
      imagem: "https://m.media-amazon.com/images/I/81bQEkMevBL._AC_SX679_.jpg",
      preco: 365,
      quantidade: 2,
      id: 9,
      estoque: true,
    },
  ];

  return (
    <>
      <GlobalStyled />
      <CartContext.Provider
        value={{
          Produtos,
          carrinho,
          setCarrinho,
          quantidade,
          setQuantidade,
          busca,
          setBusca,
        }}
      >
        <Router />
      </CartContext.Provider>
    </>
  );
}
