import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
    list-style: none;
    text-decoration: none;
    color: #2f4f4f;
}

.swal2-popup {
    font-size: 1.6rem;
    background-color: white;
    border-radius: 10px;
    width: 40vw;
    max-width: 500px;
    height: 40vh;

  }

  .swal2-title{
    font-size: 1em;
    color: #2f4f4f;
  }

  .swal2-loader {
border-color: #2f4f4f white #2f4f4f white;
  
  }

  .swal2-timer-progress-bar {
    background-color: #2f4f4f;
  }

 

  @media (max-width: 990px){
    .swal2-popup {
       width: 100%;
       height: 45vh;

  }

  .swal2-title{
    font-size: .7em;
    color: #2f4f4f;
  }

  div:where(.swal2-container) .swal2-html-container{
    font-size: .7em;
  }
 
  }


`;
