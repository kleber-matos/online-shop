import React from "react";
import * as S from "./styled";
import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaInstagram, FaStoreAlt } from "react-icons/fa";

export default function index() {
  return (
    <S.Footer>
      <S.Container>
        <S.Links>
          <div>
            <h3>Links importantes</h3>
            <ul>
              <li>
                <Link to="/cart">Carrinho</Link>
              </li>
              <li>
                <a href="#">Sobre</a>
              </li>
              <li>
                <a href="#">Contato</a>
              </li>
            </ul>
          </div>
          <div>
            <h3>Minhas redes</h3>
            <ul>
              <li>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/kleber-matos/"
                >
                  LinkedIn
                </a>
                <FaLinkedin />
              </li>
              <li>
                <a target="_black" href="https://github.com/kleber-matos">
                  GitHub
                </a>
                <FaGithub />
              </li>
              <li>
                <a target="_blank" href="https://www.instagram.com/kleber_sk/">
                  Instagram
                </a>
                <FaInstagram />
              </li>
            </ul>
          </div>
        </S.Links>

        <S.Dev>
          <p>
            COPYRIGHT 2024 <FaStoreAlt />
          </p>
          <p>
            Desenvolvido por <span>Kleber matos</span>
          </p>
        </S.Dev>
      </S.Container>
    </S.Footer>
  );
}
