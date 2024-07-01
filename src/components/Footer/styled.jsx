import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  background-color: #f0e68c;
`;

export const Container = styled.section`
  width: 80%;
`;

export const Links = styled.footer`
  height: 20vh;
  display: flex;
  align-items: center;

  div {
    width: 30%;
    height: 15vh;
    padding: 5px;
    margin-right: 5px;
  }

  h3,
  a {
    color: #2f4f4f;
    padding-right: 5px;
  }

  h3 {
    font-size: 1.5em;
    font-weight: 700;
  }

  ul {
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  li {
    display: flex;
    align-items: center;
  }

  @media (max-width: 990px) {
    height: 30vh;
    align-items: center;
    flex-direction: column;
    margin-top: 1rem;

    div {
      display: flex;
      /* border: solid red; */
      flex-direction: column;
      width: 100%;
    }

    h3 {
      font-size: 1.2em;
    }

    li {
      font-size: 0.7em;
    }
  }
`;

export const Dev = styled.section`
  margin-bottom: 2rem;

  span {
    font-weight: 600;
  }

  @media (max-width: 990px) {
    height: 15vh;
    display: flex;
    align-items: center;
    justify-content: center;

    p {
      font-size: 0.9em;
    }
  }
`;
