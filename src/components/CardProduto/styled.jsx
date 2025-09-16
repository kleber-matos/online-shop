import styled from "styled-components";

export const Card = styled.div`
  width: 100%;
  max-width: 300px;
  height: auto;
  min-height: 380px;
  height: 50vh;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 180px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f9fa;
  overflow: hidden;

  img {
    width: auto;
    height: 80%;
    object-fit: contain;
    transition: transform 0.3s ease;

    ${Card}:hover & {
      transform: scale(1.05);
    }
  }
`;

export const Etiqueta = styled.span`
  position: absolute;
  top: 12px;
  right: 12px;
  padding: 4px 10px;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
  color: white;
  background: ${(props) => {
    switch (props.cor) {
      case "Mais vendido":
        return "#FF9F43";
      case "Novidade":
        return "#6C5CE7";
      case "Oferta":
        return "#E84393";
      default:
        return "#00B894";
    }
  }};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

export const Content = styled.div`
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  gap: 0.8rem;
`;

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: 600;
  margin: 0;
  color: #2d3436;
  line-height: 1.3;
`;

export const Description = styled.p`
  font-size: 0.9rem;
  font-weight: 400;
  color: #636e72;
  line-height: 1.5;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  flex-grow: 1;
`;

export const Price = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  color: #2d3436;
  margin: 0;

  &::before {
    content: "R$ ";
    font-size: 1rem;
    vertical-align: super;
    margin-right: 2px;
  }
`;

export const BuyButton = styled.button`
  width: 100%;
  padding: 0.8rem;
  border: none;
  border-radius: 6px;
  background: #2f4f4f;
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 0.5rem;

  &:hover {
    background: #3a5f5f;
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(47, 79, 79, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

// Media queries para responsividade
export const Responsive = {
  Card: styled(Card)`
    @media (max-width: 1024px) {
      max-width: 280px;
    }

    @media (max-width: 768px) {
      max-width: 100%;
      min-height: 350px;

      ${ImageContainer} {
        height: 160px;
      }
    }

    @media (max-width: 480px) {
      min-height: 320px;

      ${Content} {
        padding: 1rem;
      }

      ${Title} {
        font-size: 1.1rem;
      }

      ${Price} {
        font-size: 1.2rem;
      }
    }
  `,
};
