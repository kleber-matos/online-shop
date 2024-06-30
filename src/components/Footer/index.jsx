import React from "react";
import * as S from "./styled";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaStoreAlt } from "react-icons/fa";

export default function index() {
  return (
    <S.Footer>
      <S.Container>
        <S.Links>
          <div>
            <h3>Links importantes</h3>
            <ul>
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
                <a href="#">LinkedIn</a>
                <FaLinkedin />
              </li>
              <li>
                <a href="#">GitHub </a>
                <FaGithub />
              </li>
              <li>
                <a href="#">Instagram</a>
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
